using Microsoft.AspNetCore.Mvc;
using DotnetApiDemo.Data;
using DotnetApiDemo.Models;
using Microsoft.EntityFrameworkCore;

namespace DotnetApiDemo.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ItemsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ItemsController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Item>>> GetItems() =>
            await _context.Items.ToListAsync();

        [HttpPost]
        public async Task<ActionResult<Item>> PostItem(Item item)
        {
            _context.Items.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetItems), new { id = item.Id }, item);
        }
    }
}
