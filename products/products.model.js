const products = [
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
];

module.exports = {
  getAllProducts: () => products,
};
