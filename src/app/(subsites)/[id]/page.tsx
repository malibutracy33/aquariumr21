import { SubsiteContent } from "@/components/shared-subpage-layout";
import { subsites, type Subsites } from "@/lib/subsites";

export default function SubsitePage({ params }: { params: { id: string } }) {
  // Find the subsite data based on the ID
  const subsite = subsites.find((s) => s.id === params.id);

  // If no matching subsite is found, return an error or a fallback UI
  if (!subsite) {
    return <p>Subsite not found</p>;
  }

  return <SubsiteContent {...subsite} />;
}

export async function generateStaticParams() {
  return subsites.map(({ id }) => ({ id }));
}
