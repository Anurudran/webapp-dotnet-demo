## Overview

This is a simple full-stack demo app that lets you add items via a React frontend, backed by an ASP.NET Core Web API and a SQL Server database (running in Docker).

## Tech Stack

- **Frontend**: React  
- **Backend**: ASP.NET Core Web API  
- **Database**: SQL Server (Docker)  
- **ORM**: Entity Framework Core  

## Features

- **Read**: Fetch and display all items on load  
- **Create**: Add new items via a form

## Getting Started

1. **Start SQL Server**  
   Make sure Docker is running, then:
   ```bash
   docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Password!123' \
     -p 1433:1433 --name sqlserver \
     -d mcr.microsoft.com/mssql/server:2022-latest
2. ** Start backend

From the backend project folder, run:
```bash
cd backend/DotnetApiDemo
dotnet ef database update
dotnet run
````
3. ** Start frontend

From the backend project folder, run:
```bash
cd frontend
npm install
npm start

