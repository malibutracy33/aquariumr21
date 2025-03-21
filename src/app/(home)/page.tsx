import { Card } from "@/components/card";
import { subsites } from "@/lib/subsites";
// import Image from "next/image";
// import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Home() {
  return (
    <main className="m-8">
      {/* margin: 0.5rem 2rem */}
      <section>
        <div className="relative h-20">
          <h1 className="font-mono text-clampTitles absolute">R21</h1>
        </div>
        <div className="h-screen bg-red-300 flex right-8 justify-center">
          <h2 className="text-clampTitles font-mono ">News</h2>
        </div>
        <div className="uppercase font-subsites flex flex-col gap-4">
          {subsites.map((card) => (
            <Card
              key={card.id}
              id={card.id}
              title={card.title}
              subtitle={card.subtitle}
              // image={card.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
