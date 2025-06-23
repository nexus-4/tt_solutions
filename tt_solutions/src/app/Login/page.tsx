"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function LoginPage() {
  const searchParams = useSearchParams();
  const [activeForm, setActiveForm] = useState<"login" | "register" | "forgot">("login");

  useEffect(() => {
    const formParam = searchParams.get("form");
    if (formParam === "register" || formParam === "forgot") {
      setActiveForm(formParam);
    }
  }, [searchParams]);

  const renderForm = () => {
    switch (activeForm) {
      case "login":
        return (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Bem-vindo!</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Login enviado!");
              }}
              className="space-y-4"
            >
              <input type="email" required placeholder="E-mail" className="form-input" />
              <input type="password" required placeholder="Senha" className="form-input" />
              <button type="submit" className="form-btn">Entrar</button>
            </form>
            <div className="text-center mt-4 text-sm">
              <a href="#" onClick={() => setActiveForm("forgot")} className="text-purple-600 hover:underline">Esqueceu sua senha?</a>
            </div>
          </>
        );
      case "register":
        return (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Criar conta</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Registro enviado!");
              }}
              className="space-y-4"
            >
              <input type="text" required placeholder="Nome completo" className="form-input" />
              <input type="email" required placeholder="E-mail" className="form-input" />
              <input type="password" required placeholder="Senha" className="form-input" />
              <input type="password" required placeholder="Confirmar senha" className="form-input" />
              <button type="submit" className="form-btn">Registrar</button>
            </form>
          </>
        );
      case "forgot":
        return (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Recuperar senha</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Link de recuperação enviado!");
              }}
              className="space-y-4"
            >
              <input type="email" required placeholder="Digite seu e-mail" className="form-input" />
              <button type="submit" className="form-btn">Enviar link</button>
            </form>
            <div className="text-center mt-4 text-sm">
              <a href="#" onClick={() => setActiveForm("login")} className="text-purple-600 hover:underline">Voltar para o login</a>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="flex w-full max-w-5xl h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Lado esquerdo com imagem de fundo */}
        <div className="relative flex-1 text-white p-10 flex flex-col justify-center overflow-hidden">
          <img
            src="/image/background.png"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div className="relative z-10">
            <div className="text-2xl font-bold mb-4">TT Soluções</div>
            <h1 className="text-3xl font-semibold mb-2">Hello, welcome!</h1>
            <p className="text-base leading-relaxed">
              Soluções inteligentes para o seu futuro digital.
            </p>
          </div>
        </div>

        {/* Lado direito com formulário */}
        <div className="flex-1 flex items-center justify-center bg-white">
          <div className="w-full max-w-sm px-6 py-10 overflow-y-auto">
            <div className="flex bg-gray-100 rounded-xl mb-8">
              <button
                onClick={() => setActiveForm("login")}
                className={`flex-1 py-2 rounded-xl font-semibold text-sm ${
                  activeForm === "login" ? "bg-[#6D0AD8] text-white" : "text-gray-600"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setActiveForm("register")}
                className={`flex-1 py-2 rounded-xl font-semibold text-sm ${
                  activeForm === "register" ? "bg-[#6D0AD8] text-white" : "text-gray-600"
                }`}
              >
                Registro
              </button>
            </div>
            {renderForm()}
          </div>
        </div>
      </div>
    </div>
  );
}
