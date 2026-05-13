import Image from "next/image";

export default function StatementSection() {
  return (
    <section id="statement" className="min-h-screen bg-[#FFF9F2] flex flex-col md:flex-row items-stretch">
      {/* Left: title + image */}
      <div className="w-full md:w-[45%] flex flex-col px-10 md:px-14 pt-24 pb-10">
        <h2
          className="text-[#001D2F] leading-none"
          style={{
            fontFamily: "var(--font-belleza)",
            fontSize: "clamp(4rem, 7.5vw, 7rem)",
          }}
        >
          Statement
        </h2>

        <div className="relative mt-8 flex-1 min-h-[320px]">
          <Image
            src="/images/Statement.png"
            alt="Paleta de pintura"
            fill
            className="object-contain object-left-top"
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
      </div>

      {/* Right: text in bordered box */}
      <div className="flex-1 flex items-center px-10 md:px-16 py-24">
        <div className="border border-[#001D2F]/20 p-8 md:p-12 w-full">
          <p
            className="leading-[1.9] text-[#001D2F]/70"
            style={{
              fontFamily: "var(--font-barlow)",
              fontSize: "clamp(0.88rem, 1.05vw, 1rem)",
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
            <br /><br />
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
            odit aut fugit.
            <br /><br />
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
            et quas molestias excepturi sint occaecati cupiditate non provident.
          </p>
        </div>
      </div>
    </section>
  );
}
