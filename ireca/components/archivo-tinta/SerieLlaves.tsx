import Image from "next/image";

export default function SerieLlaves() {
  return (
    <section className="bg-[#FFF9F2] px-8 md:px-14 pt-5">
      <div className="flex flex-col md:flex-row gap-8 md:gap-14 items-end">

        {/* Izquierda 1/3: texto + cerradura, fondo alineado con el edificio */}
        <div className="w-full md:w-[33%] flex flex-col gap-4">
          <p
            className="italic text-right"
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
              color: "#A11B39",
              fontWeight: 700,
            }}
          >
            Llaves
          </p>
          <p
            className="leading-[1.8] text-[#001D2F]/60 text-right"
            style={{
              fontFamily: "var(--font-barlow)",
              fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)",
              fontWeight: 300,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          <Image
            src="/images/archivo_tinta/Llaves/Llave_3.jpg"
            alt="Llaves — cerradura"
            width={600}
            height={800}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Derecha 2/3: edificio a altura natural */}
        <div className="flex-1">
          <Image
            src="/images/archivo_tinta/Llaves/Llave_1.jpg"
            alt="Llaves — edificio"
            width={1200}
            height={900}
            className="w-full h-auto"
            sizes="(max-width: 768px) 100vw, 66vw"
          />
        </div>

      </div>
    </section>
  );
}
