import "reflect-metadata";
import { NextApiRequest, NextApiResponse } from "next";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-micro";
import { Container } from "typedi";
import { BlogResolver } from "gql/resolvers/BlogResolver";

const bootstrap = async (req: NextApiRequest, res: NextApiResponse) => {
  const schema = await buildSchema({
    resolvers: [BlogResolver],
    container: Container,
    emitSchemaFile: true,
    validate: false,
  });

  const context = () => ({
      token: req.headers.authorization,
  });

  const apolloServer = new ApolloServer({ schema, context });
  return apolloServer.createHandler({ path: "/api/graphql" })(req, res);
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default bootstrap;
