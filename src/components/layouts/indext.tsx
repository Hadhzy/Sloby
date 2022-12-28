import DashboardMenu from "../dashboard/DashboardMenu";

export default function DashboardLayout({ children }: {children: any}) {
  return <>
    <DashboardMenu />
    <DashboardMenu className={"invisible !static"} />
    <main className="w-screen">{children}</main>
  </>
}
