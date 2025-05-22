import React from 'react';

const PressureSection: React.FC = () => {
  return (
    <section className="py-8">
      <h3 className="mb-6 text-xl font-bold text-center text-blue-400 sm:text-2xl">
        🧠 A VERDADE QUE NINGUÉM TE CONTA:
      </h3>
      
      <div className="p-6 mb-6 rounded-lg bg-gray-800/80">
        <p className="mb-4 text-lg">
          A verdade é dura, mas real:
        </p>
        <p className="mb-6 text-lg font-bold">
          Se você não acelerar seu metabolismo, controlar sua fome e seguir um protocolo certo... os resultados vão demorar <span className="text-red-400">MUITO MAIS</span>.
        </p>
        
        <p className="mb-6 text-lg">
          Esse material foi criado com tudo que funciona pra quem quer emagrecer sem gastar dinheiro com nutricionista, sem academia e sem ficar passando fome como um condenado.
        </p>
        
        <div className="p-4 mt-6 font-bold rounded-lg bg-red-500/20">
          <p className="text-lg text-center text-red-400">
            E deixa eu te falar uma coisa: <span className="underline">VOCÊ SÓ VAI VER ESSA OFERTA AGORA</span>.
          </p>
          <p className="mt-2 text-lg text-center text-white">
            Depois que sair dessa página, não tem como voltar. <span className="text-yellow-400">NUNCA MAIS NESSE PREÇO</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PressureSection;