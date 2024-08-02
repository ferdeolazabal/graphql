const express = require("express");
const { createYoga, createSchema } = require("graphql-yoga");

const schema = createSchema({
  typeDefs: `
    type Query {
      product: Product
      products: [Product]
      orders: [Order]
    }
    type Product {
      id: ID!
      description: String!
      reviews: [Review]
      price: Float!
    }

    type Review {
      rating: Int!
      comment: String
    }

    type Order {
      id: ID!
      date: String!
      subtotal: Float!
      items: [OrderItem]
    }

    type OrderItem {
      product: Product!
      quantity: Int!
    }
  `,

  resolvers: {
    Query: {
      product: () => ({
        id: "1",
        description: "T-Shirt",
        reviews: [
          {
            rating: 4,
            comment: "Great product!",
          },
        ],
        price: 23.66,
      }),
      products: () => [
        {
          id: "1",
          description: "Jacket",
          reviews: [
            {
              rating: 4,
              comment: "Great product!",
            },
          ],
          price: 50.2,
        },
        {
          id: "2",
          description: "Shoes",
          reviews: [
            {
              rating: 5,
              comment: "Awesome product!",
            },
          ],
          price: 20.3,
        },
      ],
      orders: () => [
        {
          id: "1",
          date: "2020-01-01",
          subtotal: 100.0,
          items: [
            {
              product: {
                id: "1",
                description: "T-Shirt",
                reviews: [
                  {
                    rating: 4,
                    comment: "Great product!",
                  },
                ],
                price: 23.66,
              },
              quantity: 2,
            },
          ],
        },
      ],
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
