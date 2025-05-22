import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const FinalSection: React.FC = () => {
  return (
    <section className="py-12 mb-8">
      <div className="p-6 rounded-lg bg-gray-800/80">
        <p className="mb-6 text-lg">
          Se você fechar essa página, tá tudo certo… mas saiba que você tá abrindo mão de acelerar seu resultado, e daqui uma semana quando olhar no espelho e ver que poderia estar mais magro(a), vai lembrar que deixou passar essa oportunidade <span className="font-bold text-yellow-400">RIDÍCULA de barata</span>.
        </p>
        
        <p className="mb-10 text-lg">
          Agora... se você é inteligente, se valoriza e quer realmente mudar... clica no botão abaixo e bora acelerar essa porra <span className="font-bold text-green-400">AGORA</span>!
        </p>
        
        <div className="flex justify-center">
<Button
  onClick={() => window.open('https://pay.pixpagamentoseguro.store/eApQgz2Yd22gEb7', '_blank', 'noopener,noreferrer')}
  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white focus:ring-green-500"
>
  QUERO ADICIONAR AGORA
  <ArrowRight className="w-5 h-5 ml-2" />
</Button>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;