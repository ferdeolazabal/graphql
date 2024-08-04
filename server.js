const path = require("path");
const express = require("express");

const { createYoga } = require("graphql-yoga");
const { loadFilesSync } = require("@graphql-tools/load-files");
const { makeExecutableSchema } = require("@graphql-tools/schema");

const executableSchema = makeExecutableSchema({
  typeDefs: loadFilesSync(path.join(__dirname, "**/*.graphql")),
  resolvers: loadFilesSync(path.join(__dirname, "**/*.resolvers.js")),
});

const app = express();

const yoga = createYoga({
  schema: executableSchema,
  graphiql: true,
});

app.use("/graphql", yoga);

app.listen(3000, () => {
  console.log(`Running GraphQL server at http://localhost:${3000}/graphql`);
});
