import Hero from "../components/Hero";
import Collections from "../components/Collections";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <Hero />
      <Collections />
    </main>
  );
}
