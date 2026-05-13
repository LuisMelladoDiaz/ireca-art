import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="min-h-screen bg-[#FFF9F2] flex items-center px-8 md:px-40 py-20"
    >
      <div className="w-full flex flex-col md:flex-row gap-10 md:gap-16 items-stretch">

        {/* Left: photo — proporciones naturales */}
        <div className="w-full md:w-[42%]">
          <Image
            src="/images/About.jpg"
            alt="Ireca en su estudio"
            width={600}
            height={900}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>

        {/* Right: título arriba · texto en medio · CV abajo */}
        <div className="flex-1 flex flex-col justify-between">

          {/* Top */}
          <div>
            <h2
              className="leading-none text-[#001D2F]"
              style={{
                fontFamily: "var(--font-belleza)",
                fontSize: "clamp(4.5rem, 8vw, 8rem)",
              }}
            >
              ireca
            </h2>
            <p
              className="mt-3 tracking-[0.2em] uppercase"
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: "clamp(1rem, 2.2vw, 1.5rem)",
                color: "#468B97",
                fontWeight: 500,
              }}
            >
              Chipiona, 2003
            </p>
          </div>

          {/* Middle */}
          <p
            className="leading-[1.9] text-[#001D2F]/70 text-justify"
            style={{
              fontFamily: "var(--font-barlow)",
              fontSize: "clamp(1rem, 1.25vw, 1.2rem)",
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

          {/* Bottom */}
          <div>
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
      </div>
    </section>
  );
}
