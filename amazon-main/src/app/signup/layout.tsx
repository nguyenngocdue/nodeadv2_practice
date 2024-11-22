import { Metadata } from "next"

export const metadata : Metadata={
    title:"sign up",
    description:"sign up amazon"
}

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }