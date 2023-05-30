"use client"
import { Button } from "@/Components/Button/page"
import { Caleasy, Google } from "@/Components/Icons/page"
import Link from "next/link"
import { loginWithGoogle } from "@/firebase/client"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import useUser from "@/hooks/useUser"

export default function Login() {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace("/")
  }, [user])

  const handleCLick = () => {
    loginWithGoogle().catch((err) => {
      console.log(err)
    })
  }

  return (
    <main className="h-screen grid place-content-center place-items-center">
      <Link href="/">
        <Caleasy className="w-40 mb-2 ml-7" />
      </Link>
      <p className="text-gray-900 border-b-2 border-cyan-800 pb-1 px-2 mb-3">
        Ingenieria para estudiantes
      </p>
      {user === undefined && (
        <Button className="mt-4 flex items-center" onClick={handleCLick}>
          <Google className="h-8 w-8 mr-3" />
          Iniciar sesión con Google
        </Button>
      )}
      {user && <div>Loading..</div>}
    </main>
  )
}
