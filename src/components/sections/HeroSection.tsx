import React from 'react';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-12 pb-8 text-center">
      <div className="flex items-center justify-center mb-4">
        <AlertTriangle className="w-8 h-8 mr-2 text-red-500" />
        <h2 className="text-xl font-bold text-red-500 uppercase">Não feche essa página</h2>
        <AlertTriangle className="w-8 h-8 ml-2 text-red-500" />
      </div>
      
      <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
        <span className="block mt-2">❌ NÃO FECHE ESSA PÁGINA ❌</span>
        <span className="block mt-2 text-yellow-400">⚠️ Você acabou de garantir seu Mounjaro de Pobre, mas falta UMA COISA FUNDAMENTAL pra acelerar seus resultados! ⚠️</span>
      </h1>
      
      <div className="mt-8 mb-10">
        <div className="relative inline-block">
          <h2 className="text-2xl font-bold text-blue-400 sm:text-3xl">
            🚀 Aumente até 7x seus resultados!
          </h2>
          <div className="absolute left-0 w-full h-1 bg-blue-400 bottom-[-8px]"></div>
        </div>
        <p className="mt-6 text-xl font-medium">
          👉 Descubra o <span className="font-bold text-green-400">Protocolo Seca Barriga</span>, o guia secreto que vai acelerar sua queima de gordura, controlar sua fome e te deixar mais perto do shape que você sempre quis...
        </p>
        <p className="mt-4 text-2xl font-bold text-yellow-400">
          Por APENAS <span className="text-3xl">R$ 47,90</span> <span className="text-red-400">(só hoje, só aqui, nunca mais depois dessa página)!</span>
        </p>
      </div>
     <Button
  onClick={() => window.open('https://checkout.pixpagamentoseguro.store/VCCL1O8SBV90', '_blank', 'noopener,noreferrer')}
  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white focus:ring-green-500"
>
  QUERO FAZER MINHA CONSULTA AGORA!
  <ArrowRight className="w-5 h-5 ml-2" />
</Button>
      <p className="mt-4 text-lg font-medium text-gray-400">
        👉 Clique no botão acima e faça sua consulta!
      </p>
    </section>
  );
};

export default HeroSection;