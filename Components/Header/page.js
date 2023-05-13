"use client"
import { Menu, Close, Caleasy, Down } from "@/Components/Icons/page"
import Link from "next/link"
import { useState } from "react"

const headerNav = [
  { path: "/", name: "Inicio" },
  { path: "/about", name: "Acerca de" },
  { path: "/contact", name: "Contacto" },
  { path: "/themes", name: "Temas" },
]

const login = [
  { path: "/upload", name: "Publicar" },
  { path: "/user", name: "Perfil", icon: <Down className="w-4 h-4 ml-1" /> },
]

const noSession = [{ path: "/login", name: "Iniciar sección" }]

export default function Header({ path }) {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = () => {
    setShowMenu(!showMenu)
  }
  return (
    <header className="md:h-[4.5rem] h-[3.5rem] py-4 bg-white">
      <div className="w-[95%] flex mx-auto justify-between items-center">
        <Link href="/" className="ml-3 xl:ml-0">
          <Caleasy className="lg:w-28 w-20" />
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
        <div className="md:flex hidden">
          <ul className="flex">
            {headerNav.map((item, index) => (
              <li
                className={`mr-5 py-2 px-3 font-medium ${
                  path === item.path ? "border-cyan-800 border-b-2" : ""
                }`}
                key={index}
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex">
            {noSession.map((item, index) => (
              <li
                className={`mr-3 py-2 px-3 font-medium ${
                  path === item.path ? "border-cyan-800 border-b-2" : ""
                }`}
                key={index}
              >
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex">
            {login.map((item, index) => (
              <li
                className={`mr-3 py-2 px-3 font-medium ${
                  path === item.path ? "border-cyan-800 border-b-2" : ""
                }`}
                key={index}
              >
                <Link href={item.path} className="flex">
                  {item.name}
                  {item.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
