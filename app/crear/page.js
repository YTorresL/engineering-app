"use client"
import { Close } from "@/Components/Icons/page"
import { Button } from "@/Components/Button/page"
import Link from "next/link"
import useUser from "@/hooks/useUser"
import { useState } from "react"

export default function Crear() {
  const user = useUser()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  return (
    <form>
      <div className="h-16">
        <div className="flex items-center justify-between h-full w-[90%] mx-auto">
          <Link href="/">
            <Close className="w-6 h-6" fill="#155E75" />
          </Link>
          <Button>Publicar</Button>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="grid grid-cols-1 gap-3 w-[90%] mx-auto py-8">
          <input
            type="text"
            placeholder="Titulo"
            className="w-full border h-10 border-gray-300 rounded-md px-4"
          />
          <textarea
            placeholder="Contenido"
            rows={10}
            className="w-full border border-gray-300 rounded-md px-4 pt-3"
          ></textarea>
        </div>
        <div></div>
      </div>
    </form>
  )
}
