import Hero from "@/app/components/Hero"
import Image from "next/image"

const imgs = [
  {
    link: "https://sponsors.vuejs.org/images/tidelift.avif",
    alt: "",
  },
  {
    link: "https://sponsors.vuejs.org/images/laravel.avif",
    alt: "",
  },
  {
    link: "https://sponsors.vuejs.org/images/devexpress.avif",
    alt: "",
  },
  {
    link: "https://sponsors.vuejs.org/images/storyblok.avif",
    alt: "",
  },
]

export default function Home() {
  return (
    <>
      <Hero />

      <section className="text-center mt-32">
        <p className="text-gray-600">Confiado pelas empresas:</p>

        <div className="flex gap-8 mt-6 justify-center">
          {imgs.map((img, index) => (
            <Image
              key={index}
              src={img.link}
              alt={img.alt}
              width={140}
              height={96}
            />
          ))}
        </div>
      </section>
    </>
  )
}
