import Link from "next/link"
import { Titles } from "../Titles/pages"

export default function TopPosts() {
  return (
    <div className="mt-3 border-2 border-gray-100">
      <Titles title="Top Posts" />
      <div className="p-2 lg:p-4">
        <div className="flex items-center m-1">
          <div className="rounded-full bg-cyan-800 px-2 py-1 text-center text-white font-extrabold">
            1
          </div>
          <Link href="#" className="ml-2 line-clamp-1">
            Lorem ipsum dolor sit amet.
          </Link>
        </div>
      </div>
    </div>
  )
}
