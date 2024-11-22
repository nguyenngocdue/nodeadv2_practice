'use client'


import ButtonAuthen from "./ButtonAuthen"
import handelListYour, { YourAccount, YourList } from "./Root"

export default function AuthenDesc() {

  return (
    <div className="py-2 px-3">
      <div className="flex flex-col justify-center items-center border-b-2 border-inherit">
        <ButtonAuthen description="Sign in" href="/signin"/>
          
        
        <p>New customer? <span className="font-bold">Start here.</span></p>
      </div>
      <div className="flex items-start gap-4">
         <div>
            <h4 className="font-bold">Your Lists</h4>
            <ul>{handelListYour(YourList)}</ul>
         </div>
         <div>
            <h4 className="font-bold">Your Account</h4>
            <ul>{handelListYour(YourAccount)}</ul>
         </div>
      </div>
    </div>
  )
}
