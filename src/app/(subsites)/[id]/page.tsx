// import { SubsiteContent } from "@/components/shared-subpage-layout";
// import { subsites, type Subsites } from "@/lib/subsites";

// export default function SubsitePage({ params }: { params: { id: string } }) {
//   // Find the subsite data based on the ID
//   const subsite = subsites.find((s) => s.id === params.id);

//   // If no matching subsite is found, return an error or a fallback UI
//   // TO DO: create fallback UI
//   if (!subsite) {
//     return <p>Subsite not found</p>;
//   }

//   return <SubsiteContent {...subsite} />;
// }

// export async function generateStaticParams() {
//   return subsites.map(({ id }) => ({ id }));
// }

import SubsitesTry from "@/components/Subsites"; // Import the Subsite component
import { subsitesTry } from "@/lib/subsites"; // Import the subsites data

export default function SubsitePage({ params }: { params: { id: string } }) {
  console.log("Params ID:", params.id); // Log the ID to check its value
  const subsite = subsitesTry.find((s) => s.id === params.id);

  if (!subsite) {
    return <p>Subsite not found</p>;
  } else {
    console.log("Subsite Content:", subsite.content); // Log the content
  }

  return <SubsitesTry subsite={subsite} />;
}

// generate static paths for the subsites
export async function generateStaticParams() {
  return subsitesTry.map(({ id }) => ({ id }));
}
