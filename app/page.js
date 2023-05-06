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
      <nav className="w-5/6 mx-auto">
        <ul className="flex justify-center">
          {navigation.map((item, index) => (
            <li className="px-3 py-4" key={index}>
              <Link
                href={item.path}
                className="text-xs font-semibold text-black uppercase"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <section className="grid grid-cols-3 gap-5 my-8 container mx-auto">
        <main className="border-2 border-gray-100 col-span-2">
          <NewBlog />
        </main>
        <aside className="border-2 border-gray-100">
          <TopBlog />
        </aside>
      </section>
    </>
  )
}
