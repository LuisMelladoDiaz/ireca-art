import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="min-h-screen bg-[#FFF9F2] flex flex-col md:flex-row">
      {/* Left: photo */}
      <div className="relative w-full md:w-[42%] min-h-[480px] md:min-h-screen">
        <Image
          src="/images/About.jpg"
          alt="Ireca en su estudio"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 42vw"
        />
      </div>

      {/* Right: content */}
      <div className="flex-1 flex flex-col justify-center px-10 md:px-16 py-16 md:py-20">
        <h2
          className="leading-none text-[#001D2F]"
          style={{
            fontFamily: "var(--font-belleza)",
            fontSize: "clamp(4rem, 7vw, 7rem)",
          }}
        >
          ireca
        </h2>

        <p
          className="mt-3 tracking-[0.2em] uppercase"
          style={{
            fontFamily: "var(--font-barlow)",
            fontSize: "clamp(0.9rem, 2vw, 1.3rem)",
            color: "#468B97",
            fontWeight: 500,
          }}
        >
          Chipiona, 2003
        </p>

        <p
          className="mt-8 leading-[1.9] text-[#001D2F]/70 max-w-lg"
          style={{
            fontFamily: "var(--font-barlow)",
            fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)",
            fontWeight: 300,
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
          <br /><br />
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
        </p>

        <div className="mt-12">
          <a
            href="/ireca-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-lato)",
              fontWeight: 700,
              fontSize: "0.85rem",
            }}
            className="inline-block px-8 py-3 tracking-[0.2em] uppercase bg-[#468B97]/20 text-[#468B97] transition-colors hover:bg-[#468B97]/35"
          >
            CV
          </a>
        </div>
      </div>
    </section>
  );
}
