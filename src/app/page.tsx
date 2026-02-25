import Hero from "../components/Hero";
import Collections from "../components/Collections";
import fem2 from "@/public/fem2.jpg";
import fem3 from "@/public/carpentry.jpg";

export default function Home() {
  const featuredCollections = [fem2, fem3];
  return (
    <main className="flex flex-col gap-4">
      <Hero />
      <Collections
        title="Featured Collections"
        subtitle="Shop All Collections"
        images={featuredCollections}
      />
    </main>
  );
}
