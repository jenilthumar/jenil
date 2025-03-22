import Image from "next/image"
import Link from "next/link"

export default function AboutMe() {
  return (
    <main className="min-h-screen bg-[#fafafa] flex items-center justify-center p-4 md:p-8">
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Image section */}
        <div className="w-full md:w-2/5">
          <div className="relative aspect-[1/1.2] w-full">
            <Image
              src="/about-me-photo.webp"
              alt="Silhouette of a person watching sunset"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content section */}
        <div className="w-full md:w-3/5 flex flex-col justify-center">
          <div className="space-y-6">
            <h1 className="text-[#1a1a1a] text-[1.75rem] font-[600]">figuring out things. 19.</h1>

            <p className="text-[#1a1a1a] text-[1.25rem] font-[500]">
              currently building awesome experiences, watching movies, shows and exciting content & reading, while
              learning to become a good human. all focus on being curious, calm, focused and fit. love to explore new
              places, collecting memories, work on hobbies & investing in stonks.
            </p>

            <p className="text-[#1a1a1a] text-[1.25rem] font-[500]">
              spent last 3 years working on exciting things and studying bachelor of computer applications from vnsgu,
              surat.
            </p>

            <div className="pt-2">
              <p className="text-[#414A4C] text-[1.25rem] font-[400] italic">
                <Link href="#projects" className="hover:underline">
                  projects
                </Link>
                {" • "}
                <Link href="mailto:jenilthummar3108@gmail.com" className="hover:underline">
                  email
                </Link>
                {" • "}
                <Link href="https://drive.google.com/file/d/1QBjx9aQ_Ioo_DX_yH7EhKnLzRNFx6zXT/view?usp=sharing" className="hover:underline">
                  resume
                </Link>
                {" • "}
                <Link href="https://open.spotify.com/playlist/22TOUQX7WiMT2IU0i2Fafg?si=a757313ec5144939" className="hover:underline">
                  tunes
                </Link>
                {" • "}
                <Link href="https://www.instagram.com/jenil.thumar" className="hover:underline">
                  ig
                </Link>
                {" • "}
                <Link href="https://www.linkedin.com/in/jenil-thummar/" className="hover:underline">
                  in
                </Link>
                {" • "}
                <Link href="https://github.com/jenilthumar" className="hover:underline">
                  gh
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

