import Sidebar from "../components/organisms/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <main className="flex-1 main-content mx-auto">
        {children}
      </main>
    </div>
  );
}
