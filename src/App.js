import { useState } from "react";
import Header from "./components/Header";
import ShowProduct from "./components/ShowProduct";

const initialProducts = [
  {
    productName: "xbox",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Xbox-console.jpg/1200px-Xbox-console.jpg",
    price: "450",
    sold: false
  },
  {
    productName: "Playstation",
    photo:
      "https://www.tvmovie.de/bilder/758/2020/06/12/77329-ps5-das-ist-das-finale-design-der-playstation-5.jpg?itok=nauph4gp",
    price: "500",
    sold: false
  },
  {
    productName: "iPhone",
    photo:
      "https://media.cdn.kaufland.de/product-images/1024x1024/539adaff2e57ca05984e433fe38cebfb.jpg",
    price: "750",
    sold: false
  },
  {
    productName: "MacBook",
    photo: "https://www.notebookcheck.com/uploads/tx_nbc2/air13teaser.jpg",
    price: "900",
    sold: false
  },
  {
    productName: "xbox1",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Xbox-console.jpg/1200px-Xbox-console.jpg",
    price: "450",
    sold: false
  },
  {
    productName: "Playstation1",
    photo:
      "https://www.tvmovie.de/bilder/758/2020/06/12/77329-ps5-das-ist-das-finale-design-der-playstation-5.jpg?itok=nauph4gp",
    price: "500",
    sold: false
  },
  {
    productName: "iPhone1",
    photo:
      "https://media.cdn.kaufland.de/product-images/1024x1024/539adaff2e57ca05984e433fe38cebfb.jpg",
    price: "750",
    sold: false
  },
  {
    productName: "MacBook1",
    photo: "https://www.notebookcheck.com/uploads/tx_nbc2/air13teaser.jpg",
    price: "900",
    sold: false
  },
]


function App() {
  const [products, setProducts] = useState(initialProducts);

  const handleDelete = (index) => {
    const updatedArr = products.filter((_, i) => i !== index)
    setProducts(updatedArr)
  }
  const handleSold = (index) => {
    const updatedArr = products.map((item, i) => i === index ? { ...item, sold: !item.sold } : item)
    setProducts(updatedArr)
  }
  return (
    <div className="App">
      <Header />
      <ShowProduct handleSold={handleSold} handleDelete={handleDelete} products={products} />
    </div>
  );
}

export default App;
