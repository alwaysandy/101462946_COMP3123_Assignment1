# COMP3123 Assignment 1

## Prerequisites

To run this project you need to have **Docker** installed.

## Installation & Setup

1. Clone this project
2. Navigate into the project folder:
   ```bash
   cd <project-folder>
   ```
3. Run the following command:
   ```bash
   docker compose up --build -d
   ```

## Verifying the Server

You will know the server is running if you:

1. Open a browser
2. Navigate to `localhost:3001`
3. See the message: **"Server is running"**

> **Note:** Once the project is installed, comment out that endpoint in `server.js`

## Testing

Endpoint tests are included in this repository in the form of a **Postman JSON file**. 

To test the project locally:
- Import the Postman collection into Postman
- Run the tests against your local instance