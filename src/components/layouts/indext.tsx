import DashboardMenu from "../dashboard/DashboardMenu";

export default function DashboardLayout({ children }: {children: any}) {
  return <>
    <DashboardMenu />
    <main className="h-screen w-screen">{children}</main>
  </>
}