import { Metadata } from "next"

export const metadata: Metadata = {
    title: 'search',
    description: 'tìm kiếm sản phẩm',
  }


export default function PaymentLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>
   
        {children}
      </section>
    )
  }