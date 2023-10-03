
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Haeder/Navbar'

export default function Mainlayout() {
  return (
     <div>
        <Navbar />
        <Outlet />
    </div>
  )
}
