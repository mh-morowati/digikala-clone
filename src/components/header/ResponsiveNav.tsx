import { Navbar, NavbarItem } from "@heroui/navbar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { BiCategoryAlt, BiSolidHomeAlt2 } from "react-icons/bi"
import { GiShoppingCart } from "react-icons/gi"
import { MdOutlineExplore } from "react-icons/md"
import { PiUserCircleLight } from "react-icons/pi"


const ResponsiveNavbar = () => {

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
        <NavbarItem>
          <Link
            color="foreground"
            href="explore"
            className={pathname.startsWith("/explore") ? "text-blue-600" : "text-slate-800"}
          >
          <BiSolidHomeAlt2 />
          </Link>
        </NavbarItem>
        
        <NavbarItem
          className={pathname.startsWith("/search") ? "text-blue-600" : "text-slate-800"}
        >
         <BiCategoryAlt />
        </NavbarItem>
        
        <NavbarItem isActive>
          <Link
            href=""
            aria-current="page"
            color="secondary"
            className={pathname.startsWith("/booking") ? "text-blue-600" : "text-slate-800"}
          >
           <GiShoppingCart />
          </Link>
            </NavbarItem>
            
        <NavbarItem isActive>
          <Link
            href=""
            aria-current="page"
            color="secondary"
            className={pathname.startsWith("/booking") ? "text-blue-600" : "text-slate-800"}
          >
           <MdOutlineExplore />
          </Link>
            </NavbarItem>
            
        <NavbarItem isActive>
          <Link
            href=""
            aria-current="page"
            color="secondary"
            className={pathname.startsWith("/booking") ? "text-blue-600" : "text-slate-800"}
          >
           <PiUserCircleLight />
          </Link>
        </NavbarItem>
      </div>
    </Navbar>
  </>
  )
}

export default ResponsiveNavbar