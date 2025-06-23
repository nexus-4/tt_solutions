import { Typography } from "@material-tailwind/react";

export function Footer() {
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-20" >
      <div className="container mx-auto grid gap-8 md:grid-cols-3">
        {/* Coluna 1: Sobre */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Sobre nós</h2>
          <p className="text-sm text-gray-400">
            Somos uma empresa dedicada a soluções tecnológicas e inovação para transformar serviços públicos e privados.
          </p>
        </div>

        {/* Coluna 2: Links rápidos */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Links</h2>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Início</a></li>
            <li><a href="#solutions" className="hover:text-white">Soluções</a></li>
            <li><a href="#about" className="hover:text-white">Sobre</a></li>
          </ul>
        </div>

        {/* Coluna 3: Contato */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contato</h2>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>contato@seudominio.com</li>
            <li>(00) 1234-5678</li>
            <li>Rua Exemplo, 123 - Cidade</li>
          </ul>
        </div>
      </div>

      {/* Rodapé final */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        &copy; {CURRENT_YEAR} Sua Empresa. Todos os direitos reservados.
      </div>
    </footer>
  );
}
