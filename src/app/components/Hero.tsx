"use client"

import { Play } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const Hero = () => {
  const [showLine, setShowLine] = useState(false)

  useEffect(() => {
    setShowLine(true)
  }, [])

  return (
    <section className="text-center mt-24">
      <h1 className="text-5xl font-bold mb-6 leading-tight">
        Agendado,{" "}
        <span
          className={`text-blue-600 cool-underline ${
            showLine ? "show-underline" : ""
          }`}
        >
          inesquecido
        </span>
        <br />
        Sabemos que você não ficou doente
      </h1>

      <p className="text-gray-600">
        Apenas agendamento, sem firulas para pesar o site
      </p>

      <div className="flex mt-4 gap-4 justify-center">
        <Link
          href={"/"}
          className="bg-black text-white py-2 px-4 rounded-full"
        >
          Comece agora
        </Link>
        <Link
          href={"/"}
          className="border border-gray-300 rounded-full py-2 px-4 inline-flex gap-2 items-center text-gray-800"
        >
          <Play size={16} />
          Assista ao vídeo
        </Link>
      </div>
    </section>
  )
}

export default Hero
