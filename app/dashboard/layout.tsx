import SideNav from "@/app/ui/dashboard/sidenav";

export default function Layout({ children: x }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div>mantap</div>
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{x}</div>
      <div className="w-36 flex flex-row justify-center">
        <div className="h-36 bg-red-400">a</div>
        <div className="h-36 bg-blue-400">a</div>
        <div className="h-36 bg-green-400">a</div>
      </div>
    </div>
  );
}
