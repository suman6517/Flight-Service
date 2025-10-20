#  Flight Service
The Flight Service is a core microservice-based API responsible for managing all flight, airport, and city-related operations, including creating, updating, deleting, and retrieving flight data.

It serves as the primary data provider for other services such as the **[Flight Booking Service](https://github.com/suman6517/Flight-Booking-Service)** and **[Notification Service ](https://github.com/suman6517/flight-notification-service)**.  Ensuring clean separation of concerns, scalability, and maintainable architecture across the system.

This service is built as part of a microservice-oriented flight booking platform, inspired by real-world systems like MakeMyTrip and Expedia.
While the Flight Service handles all flight-related business logic, other microservices manage bookings, seat availability, and user notifications, working together to form a complete, production-style backend system.
## Project File Structure

### `src/` - Source Code Directory
This folder contains all the actual source code for the project, excluding tests (consider creating a separate `test/` folder).

Let's explore the `src/` folder structure:

#### ** Config **
Contains all configurations and setup files for libraries and modules.
- **Example**: `server-config.js` - Sets up dotenv for cleaner environment variable usage
- **Example**: Logging library configurations for meaningful application logs

#### ** Routes** 
Registers routes with their corresponding middleware and controllers.

#### ** Middlewares**
Intercepts incoming requests for validation, authentication, and other preprocessing tasks.

#### ** Controllers**
Acts as the final middleware layer before business logic execution.
- Receives incoming requests and data
- Passes data to the business layer
- Structures API responses and sends output

#### **📁 Repositories**
Contains all database interaction logic.
- Raw SQL queries
- ORM queries
- Database-specific operations

#### ** Services**
Whole business logic and interacts with repositories for database operations.

#### ** Utils**
Contains helper methods, error classes, and utility functions.

## ⚙️ Project Setup

### Step 1: Download and Setup
1. Download this template from GitHub
2. Open it in your favorite text editor

### Step 2: Environment Configuration
Create a `.env` file in the root directory and add the following:


### Step 3: Go inside the folder path and execute the following command:

```
npm install 
```

 ```
PORT=<port number of your choice>
```

**Example:**
```
PORT=3000
```


### Step 3: Database Configuration
Inside the `src/config/` folder, create a file named `config.json` with the following content:

```
{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```
##### Or You Can do it by excuting one command 
Go Inside `src/ Then Paste the given command in intregratrd terminal:-
```
npx sequelize init
```
- By executing the above command you will get migrations and seeders along with a `config.json` inside the Config Folder.
### Environment-Specific Configuration

#### **Development Environment**
Update the following fields in the `development` section:
- `username` - Your database username
- `password` - Your database password
- `dialect` - Your database type (mysql, postgres, sqlite, etc.)

#### **Test/Production Environment**
For test or production environments:
- Replace all database credentials accordingly
- **Important**: Replace the `host` value with your hosted database URL


### TO run the server follow the given comand
```
npm run dev
```


  
