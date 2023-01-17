# Bank of Flatiron

## Instructions

For this project, you’ll be building out a React application that displays a
list of your recent bank transactions, among other features.

Part of what this code challenge is testing is your ability to follow given
instructions. While you will definitely have a significant amount of freedom in
how you implement the features, be sure to carefully read the directions for
setting up the application.

## Setup

1. In your project directory, create a db.json file and use this [data](https://docs.google.com/document/d/1EWN0qLfAWfgzO1N2P8H5WmrsTx0nMkhp3s-rXVESTNA/edit) for your server DB.
2. Run this command to get the backend started: `json-server --watch db.json`
3. In a new terminal, run `npm start`. This will run your React app in a new port.

## Endpoints

The base URL for the backend is: `http://localhost:3000`

## Core Deliverables

As a user, I should be able to:

- See a table of the transactions.
- Fill out and submit the form to add a new transaction. This should add the new transaction to the table **as well as post the new transaction to the backend
  API for persistence**.
- Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.

### Endpoints for Core Deliverables

#### GET `/transactions`

Example Response:

```json
[
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },
  {
    "id": 2,
    "date": "2019-12-01",
    "description": "South by Southwest Quinoa Bowl at Fresh & Co",
    "category": "Food",
    "amount": -10.55
  }
]
```

#### POST `/transactions`

Required Headers:

```js
{
  "Content-Type": "application/json"
}
```

Request Object:

```json
{
  "date": "string",
  "description": "string",
  "category": "string",
  "amount": number
}
```

Example Response:

```json
{
  "id": 1,
  "date": "2019-12-01",
  "description": "Paycheck from Bob's Burgers",
  "category": "Income",
  "amount": 1000
}
```
