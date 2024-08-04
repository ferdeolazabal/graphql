const orders = [
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
];

module.exports = {
  getAllOrders: () => orders,
};
