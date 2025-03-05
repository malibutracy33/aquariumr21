import SubsitesHero from "@/components/ui/subsitehero";
import { SubsiteContent, SubsitesTry } from "@/lib/subsites";

interface SubsiteProps {
  subsite: SubsitesTry;
}

export default function SubsiteGenerate({ subsite }: SubsiteProps) {
  if (!subsite) return <p>Subsite not found</p>;

  return (
    <div className="flex flex-col gap-4">
      <div className="md:pl-16">
        <SubsitesHero
          id={subsite.id}
          title={subsite.title}
          subtitle={subsite.subtitle}
          pitch={subsite.pitch}
          imageUrl={subsite.imageUrl}
          color={subsite.color}
          content={subsite.content}
        />
      </div>
    </div>
  );
}
