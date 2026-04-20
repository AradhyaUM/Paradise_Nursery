import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

const plants = [
  {
    id: 1,
    name: "Lavender",
    price: 15,
    category: "Aromatic Plants",
    description: "Relaxing fragrance",
    image: "https://source.unsplash.com/200x200/?lavender"
  },
  {
    id: 2,
    name: "Mint",
    price: 10,
    category: "Aromatic Plants",
    description: "Fresh mint leaves",
    image: "https://source.unsplash.com/200x200/?mint"
  },
  {
    id: 3,
    name: "Aloe Vera",
    price: 12,
    category: "Medicinal Plants",
    description: "Healing plant",
    image: "https://source.unsplash.com/200x200/?aloe"
  },
  {
    id: 4,
    name: "Tulsi",
    price: 14,
    category: "Medicinal Plants",
    description: "Boost immunity",
    image: "https://source.unsplash.com/200x200/?tulsi"
  },
  {
    id: 5,
    name: "Cactus",
    price: 8,
    category: "Succulents",
    description: "Low maintenance",
    image: "https://source.unsplash.com/200x200/?cactus"
  },
  {
    id: 6,
    name: "Succulent",
    price: 18,
    category: "Succulents",
    description: "Decorative plant",
    image: "https://source.unsplash.com/200x200/?succulent"
  }
];

export default function ProductList() {
  const grouped = plants.reduce((acc, p) => {
    acc[p.category] = acc[p.category] || [];
    acc[p.category].push(p);
    return acc;
  }, {});

  return (
    <div>
      <Header />
      {Object.keys(grouped).map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            {grouped[cat].map(p => (
              <ProductCard key={p.id} plant={p} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}