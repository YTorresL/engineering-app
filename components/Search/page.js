import { SearchIcon } from "@/Components/Icons/page"

export function Search() {
  return (
    <div className="flex items-center justify-center">
      <input
        type="text"
        className="border border-gray-300 p-2 w-full rounded-s-lg focus:ring-cyan-800 focus:border-cyan-800 focus:outline-none"
      />
      <button type="submit" className="p-[0.4rem] bg-cyan-800 rounded-e-lg">
        <SearchIcon className="w-6 h-6" fill="#fff" />
      </button>
    </div>
  )
}
