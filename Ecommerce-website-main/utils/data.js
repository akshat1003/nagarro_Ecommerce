import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Ankit",
      email: "admin@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "notAnkit",
      email: "user@example.com",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Free Shirt",
      slug: "free-shirt",
      category: "Shirts",
      image: "https://m.media-amazon.com/images/I/71Ykj7rkh7L._UX569_.jpg",
      price: 700,
      brand: "Nike",
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Fit Shirt",
      slug: "fit-shirt",
      category: "Shirts",
      image:
        "https://4.imimg.com/data4/HJ/BA/MY-3978324/men-s-tight-fit-shirt-250x250.jpg",
      price: 800,
      brand: "Adidas",
      rating: 3.2,
      numReviews: 10,
      countInStock: 20,
      description: "A popular shirt",
    },
    {
      name: "Golf Pants",
      slug: "golf-pants",
      category: "Pants",
      image:
        "https://golfdigest.sports.sndimg.com/content/dam/images/golfdigest/products/2021/10/20/20211020-adidas-m-pants.jpg.rend.hgtvcom.1280.1280.suffix/1634754794581.jpeg",
      price: 900,
      brand: "Oliver",
      rating: 2.9,
      numReviews: 13,
      countInStock: 20,
      description: "Smart looking pants",
    },
    {
      name: "Fit Pants",
      slug: "fit-pants",
      category: "Pants",
      image:
        "https://5.imimg.com/data5/JD/OD/ES/SELLER-40425577/ankle-fit-500x500.jpeg",
      price: 950,
      brand: "Zara",
      rating: 3.5,
      numReviews: 7,
      countInStock: 20,
      description: "A popular pants",
    },
    {
      name: "Classic Pants",
      slug: "classic-pants",
      category: "Pants",
      image:
        "https://zoodmall.com/cdn-cgi/image/w=500,fit=contain,f=auto/https://ae01.alicdn.com/kf/Hed4ad54a1763449f9328ec2d7f5e6f309/men-s-pants-High-Quality-dress-pants-men-business-trousers-Office-casual-social-pants-men-s.jpg",
      price: 7500,
      brand: "Casely",
      rating: 2.4,
      numReviews: 14,
      countInStock: 20,
      description: "A popular pants",
    },
  ],
};

export default data;
