import { Metadata } from "next"




export const metadata: Metadata = {
    title: 'sign in',
    description: 'authentication',
  }


  export default function AuthenLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>{children}</section>
  }