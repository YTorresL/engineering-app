import Header from "@/Components/Header/page"
import NewBlog from "@/Components/NewBlog/page"
import TopBlog from "@/Components/TopBlog/page"
import Link from "next/link"

const navigation = [
  { name: "Calculo I", path: "#" },
  { name: "Calculo II", path: "#" },
  { name: "Calculo III", path: "#" },
]

export default function Home() {
  return (
    <>
      <Header />
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-4 lg:my-8 w-[94%] mx-auto">
        <main className="border-2 border-gray-100 lg:col-span-2">
          <div className="bg-gray-100 w-full">
            <h2 className="text-gray-900 text-lg font-semibold py-2 pl-2">
              News Blog
            </h2>
          </div>
          <NewBlog />
        </main>
        <aside>
          <TopBlog />
        </aside>
      </section>
    </>
  )
}
