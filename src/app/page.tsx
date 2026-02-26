import Hero from "../components/Hero";
import Collections from "../components/Collections";
import fem2 from "@/public/fem2.jpg";
import fem3 from "@/public/carpentry.jpg";

export default function Home() {
  const featuredCollections = [
    { image: fem2, name: "Collection 1", price: "$100", description: "Description 1", link: "/collection-1" },
    { image: fem3, name: "Collection 2", price: "$200", description: "Description 2", link: "/collection-2" },
  ];
  const bestSellersCollections = [
    { image: fem3, name: "Collection 3", price: "$300", description: "Description 3", link: "/collection-3" },
    { image: fem2, name: "Collection 4", price: "$400", description: "Description 4", link: "/collection-4" },
  ];
  return (
    <main className="flex flex-col gap-4">
      <Hero />

      <Collections
        title="Featured Collections"
        subtitle="Shop All Collections"
        items={featuredCollections}
      />

      <Collections
        title="Best Sellers"
        subtitle="Mind Blowing"
        items={bestSellersCollections}
      />
    </main>
  );
}
