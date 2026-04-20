import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  const products = [
    { id: 1, name: "Lavender", price: 15, image: "/Paradise_Nursery/images/lavender.jpg" },
    { id: 2, name: "Mint", price: 10, image: "/Paradise_Nursery/images/mint.jpg" },
    { id: 3, name: "Aloe Vera", price: 12, image: "/Paradise_Nursery/images/aloe.jpg" },
    { id: 4, name: "Tulsi", price: 14, image: "/Paradise_Nursery/images/tulsi.jpg" },
    { id: 5, name: "Cactus", price: 8, image: "/Paradise_Nursery/images/cactus.jpg" },
    { id: 6, name: "Succulent", price: 18, image: "/Paradise_Nursery/images/succulent.jpg" }
  ];

  return (
    <div>
      <Header />
      <h1>Plants</h1>

      <div className="products-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}