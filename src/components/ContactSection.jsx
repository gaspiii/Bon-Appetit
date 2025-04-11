import { MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="text-center py-8 sm:py-10 bg-[#020209] text-white px-4">
      <h3 className="text-base sm:text-lg md:text-xl text-[#d96bf7] font-poppins">¿Estás preparado?</h3>
      <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-jost mt-1 sm:mt-2 mb-3 sm:mb-4">
        CONTACTÁNOS AHORA
      </h2>
      <p className="text-sm sm:text-md text-gray-300 max-w-md mx-auto">
        Pide Tu Despacho Gratis Para Envíos Dentro De La Comuna
      </p>

      <div className="mt-5 sm:mt-6">
        <a
          href="https://wa.me/56997795134?text=%C2%A1Hola%21%20estoy%20interesado%20en%20tus%20servicios%20de%20sitios%20web!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg font-bold text-white border-2 border-[#d96bf7] rounded-full 
          hover:bg-[#d96bf7] transition-all duration-300"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          CONTACTAR
        </a>
      </div>
    </section>
  );
}