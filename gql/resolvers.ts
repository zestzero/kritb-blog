import { IResolvers } from "graphql-tools";

export const resolvers: IResolvers = {
  Query: {
    blogs(parent, args, context) {
      return [{ title: "Nextjs" }];
    },
  },
};
