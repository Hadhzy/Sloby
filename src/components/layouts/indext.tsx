import DashboardMenu from "../dashboard/DashboardMenu";

export default function DashboardLayout({ children }: {children: any}) {
  return <>
    <DashboardMenu />
    <main className="w-screen">{children}</main>
  </>
}