# Quick Metaquery
Query through all your databases/schemas.

## Getting Started

Follow these steps to set up and run the project:

1. **Copy the environment file**
   Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. **Configure environment variables**
   Fill out the required environment variables in the `.env` file:
   - Database configuration: Provide the database access credentials.
   - Database list filters: Specify which databases should be queried.
   - SQL statement to execute: Define the SQL statement to be executed on each database.

3. **Install dependencies**
   Run the following command to install the required dependencies:
   ```bash
   npm install
   ```

4. **Start the application**
   Start the application using:
   ```bash
   npm run start
   ```

5. **Check the logs**
   Look at the terminal for logs to monitor the execution.

6. **View the results**
   Open the generated `results.csv` file to view the query results.

## Notes

- Ensure your database credentials and configurations are correct in the `.env` file.
- The `results.csv` file will be created in the root directory of the project.

## Requirements

- Node.js (v20 or higher)

## License

This project is licensed under the MIT License.
