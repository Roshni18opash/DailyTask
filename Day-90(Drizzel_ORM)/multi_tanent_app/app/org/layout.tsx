import Nav from "@/app/components/Nav";

export default function OrgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Nav />
      {children}
    </div>
  );
}

