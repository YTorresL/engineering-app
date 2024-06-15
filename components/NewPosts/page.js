"use client"
import useTimeAgo from "@/hooks/useTimeAgo"
import Image from "next/image"
import Category from "../Category/page"
import { fetchReferenceCategory } from "@/firebase/client"
import { useState, useEffect } from "react"

export default function NewPosts({
  avatar,
  title,
  description,
  username,
  createdAt,
  categories = {},
}) {
  const [category, setCategory] = useState("")
  const [close, setClose] = useState(true)

  useEffect(() => {
    if (categories && close) {
      fetchReferenceCategory(categories)
        .then((res) => {
          setCategory(res)
          setClose(false)
        })
        .catch((error) => console.log(("Error al traer la categoria", error)))
    }
  }, [categories])

  console.log(categories)
  console.log(category)
  return (
    <div className="m-2 lg:m-3 border border-gray-300 rounded-lg">
      <div className="p-2 lg:p-4 flex justify-between">
        <div>
          <div className="h-10 w-10 md:w-14 md:h-14">
            <Image
              src={avatar}
              alt={username}
              width={500}
              height={500}
              className="rounded-full w-full h-full object-cover"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col pl-2 lg:pl-2 w-[82%] md:w-[92%]">
          <div className="flex flex-col mb-1">
            <h1 className="text-gray-900 text-base md:text-lg mt-1 md:mt-3 font-semibold mb-0">
              {title}
            </h1>
            <h2 className="text-sm text-gray-500">{useTimeAgo(createdAt)}</h2>
          </div>
          <p className="text-sm line-clamp-3">{description}</p>
          <div className="flex justify-between items-center mt-2">
            {category && <Category>{category.category}</Category>}
            <h3 className="text-sm text-gray-500 mt-2 text-right">
              {username}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}
