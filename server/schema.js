const { gql } = require('apollo-server');

const typeDefs = gql`
  "This is a buy order."
  type Buy {
    "This is the unique identifier of the limit order."
    id: ID!
    "This is the price of the buy limit order, be sure to divide by 100."
    limit: Int!
    "This is the user that created the order."
    user: User
  }

  "This is a sell order."
  type Sell {
    "This is the unique identifier of the limit order."
    id: ID!
    "This is the price of the sell limit order, be sure to divide by 100."
    limit: Int!
    "This is the user that created the order."
    user: User
  }
  "This is a user."
  type User {
    "This is a user id."
    id: ID
    "This is a user name."
    name: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    "This will give you an array of all buy orders."
    buyOrders: [Buy]
    "This will give you an array of all sell orders."
    sellOrders: [Sell]
  }
`;
module.exports = typeDefs