import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@heroui/dropdown"
import { useState } from "react"
import { IoLocation } from "react-icons/io5"
import location from "@/lib/location/location.json"


const Location = () => {
  
  const [selectedProvince, setSelectedProvince] = useState<
    {
      id: number, name: string, cities: { id: number, name: string }[]
    } | null>(null)
  const [selectedCity, setSelectedCity] = useState<string | null>(null)
  const [messageShow, setMessageShow] = useState<boolean>(false)

  const provinces = location.provinces
  
  return (
    <div
      className="flex font-sans"
      onMouseEnter={() => setMessageShow(true)}
      onMouseLeave={() => setMessageShow(false)}
    >
      <Dropdown >
        
        <DropdownTrigger className="cursor-pointer">
         <IoLocation size={25} />
        </DropdownTrigger>

        <DropdownMenu>
          {
            provinces.map(province => (
              <DropdownItem key={province.id} onClick={() => setSelectedProvince(province)}>
                {province.name}
              </DropdownItem>
            ))
          }
        </DropdownMenu>

      </Dropdown>

      <Dropdown>

         <DropdownTrigger className="cursor-pointer">
          <p>
            {selectedProvince ? selectedProvince.name + " , " : " انتخاب نشده , "}
          </p>
        </DropdownTrigger>

         {selectedProvince &&
        <DropdownMenu>
           {
            selectedProvince.cities.map(city => (
              <DropdownItem key={city.id} onClick={() => setSelectedCity(city.name)}>
                {city.name}
              </DropdownItem>
            ))
          }
          </DropdownMenu>}
        
      </Dropdown>

      <p>{selectedCity ? selectedCity : " انتخاب نشده "}</p>

      {messageShow && <h1
        className="absolute top-16 bg-slate-700 text-white p-2 rounded"
      >
        {selectedProvince ? selectedProvince.name + " , " : " انتخاب نشده , "}
        {selectedCity ? selectedCity : " انتخاب نشده "}
      </h1>}
    </div>
  )
}

export default Location