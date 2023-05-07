"use client"
import { HomeIcon, Upload, User, Menu, Close } from "@/Components/Icons/page"
import Link from "next/link"
import { useState } from "react"

const headerNav = [
  { path: "/", icon: <HomeIcon className="w-6 h-6" />, name: "Inicio" },
  { path: "/upload", icon: <Upload className="w-6 h-6" />, name: "Subir" },
  { path: "/user", icon: <User className="w-6 h-6" />, name: "Perfil" },
]

export default function Header() {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <header className="flex md:h-[4.5rem] h-[3.5rem] py-4 justify-between border-b-2 border-gray-100 w-[95%] mx-auto">
      <Link href="/" className="ml-3 xl:ml-0">
        <h2 className="text-cyan-800 font-bold md:text-xl md:leading-5 leading-3 text-sm">
          Caleasy
        </h2>
        <p className="text-neutral-400 text-xs md:text-base">
          Ingenieria para estudiantes
        </p>
      </Link>
      <div className="flex items-center md:hidden mr-4">
        <button onClick={handleShowMenu}>
          <Menu className="w-6 h-6" fill="#000" />
        </button>
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black/90 transition-all ${
            showMenu ? "" : "hidden"
          }`}
        >
          <Close
            className="absolute top-4 right-4 w-6 h-6"
            fill="#fff"
            onClick={handleShowMenu}
          />
          <ul className="flex flex-col items-center justify-center h-full text-white">
            {headerNav.map((item, index) => (
              <li className="mt-6" key={index}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="md:flex items-center hidden">
        <ul className="flex">
          {headerNav.map((item, index) => (
            <li className="mr-6" key={index}>
              <Link href={item.path}>{item.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
