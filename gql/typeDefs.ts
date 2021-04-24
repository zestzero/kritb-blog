import { gql } from "apollo-server-core";

const Blog = gql`
  type Query {
    blogs: [Blog!]!
  }
  type Blog {
    title: String
  }
`;

export const typeDefs = [Blog];
