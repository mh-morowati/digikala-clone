"use client"
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem
} from "@heroui/navbar"
import { IoMdSearch } from "react-icons/io"
import { Input } from "@heroui/input"
import { SiShopware } from "react-icons/si"
import AccountInfo from "./AccountInfo"
import { PiShoppingCartSimple } from "react-icons/pi"
import ResponsiveNavbar from "./ResponsiveNav"
import Location from "./location/location"
import Link from "next/link"
import { useQuery } from "@tanstack/react-query"


const useSession = () => useQuery({
  queryKey: ["session"],
  queryFn: () => null, // No fetch function needed for client state
  staleTime: Infinity
})

  
const Header = () => {

   const { data: user } = useSession()
  
  return (<>
    {/* component for mobile navbar */}
      <ResponsiveNavbar user={user}/>
    
      <Navbar isBordered maxWidth="2xl">
        
        <NavbarContent justify="start">
          
        <NavbarBrand className="mr-4 hidden lg:flex">
          
          <Link href={"/"} className="flex gap-4">
          <SiShopware color="red" size={25} />
            <p className="font-bold text-red-500 text-2xl font-mono">
              DigiKala
            </p>
          </Link>
          </NavbarBrand>
          
        <NavbarContent className="flex gap-3">
          <NavbarItem>
              <Input
          classNames={{
            base: "min-w-60 sm:min-w-[500px] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="md"
          startContent={<IoMdSearch size={18} />}
                type="search"
        />
          </NavbarItem>
          </NavbarContent>
          
      </NavbarContent>

        <NavbarContent as="div" className="items-center gap-8 hidden lg:flex" justify="end">
          
          <NavbarItem>
           <Location/>
          </NavbarItem>

          <NavbarItem>
          <Link href={"/cart"}>
            <PiShoppingCartSimple size={30} />
          </Link>
          </NavbarItem>
          
          <NavbarItem>
          {user ? <AccountInfo /> : 
            <Link href={"/login"}>
              <button className="border text-sm p-3 rounded">
                Login | sign up
              </button>
            </Link>}
          </NavbarItem>

      </NavbarContent>
    </Navbar>
    </>)
}

export default Header