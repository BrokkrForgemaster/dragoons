import SideNav from "../components/dashboard/SideNav"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex flex-col h-screen md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-52 bg-[#1E1E1E] text-white">
          <SideNav />
        </div>
        <div className="grow p-6 md:overflow-y-auto ">{children}</div>
      </div>
    )
  }