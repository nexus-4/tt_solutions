"use client";

import { Typography } from "@material-tailwind/react";
import BookCard from "@/components/book-card";


const OTHER_BOOKS = [
  {
    img: `/image/Urgent.svg`,
    //category: "Frank Herbert",
    title: "Economia de Tempo",
    desc: "Automatize tarefas repetitivas e ganhe agilidade em cada etapa do processo de compras públicas.",
    //price: "$99",
    //offPrice: "$79",
  },
  {
    img: `/image/otimizacao.svg`,
    //category: "J.R.R. Tolkien",
    title: "Maximizar a eficiência dos recursos",
    desc: "Direcione o orçamento com mais eficiência e precisão, evitando desperdícios e retrabalho.",
    //price: "$99",
    //offPrice: "$79",
  },
  {
    img: `/image/contracts.svg`,
    //category: "J.R.R. Tolkien",
    title: "Potencializar o número de contratos",
    desc: "Amplie as oportunidades de contratação com acesso facilitado a dados estratégicos e fornecedores.",
  },
  {
    img: `/image/team.svg`,
    //category: "William Gibson",
    title: "Redução de custo com pessoal",
    desc: "Reduza a demanda operacional com uma ferramenta inteligente que faz mais com menos.",
    //price: "$99",
    //offPrice: "$79",
  },
  {
    img: `/image/Security.svg`,
    //category: "J.R.R. Tolkien",
    title: "Segurança nas Informações",
    desc: "Conte com dados atualizados, confiáveis e em conformidade com a legislação vigente.",
    //price: "$99",
    //offPrice: "$79",
  },
  {
    img: `/image/Law.svg`,
    //category: "J.R.R. Tolkien",
    title: "Comformidade com a Legislação",
    desc: "Garanta que cada etapa do processo de compras siga as normas vigentes, reduzindo riscos e aumentando a transparência.",
    //price: "$99",
    //offPrice: "$79",
  },
];

export function OtherBookOffers() {
  return (
    <section id="why" className="px-8 pt-28">
      <div className="container mx-auto mb-10">
        <Typography variant="h2" color="blue-gray" className="mb-2 text-center">
          Por que contratar o Mural de Preços?
        </Typography>
        <Typography variant="lead" className="w-full max-w-lg !text-gray-500 text-center mx-auto">
          Entenda por que cada vez mais gestores públicos confiam no Mural de Preços.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 items-start gap-x-6 gap-y-20 md:grid-cols-2 xl:grid-cols-3">
        {OTHER_BOOKS.map((props, key) => (
          <BookCard key={key} {...props} />
        ))}
      </div>
    </section>
  );
}

export default OtherBookOffers;
