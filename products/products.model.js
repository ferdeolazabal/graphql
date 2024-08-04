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

const getProductsByPrice = (min, max) => {
  return products.filter(
    (product) => product.price >= min && product.price <= max
  );
};

const getProductById = (id) => {
  return products.find((product) => product.id === id);
};

const addNewProduct = (id, description, price) => {
  const newProduct = {
    id,
    description,
    price,
    reviews: [],
  };
  products.push(newProduct);
  return newProduct;
};

const addReview = (id, rating, comment) => {
  const product = getProductById(id);
  product?.reviews.push({ rating, comment });
  return product;
};

module.exports = {
  getAllProducts: () => products,
  getProductsByPrice: (min, max) => getProductsByPrice(min, max),
  getProductById: (id) => getProductById(id),
  addNewProduct: (id, description, price) =>
    addNewProduct(id, description, price),
  addReview: (id, rating, comment) => addReview(id, rating, comment),
};
