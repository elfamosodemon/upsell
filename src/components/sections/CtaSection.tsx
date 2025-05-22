import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const CtaSection: React.FC = () => {
  return (
    <section className="py-8">
      <h3 className="mb-6 text-xl font-bold text-center text-red-400 sm:text-2xl">
         ADICIONE AGORA NO SEU PEDIDO:
      </h3>
      
      <div className="flex flex-col items-center px-8 py-10 text-center rounded-lg bg-gradient-to-br from-gray-800 to-gray-900">
        <p className="mb-6 text-xl font-bold text-yellow-400">
          👉 SIM, EU QUERO ADICIONAR AGORA por só R$ 47,90!
        </p>
                
      <Button
  onClick={() => window.open('https://pay.pixpagamentoseguro.store/eApQgz2Yd22gEb7', '_blank', 'noopener,noreferrer')}
  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white focus:ring-green-500"
>
  QUERO ADICIONAR AGORA
  <ArrowRight className="w-5 h-5 ml-2" />
</Button>
      </div>
    </section>
  );
};

export default CtaSection;