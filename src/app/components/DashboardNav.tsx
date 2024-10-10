"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const DashboardNav = () => {
  const pathname = usePathname()
  const isEventTypes = pathname === "/dashboard/event-types"

  return (
    <div className="flex gap-4 justify-center">
      <Link
        href={"/dashboard"}
        className={`rounded-full px-4 py-2 ${
          isEventTypes ? "bg-gray-200" : "bg-blue-600 text-white"
        }`}
      >
        Eventos marcados
      </Link>

      <Link
        href={"/dashboard/event-types"}
        className={`rounded-full px-4 py-2 ${
          isEventTypes ? "bg-blue-600 text-white" : "bg-gray-200"
        }`}
      >
        Tipos de evento
      </Link>
    </div>
  )
}

export default DashboardNav
