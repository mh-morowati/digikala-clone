import { Navbar, NavbarItem } from "@heroui/navbar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BiCategoryAlt, BiSolidHomeAlt2 } from "react-icons/bi"
import { GiShoppingCart } from "react-icons/gi"
import { MdOutlineExplore } from "react-icons/md"
import { PiUserCircleLight } from "react-icons/pi"

type Props = {
  user: string
}

const ResponsiveNavbar = (props: Props) => {

  const {user} = props
    const pathname = usePathname()
  
  return (<> 
   <Navbar
      height={50}
      isBordered
      position="static"
      className="bg-white z-[500000000000] border-t lg:hidden fixed bottom-0 left-0"
    >
      <div
        className="flex gap-10 justify-evenly flex-1 min-[300px]:gap-14 min-[500px]:gap-32 min-[375px]:gap-20"
      >
         <Link
            color="foreground"
            href="/"
            className={pathname.endsWith("/") ? "text-blue-600" : "text-slate-800"}
          >
        <NavbarItem>
         
          <BiSolidHomeAlt2 />
          </NavbarItem>
          </Link>
        
        <NavbarItem
          className={pathname.startsWith("/search") ? "text-blue-600" : "text-slate-800"}
        >
         <BiCategoryAlt />
        </NavbarItem>
        
        <NavbarItem isActive>
        
           <GiShoppingCart />
            </NavbarItem>
            
        <NavbarItem isActive>
      
           <MdOutlineExplore />
            </NavbarItem>
            
        <NavbarItem isActive>
        { user ? (<Link
            href="/dashboard"
            aria-current="page"
            color="secondary"
            className={pathname.startsWith("/dashboard") ? "text-blue-600" : "text-slate-800"}
          >
           <PiUserCircleLight />
          </Link> ) : ( <Link
            href="/login"
            aria-current="page"
            color="secondary"
            className={pathname.startsWith("/login") ? "text-blue-600" : "text-slate-800"}
          >
           <PiUserCircleLight />
            </Link>
            )
          }
        </NavbarItem>
      </div>
    </Navbar>
  </>
  )
}

export default ResponsiveNavbar