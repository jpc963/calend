"use server"

import { CalendarDays } from "lucide-react"
import { cookies } from "next/headers"
import Link from "next/link"

const Header = async () => {
  const cookieStore = cookies()
  const email = cookieStore.get("email")

  return (
    <header className="flex gap-4 justify-between py-6 text-gray-600">
      <div className="flex items-center gap-10">
        <Link
          href={"/"}
          className="text-blue-600 font-bold text-xl flex gap-1 items-center"
        >
          <CalendarDays size={24} />
          Calend
        </Link>

        <nav className="flex gap-4">
          <Link href={"/features"}>Features</Link>

          <Link href={"/pricing"}>Preços</Link>

          <Link href={"/about"}>Sobre nós</Link>
        </nav>
      </div>

      {email ? (
        <nav className="flex gap-4 items-center">
          <Link
            href={"/dashboard"}
            className="bg-blue-600 text-white py-2 px-4 rounded-full"
          >
            Dashboard
          </Link>

          <Link href={"/api/logout"}>Logout</Link>
        </nav>
      ) : (
        <nav className="flex gap-4 items-center">
          <Link href={"/api/auth"}>Entrar</Link>

          <Link
            href={"/sign-up"}
            className="bg-blue-600 text-white py-2 px-4 rounded-full"
          >
            Registro
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Header
