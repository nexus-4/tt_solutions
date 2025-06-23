import React from 'react';
import Image from "next/image";

import {
    Typography,
    Card,
    CardBody,
    CardHeader,
  } from "@material-tailwind/react";
  
  interface BookCardProps {
    img: string;
    title: string;
    desc: string;
    category: string;
    price: string;
    offPrice?: string;
  }
  
  export function BookCard({
    img,
    category,
    title,
    desc,
    price,
    offPrice,
  }: BookCardProps) {
    return (
      <Card color="transparent" shadow={false}>
        <CardHeader color="white" floated={false} className="mx-0 mt-0 mb-6">
          <Image
            width={728}
            height={728}
            src={img}
            alt={title}
            className={`h-full w-full scale-[1.1] object-cover object-center ${
  ["/image/contracts.svg", "/image/Security.svg", "/image/team.svg", "/image/Law.svg"].includes(img) ? "p-10" : ""
}`}
          />
        </CardHeader>
        <CardBody className="p-0">
          <Typography color="blue" className="mb-2 text-xs !font-semibold">
            {category}
          </Typography>
          <a href="#">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-3 font-bold normal-case text-center"
            >
              {title}
            </Typography>
          </a>
          <Typography className="mb-4 font-normal !text-gray-500 text-center">
            {desc}
          </Typography>
          <div className="flex gap-2">
            <Typography
              variant="h5"
              color="blue-gray"
              className={offPrice ? "line-through" : ""}
            >
              {price}
            </Typography>
            <Typography variant="h5" color="red">
              {offPrice}
            </Typography>
          </div>
        </CardBody>
      </Card>
    );
  }
export default BookCard