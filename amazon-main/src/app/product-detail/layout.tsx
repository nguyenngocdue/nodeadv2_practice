import { Metadata } from "next"

export const metadata : Metadata = {
    title:"Product",
    description:"product detail amazon"
}


export default function DashboardLayout({
    children
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {children}
      </section>
    )
  }
