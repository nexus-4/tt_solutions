"use client";

import Image from 'next/image';

export default function AboutUs() {
  return (
    <section id='about' className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-14 bg-gray-200 rounded-3xl shadow-md mx-4 md:mx-20 mt-20">
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Sobre Nós
        </h2>
        <p className="text-gray-800 mb-4 text-base leading-relaxed">
          Nossa missão é transformar a gestão pública e privada com o poder da tecnologia, da inovação e da inteligência de dados. Acreditamos que a colaboração e o compartilhamento de conhecimento são os pilares de um futuro mais eficiente, justo e sustentável.
        </p>
        <p className="text-gray-800 mb-4 text-base leading-relaxed">
          Desenvolvemos soluções digitais que otimizam recursos, automatizam processos e aproximam as pessoas de serviços de qualidade. Atuamos com propósito, ética e um compromisso contínuo com a inovação.
        </p>
        <p className="text-gray-800 mb-6 text-base leading-relaxed">
          Somos um time multidisciplinar, formado por profissionais de alto desempenho com ampla experiência nos setores público e privado — incluindo doutores, mestres e especialistas em administração, tecnologia, ciência de dados e áreas correlatas. Juntos, unimos conhecimento técnico e visão estratégica para entregar resultados reais e impactantes.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <div className="w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px]">
          <Image
            src="/image/aboutus.png"
            alt="Ilustração tecnologia"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </div>

    </section>
  );
}
