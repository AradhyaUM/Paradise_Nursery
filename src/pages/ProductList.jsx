import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  const products = [
    { id: 1, name: "Lavender", price: 15, image: "/Paradise_Nursery/images/lavender.png" },
    { id: 2, name: "Mint", price: 10, image: "/Paradise_Nursery/images/mint.png" },
    { id: 3, name: "Aloe Vera", price: 12, image: "/Paradise_Nursery/images/alovera.png" },
    { id: 4, name: "Tulsi", price: 14, image: "/Paradise_Nursery/images/tulsi.png" },
    { id: 5, name: "Cactus", price: 8, image: "/Paradise_Nursery/images/cactus.png" },
    { id: 6, name: "Succulent", price: 18, image: "/Paradise_Nursery/images/succulent.png" }
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