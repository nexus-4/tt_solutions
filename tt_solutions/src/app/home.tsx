"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header id="home" className=" bg-white px-8">
      <div className="container mx-auto grid h-full min-h-[65vh] w-full grid-cols-1 place-items-center gap-y-10 lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto lg:-mt-40">
          <Typography variant="h1" className="text-3xl !leading-snug text-[#6D6ADB]">
            Inteligência
          </Typography>
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-2 max-w-sm text-3xl !leading-snug lg:mb-3 lg:text-5xl"
          >
            Para INOVAR
          </Typography>
          <Typography
            variant="lead"
            className="mb-6 font-normal !text-gray-500 md:pr-16 xl:pr-28"
          >
            Nascemos com a missão de inspirar a eficiência
            pública e privada por meio do compartilhamento
            de inteligência coletiva e soluções inovadoras.
          </Typography>
          <Button size="lg" color="gray">
            <a
              href="#about"
              //target="_blank"
              rel="noopener noreferrer"
            >
              Saiba mais
            </a>
          </Button>
        </div>
        <div className="flex justify-end ">
          <div className="flex justify-end mb-6">
            <Image
              width={500}
              height={500} 
              src="/image/home.svg"
              className="rounded-lg "
              alt="flowers"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
export default Hero;
