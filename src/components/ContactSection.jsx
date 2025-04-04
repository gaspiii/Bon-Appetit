import { MessageCircle } from "lucide-react";

export default function ContactSection() {
    return (
      <section className="text-center py-10 bg-[#020209] text-white">
        <h3 className="text-lg md:text-xl text-[#d96bf7] font-poppins">¿Estás preparado?</h3>
        <h2 className="text-7xl font-extrabold font-jost mt-2 mb-4">
          CONTACTÁNOS AHORA
        </h2>
        <p className="text-md text-gray-300">
          Pide Tu Despacho Gratis Para Envíos Dentro De La Comuna
        </p>
  
        <div className="mt-6">
        <a
            href="https://wa.me/56986999317?text=%C2%A1Hola%21%20estoy%20interesado%20en%20tus%20servicios%20de%20sitios%20web!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 text-lg font-bold text-white border-2 border-[#d96bf7] rounded-full 
            hover:bg-[#d96bf7] transition-all duration-300"
            >
            <MessageCircle className="w-6 h-6 text-white" />
            CONTACTAR
            </a>

        </div>
      </section>
    );
  }
  