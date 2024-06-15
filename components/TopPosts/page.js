import Link from "next/link"
import Titles from "../Titles/page"

export default function TopPosts() {
  return (
    <div className="mt-3">
      <Titles title="Top Posts" />
      <div className="p-2 lg:p-4">
        <div className="flex items-start m-1">
          <div className="rounded-full bg-cyan-800 px-2 py-1 text-center text-white font-extrabold">
            1
          </div>
          <div className="flex flex-col w-full">
            <Link href="#" className="ml-2 mt-1 text-sm line-clamp-1">
              Lorem ipsum dolor sit amet.
            </Link>
            <h3 className="text-sm text-gray-500 text-right">Yalith Torres</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
