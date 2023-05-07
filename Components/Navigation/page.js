import Link from "next/link"
import { Titles } from "../Titles/pages"

const navigation = [
  {
    name: "Calculo I",
    path: "#",
    content: [{ title: "Calculo I", path: "#" }],
  },
  {
    name: "Calculo II",
    path: "#",
    content: [{ title: "Calculo I", path: "#" }],
  },
  {
    name: "Calculo III",
    path: "#",
    content: [{ title: "Calculo I", path: "#" }],
  },
]

export default function Navigation() {
  return (
    <div className="mt-3 border-2 border-gray-100">
      <Titles title="Temas" />
      <div className="p-2 lg:p-4">
        {navigation.map((item) => (
          <details className="mb-2" key={item.name}>
            <summary className="font-bold text-cyan-800">
              <Link href={item.path}>{item.name}</Link>
            </summary>
            <ul className="flex flex-col ml-1 border-l">
              {item.content.map((subitem) => (
                <li className="ml-6 mb-1 my-1" key={subitem.title}>
                  <Link href={subitem.path} className="line-clamp-1">
                    {subitem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ))}
      </div>
    </div>
  )
}
