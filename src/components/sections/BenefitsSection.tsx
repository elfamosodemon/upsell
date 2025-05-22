import React from 'react';
import { Check } from 'lucide-react';

const benefits = [
  'Plano alimentar simples, barato e fácil de seguir (até pra quem odeia dieta)',
  'Receita do Mounjaro de Pobre + mais 5 fórmulas secretas',
  'Protocolos pra SECAR barriga e segurar ansiedade por comida',
  'Técnicas pra acelerar metabolismo mesmo sem academia',
  'CHECKLIST diário: Você só segue e vê a banha indo embora',
  'Estratégias de controle de fome com alimentos, bebidas e hacks mentais'
];

const BenefitsSection: React.FC = () => {
  return (
    <section className="py-8">
      <h3 className="mb-6 text-xl font-bold text-center text-yellow-400 sm:text-2xl">
        💣 CHUVA DE BENEFÍCIOS QUE VOCÊ VAI RECEBER:
      </h3>
      
      <div className="p-6 rounded-lg bg-gray-800/80">
        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <div className="flex-shrink-0 p-1 mt-1 mr-3 rounded-full bg-green-500/20">
                <Check className="w-5 h-5 text-green-400" />
              </div>
              <p className="text-lg font-medium">{benefit}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BenefitsSection;