import SubsiteGenerate from "@/components/subsitemain"; // Import the Subsite component
import { subsitesTry } from "@/lib/subsites"; // Import the subsites data

export default function SubsitePage({ params }: { params: { id: string } }) {
  console.log("Params ID:", params.id); // Log the ID to check its value
  const subsite = subsitesTry.find((s) => s.id === params.id);

  if (!subsite) {
    return <p>Subsite not found</p>;
  } else {
    console.log("Subsite Content:", subsite.content); // Log the content
  }

  return <SubsiteGenerate subsite={subsite} />;
}

// generate static paths for the subsites
export async function generateStaticParams() {
  return subsitesTry.map(({ title }) => ({ title }));
}
