"use client";

import React from "react";
import CategoryCard from "@/components/category-card";

import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import {
  ClipboardDocumentListIcon,
  MagnifyingGlassIcon,
  DocumentChartBarIcon
} from "@heroicons/react/24/solid";
import { FaRobot } from "react-icons/fa";


const CATEGORIES = [
  {
    img: "/image/blogs/precos.jpg",
    icon: MagnifyingGlassIcon,
    title: "Pesquisa de preços conforme legislações atuais",
    /* desc: "up to 40% OFF", */
  },
  {
    img: "/image/blogs/tech.jpg",
    icon: FaRobot,
    title: "Geração automática de documentos com uso de IA",
  },
  {
    img: "/image/blogs/atas.jpg",
    icon: DocumentChartBarIcon,
    title: "Atas de Registro de Preços organizadas e atualizadas",
  },
  {
    img: "/image/blogs/prancheta.jpg",
    icon: ClipboardDocumentListIcon,
    title: "Especificações técnicas de itens para auxiliar na elaboração dos editais",
  },
];

export function TopBookCategories() {
  return (
    <section id="solutions" className="container mx-auto px-8 pb-20 pt-20 lg:pt-0 mt-32">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3">
          Nossas Soluções
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12 ">
          Descubra como nossas soluções estão redefinindo o mercado com tecnologia e estratégia.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-gray-900/75" />
          <CardBody className="relative w-full">
            <Typography color="white" className="text-xs font-bold opacity-50">
              muraldeprecos.com
            </Typography>
            <Typography variant="h4" className="mt-9" color="white">
              Mural de Preços
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50"
            >
              Uma ferramenta avançada que utiliza inteligência artificial para realizar pesquisas personalizadas 
              de preços públicos, promovendo eficiência, economia e conformidade nos processos de aquisição de órgãos públicos.
            </Typography>
            <a href="#why">
              <Button size="sm" color="white">
              Saiba mais
              </Button>
            </a>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopBookCategories;
