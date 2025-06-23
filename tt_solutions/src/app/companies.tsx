"use client";

import Image from "next/image";

export default function PartnerCard() {
  const logos = [
    { src: "/logos/sebrae-nacional.gif", alt: "Sebrae" },
    { src: "/logos/centelha-branca.png", alt: "Centelha" },
    { src: "/logos/cnpq.png", alt: "CNPq" },
    { src: "/logos/gov-branca.png", alt: "FAPEPI" },
  ];

  return (
    <div className="bg-[#292524] rounded-2xl shadow-lg p-6 md:p-10 max-w-5xl mx-auto mt-32">
      <h2 className="text-white text-2xl md:text-3xl font-semibold text-center mb-8">
        Empresas Parceiras
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              className="object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
