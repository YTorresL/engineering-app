import Header from "@/components/Header/page"
import { Footer } from "@/components/Footer/page"
import Link from "next/link"
import Image from "next/image"
import NewPosts from "@/components/NewPosts/page"

const config = [
  { name: "Perfil", path: "/user" },
  {
    name: "Configuraciones",
    path: "/Configuraciones",
  },
]

export default function User() {
  return (
    <>
      <Header path="/user" />
      <section className="bg-gray-50">
        <div className="w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 py-4 lg:py-14">
          <main className="lg:col-span-2">
            <div className="flex border-b border-cyan-800 pb-10">
              <div>
                <div className="w-40 h-40 rounded-full overflow-hidden">
                  <Image
                    src="/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
                    height={500}
                    width={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="ml-5">
                <h1 className="text-gray-900 text-base md:text-xl mt-1 md:mt-3 font-semibold mb-0">
                  Yalith Torres
                </h1>
                <h3 className="border border-cyan-800 py-2 font-bold text-cyan-800 uppercase text-sm w-52 text-center my-2">
                  Colaborador
                </h3>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
              </div>
            </div>
            <div className="py-10">
              <div className="grid grid-cols-2 gap-5">
                <NewPosts hidden="hidden" />
              </div>
            </div>
          </main>
          <aside>
            {config.map((item, index) => (
              <div className="mb-5 text-right" key={index}>
                <Link
                  href={item.path}
                  className="bg-cyan-800 px-4 py-2 text-white"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </aside>
        </div>
      </section>
      <Footer />
    </>
  )
}
