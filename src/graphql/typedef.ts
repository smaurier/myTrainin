import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Account {
        _id: String
        id: String
        account_id: Int
        limit: Int!
        products: [String]
    }

    type User {
        _id: String
        id: String
        email: String!
        password: String!
    }
    
    type Query {
        getAccounts(_id: String): [Account]
    }

    type Mutation {
        addUser(_id: String, mail: String, password: String): User
    }
`;

export default typeDefs
