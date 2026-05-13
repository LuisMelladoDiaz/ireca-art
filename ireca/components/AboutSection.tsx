import Image from "next/image";
import content from "@/data/content.json";

const { title, subtitle, bio, cvUrl } = content.about;
const paragraphs = bio.split("\n\n");

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="min-h-screen bg-[#FFF9F2] flex items-center px-8 md:px-40 py-20"
    >
      <div className="w-full flex flex-col md:flex-row gap-10 md:gap-16 items-stretch">

        {/* Left: photo */}
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

        {/* Right: título arriba · bio en medio · CV abajo */}
        <div className="flex-1 flex flex-col justify-between">

          {/* Top */}
          <div>
            <h2
              className="leading-none text-[#001D2F]"
              style={{ fontFamily: "var(--font-belleza)", fontSize: "clamp(4.5rem, 8vw, 8rem)" }}
            >
              {title}
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
              {subtitle}
            </p>
          </div>

          {/* Middle */}
          <div
            className="flex flex-col gap-5 leading-[1.9] text-[#001D2F]/70 text-justify"
            style={{
              fontFamily: "var(--font-barlow)",
              fontSize: "clamp(1rem, 1.25vw, 1.2rem)",
              fontWeight: 300,
            }}
          >
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Bottom */}
          <div>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-lato)", fontWeight: 700, fontSize: "0.85rem" }}
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
