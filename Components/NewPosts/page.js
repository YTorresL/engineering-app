import Image from "next/image"

export default function NewPosts() {
  return (
    <div className="m-2 lg:m-3 border border-gray-100">
      <div className="p-2 lg:p-4 flex justify-between">
        <div className="h-10 w-10 md:w-14 md:h-14">
          <Image
            src="/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg"
            width={100}
            height={100}
            className="rounded-full w-full h-full object-cover"
          ></Image>
        </div>
        <div className="flex flex-col pl-2 lg:pl-2 w-[82%] md:w-[92%]">
          <div className="flex flex-col mb-1">
            <h1 className="text-gray-900 text-base md:text-lg mt-1 md:mt-3 font-semibold mb-0">
              Titulo del blog
            </h1>
            <h2 className="text-sm text-gray-500">Hace 2 horas</h2>
          </div>
          <p className="text-sm line-clamp-3">
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
