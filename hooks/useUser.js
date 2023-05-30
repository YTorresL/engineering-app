import { useState, useEffect } from "react"
import { onAuthStateChanged } from "@/firebase/client"

export default function useUser() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  return user
}
