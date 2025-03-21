import SubsiteGenerate from "@/components/subsitemain"; // Import the Subsite component
import { subsitesTry } from "@/lib/subsites"; // Import the subsites data

export default function SubsitePage({ params }: { params: { title: string } }) {
  console.log("Params ID:", params.title); // Log the ID to check its value
  const subsite = subsitesTry.find((s) => s.title === params.title);

  if (!subsite) {
    return <p>Subsite not found</p>;
  } else return <SubsiteGenerate subsite={subsite} />;
}

// generate static paths for the subsites
export async function generateStaticParams() {
  return subsitesTry.map(({ title }) => ({ title }));
}
