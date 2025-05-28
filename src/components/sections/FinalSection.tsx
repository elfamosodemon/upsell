import React from 'react';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const FinalSection: React.FC = () => {
  return (
    <section className="py-12 mb-8">
      <div className="p-6 rounded-lg bg-gray-800/80">
        <p className="mb-6 text-lg">
          Se você fechar essa página, tá tudo certo... mas saiba que você tá deixando passar a chance de dar um passo importante para o seu bem-estar. Imagina daqui uma semana, se você poderia estar se sentindo melhor, mais leve, e lembrar que uma simples conversa gratuita poderia ter sido o ponto de partida.
        </p>
        
        <p className="mb-10 text-lg">
          Agora... se você se valoriza e quer realmente iniciar uma mudança, sem compromisso, clique no botão abaixo para agendarmos uma conversa. É o seu momento de dar o primeiro passo!
        </p>
        
        <div className="flex justify-center">
          <Button
            onClick={() => window.open('https://checkout.pixpagamentoseguro.store/VCCL1O8SBV90', '_blank', 'noopener,noreferrer')}
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white focus:ring-green-500"
          >
            QUERO AGENDAR MINHA CONSULTA GRATUITA
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalSection;