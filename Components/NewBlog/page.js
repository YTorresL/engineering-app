import Image from "next/image"

export default function NewBlog() {
  return (
    <div className="m-2 border border-gray-100">
      <div className="p-4 flex">
        <div className="w-14 h-14">
          <Image
            src="/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            width={100}
            height={100}
            className="rounded-full w-full h-full object-cover"
          ></Image>
        </div>
        <div className="flex flex-col pl-4">
          <div className="flex">
            <h1 className="text-2xl font-bold">Nombre de usuario</h1>
            <h2 className="text-xl font-bold ml-2">Hace 2 horas</h2>
          </div>
          <div className="flex">
            <h2 className="text-xl font-bold">Titulo del blog</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </div>
  )
}
