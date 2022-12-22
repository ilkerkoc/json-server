## JSON REST API Endpoints
This code creates REST API endpoints for a JSON file containing parent/child objects.

## Prerequisites
Node.js

Express.js

## Installation
Clone the repository
Run npm install to install the dependencies
Start the server with node server.js
```
npm i
node server.js
```

## Endpoints
The following endpoints are created:

GET /parent-id: returns the parent object with the specified ID
GET /parent-id/child-id: returns the child object with the specified ID under the parent object with the specified ID

## Configuration
The JSON file containing the parent/child objects is located at ./data.json. Modify this file to change the data returned by the API endpoints.
The port on which the API server runs can be configured in index.js.

## Usage
You can use any HTTP client (such as Postman or cURL) to send requests to the API endpoints.
Here's an example of a request to get the parent object with ID parent-1:

```
GET /parent-1 HTTP/1.1
http://localhost:3000/parent-1
```
And here's an example of a request to get the child object with ID child-1 under the parent object with ID parent-1:
```
GET /parent-1/child-1 HTTP/1.1
http://localhost:3000/parent-1/child-1
```

## License
This project is licensed under the MIT License.

## Credit
This project completely written by chatGPT
