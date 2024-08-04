const {
  getAllProducts,
  getProductsByPrice,
  getProductById,
  addNewProduct,
  addReview,
} = require("./products.model");

module.exports = {
  Query: {
    products: () => getAllProducts(),
    productsByPrice: (_, args) => getProductsByPrice(args.min, args.max),
    product: (_, args) => getProductById(args.id),
  },

  Mutation: {
    addNewProduct: (_, args) => {
      const { id, description, price } = args;
      return addNewProduct(id, description, price);
    },
    addReview: (_, args) => {
      const { id, rating, comment } = args;
      return addReview(id, rating, comment);
    },
  },
};
