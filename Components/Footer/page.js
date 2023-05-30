import Link from "next/link"
import { Caleasy } from "../Icons/page"

const links = [
  {
    name: "About",
    path: "#",
  },
  {
    name: "Privacy Policy",
    path: "#",
  },
  {
    name: "Licensing",
    path: "#",
  },
]

export function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 m-4">
      <div className="w-[95%] md:pt-6 md:pb-3 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link href="/">
            <Caleasy className="lg:w-28 w-20" />
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 mt-2 sm:mt-0 sm:mb-0 dark:text-gray-400">
            {links.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.path}
                  className="mr-4 hover:underline md:mr-6 "
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <hr className="my-6 border-gray-100 border-t-2 sm:mx-auto dark:border-gray-700 lg:my-6" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <Link href="/" className="hover:underline">
            Caleasy
          </Link>
          . Ingenieria para estudiantes
        </span>
      </div>
    </footer>
  )
}
