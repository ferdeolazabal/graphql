// @ts-nocheck
const path = require("path");
const express = require("express");

const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const { json } = require("body-parser");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const startApolloServer = async () => {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: loadFilesSync(path.join(__dirname, "**/*.graphql")),
    resolvers: loadFilesSync(path.join(__dirname, "**/*.resolvers.js")),
  });

  const server = new ApolloServer({
    schema,
  });

  await server.start();

  app.use("/graphql", json(), expressMiddleware(server));

  await new Promise((resolve) => app.listen({ port: 3000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:3000/graphql`);
};

startApolloServer();
