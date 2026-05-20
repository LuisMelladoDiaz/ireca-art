import Image from "next/image";
import content from "@/data/content.json";

const { title, subtitle, bio, cvUrl } = content.about;
const paragraphs = bio.split("\n\n");

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="bg-[#FFF9F2] px-8 md:px-20 lg:px-40 py-16 md:py-24"
    >
      <div className="flex flex-col md:flex-row gap-10 md:gap-16">

        {/* Left: photo */}
        <div className="w-full md:w-[42%] shrink-0">
          <Image
            src="/images/About.jpg"
            alt="Ireca en su estudio"
            width={600}
            height={900}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 42vw"
          />
        </div>

        {/* Right: contenido */}
        <div className="flex flex-col gap-8 md:gap-0 md:justify-between md:py-2">

          {/* Top: título + subtítulo */}
          <div>
            <h2
              className="leading-none text-[#001D2F]"
              style={{
                fontFamily: "var(--font-belleza)",
                fontSize: "clamp(3.5rem, 7vw, 7rem)",
              }}
            >
              {title}
            </h2>
            <p
              className="mt-2 tracking-[0.2em] uppercase"
              style={{
                fontFamily: "var(--font-barlow)",
                fontSize: "clamp(0.9rem, 2.2vw, 1.5rem)",
                color: "#468B97",
                fontWeight: 500,
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Middle: bio */}
          <div
            className="flex flex-col gap-5 leading-[1.9] text-[#001D2F]/70 text-justify"
            style={{
              fontFamily: "var(--font-barlow)",
              fontSize: "clamp(1rem, 1.25vw, 1.2rem)",
              fontWeight: 400,
            }}
          >
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Bottom: CV */}
          <div>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-lato)", fontWeight: 700 }}
              className="inline-block text-sm md:text-lg px-6 py-2.5 md:px-10 md:py-4 tracking-[0.25em] uppercase bg-[#468B97]/20 text-[#468B97] transition-colors hover:bg-[#468B97]/35"
            >
              CV
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
