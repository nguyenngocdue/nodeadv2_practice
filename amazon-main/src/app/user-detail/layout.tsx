import { Metadata } from "next"

export const metaData:Metadata={
    title:"Uesr Detail"
}

export default function UserDetail({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
      
        <nav></nav>
   
        {children}
      </section>
    )
  }