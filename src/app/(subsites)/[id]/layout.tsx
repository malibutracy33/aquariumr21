export default function SubsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:mb-8 mx-2 h-full md:w-full">
      <main>{children}</main>
    </div>
  );
}
