import Header from "@/app/(subsites)/header";
import Footer from "@/app/(subsites)/footer";

export default function SubsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="subsite-layout md:mb-8 mx-2 h-full md:w-full">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
