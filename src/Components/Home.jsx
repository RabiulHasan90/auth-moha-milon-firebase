import { useContext } from "react"
import { AuthContext } from "./Authprovider/Authprovider"


export default function Home() {
   const authcontext = useContext(AuthContext)
   console.log(authcontext)
  return (
    <div>this is home for{authcontext.name} </div>
  )
}
