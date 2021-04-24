import { ApolloServer } from "apollo-server-micro";
import { resolvers } from "gql/resolvers";
import { typeDefs } from "gql/typeDefs";

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
