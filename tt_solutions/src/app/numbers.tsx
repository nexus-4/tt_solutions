"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import FeatureCard from "@/components/feature-card";
import {
  GlobeEuropeAfricaIcon,
  CurrencyDollarIcon
} from "@heroicons/react/24/solid";
import { BsFillPeopleFill } from "react-icons/bs";

const FEATURES = [
  {
    icon: CurrencyDollarIcon,
    title: "R$ 174 bilhões em compras",
    description:
      "Um mercado público em plena atividade, oportunidades reais e movimentação bilionária comprovada.",
  },
  {
    icon: GlobeEuropeAfricaIcon,
    title: " 3.881 municípios credenciados",
    description:
      "Presença em todo o país, conectando milhares de prefeituras às melhores práticas de compra pública.",
  },
  {
    icon: BsFillPeopleFill,
    title: "89% da população atendida",
    description:
      "Nossas soluções impactam diretamente a vida de milhões de brasileiros, promovendo eficiência na gestão pública.",
  },
];

export function GetYourBookFromUs() {
  return (
    <section className="px-8 mt-32 items-center justify-between px-6 md:px-20 py-16 bg-gray-200">
      <div className="container mx-auto mb-16 text-center ">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          A força da TT Soluções comprovada em números reais.
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-800 lg:w-5/12"
        >
          Números que refletem nossa atuação estratégica e o impacto das nossas soluções no mercado.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export default GetYourBookFromUs;
