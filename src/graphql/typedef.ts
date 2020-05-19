import { gql } from 'apollo-server-express';

const typeDefs = gql`
    type Account {
        _id: String
        id: String
        account_id: Int
        limit: Int!
        products: [String]
    }
    
    type Query {
        getAccounts(_id: String): [Account]
    }
`;
export default typeDefs
