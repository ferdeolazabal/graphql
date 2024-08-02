const express = require("express");
const { createYoga, createSchema } = require("graphql-yoga");

const schema = createSchema({
  typeDefs: `
    type Query {
      description: String
      price: Float
    }
  `,
  resolvers: {
    Query: {
      description: () => "Red Shoe",
      price: () => 42.12,
    },
  },
});

const app = express();

const yoga = createYoga({
  schema,
  context: (req) => ({
    // Context factory gets called for every request
    //myToken: req.headers.get('authorization')
    // I've commented this line because it was causing problems and it seems to work :)
  }),
  graphiql: true,
});

app.use("/graphql", yoga);

app.listen(3000, () => {
  console.log(`Running GraphQL server at http://localhost:${3000}/graphql`);
});
