import React, { useState, useEffect } from 'react';
import { AlertTriangle, Users, Eye } from 'lucide-react';
// Removi ArrowRight e Button se não estiverem sendo usados DIRETAMENTE NESTE ARQUIVO.
// Se Button for usado para o botão que aparece após o timer, mantenha-o.
// Assumindo que o botão que aparece após 150 segundos é renderizado condicionalmente
// em algum lugar dentro deste return ou em um componente filho.

const HeroSection: React.FC = () => {
  const [showMainButton, setShowMainButton] = useState(false);

  const [liveViewers, setLiveViewers] = useState(0);
  const [viewCount, setViewCount] = useState(0);
  const [initialCountersSet, setInitialCountersSet] = useState(false);

  useEffect(() => {
    const mainButtonTimer = setTimeout(() => {
      setShowMainButton(true);
    }, 150000); // 2 minutos e 30 segundos

    const converteAiScriptId = "scr_6837f40a3515a3d9962151ba";
    if (!document.getElementById(converteAiScriptId)) {
      const script = document.createElement("script");
      script.id = converteAiScriptId;
      script.src = "https://scripts.converteai.net/9678d93b-140e-488a-8532-738f8e9321d0/players/6837f40a3515a3d9962151ba/player.js";
      script.async = true;
      document.head.appendChild(script);
    }

    if (!initialCountersSet) {
      setLiveViewers(Math.floor(Math.random() * (25 - 5 + 1)) + 5);
      setViewCount(Math.floor(Math.random() * 8000) + 1500);
      setInitialCountersSet(true);
    }

    const viewersInterval = setInterval(() => {
      setLiveViewers(prevViewers => {
        const increment = Math.floor(Math.random() * 3) + 1;
        const newTotal = prevViewers + increment;
        return Math.min(newTotal, 100);
      });
    }, 4500);

    return () => {
      clearTimeout(mainButtonTimer);
      clearInterval(viewersInterval);
      // A remoção do script ConverteAI pode causar problemas se o player ainda estiver
      // tentando interagir com ele. Geralmente, não é necessário remover scripts dessa forma.
      // Deixe comentado a menos que haja um motivo específico.
      // const scriptElement = document.getElementById(converteAiScriptId);
      // if (scriptElement && scriptElement.parentNode) {
      //   scriptElement.parentNode.removeChild(scriptElement);
      // }
    };
  }, [initialCountersSet]);

  return (
    // Fundo branco, texto principal preto (text-gray-900 para um preto mais suave)
    // Adicionando classes de fonte genéricas - ajuste conforme necessário
    <section className="pt-12 pb-8 text-center bg-white text-gray-900 font-satoshi">
      <div className="flex items-center justify-center mb-4">
        <AlertTriangle className="w-8 h-8 mr-2 text-red-500" />
        {/* Texto do alerta mantém o vermelho para destaque, mas pode ser ajustado */}
        <h2 className="text-xl font-bold text-red-500 uppercase">Não feche essa página</h2>
        <AlertTriangle className="w-8 h-8 ml-2 text-red-500" />
      </div>

      {/* Título principal */}
      <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl px-4 sm:px-6 lg:px-8 font-inter">
        {/* A cor deste span pode ser mantida como vermelha para alerta ou alterada para text-gray-900 */}
        <span className="block mt-2 text-red-600">❌ ISSO PODE CAUSAR ERRO NO SEU PEDIDO ❌</span>
        {/* A cor do aviso (amarelo antes) pode ser um cinza escuro ou outra cor de destaque.
            Usando um tom de cinza escuro para contraste no fundo branco, ou mantenha uma cor se desejar.
            Para "letras pretas" como instrução principal, vamos usar um cinza escuro.
            A fonte Inter pode ser usada aqui para títulos, por exemplo. */}
        <span className="block mt-2 text-orange-600">⚠️ Você acabou de garantir seu Mounjaro de Pobre, mas falta UMA COISA FUNDAMENTAL pra acelerar seus resultados! ⚠️</span>
      </h1>

      <div className="mt-8 mb-10">
        <div className="relative inline-block mb-4">
          <h2 className="text-2xl font-bold sm:text-3xl px-2 text-gray-800"> {/* Texto para preto/cinza escuro */}
            Esse vídeo de 2 minutos é muito importante e é essencial que você assista ele até o final se quiser ter sucesso no seu tratamento…
          </h2>
          {/* A linha que era branca, agora precisa de uma cor que contraste com o fundo branco.
              Pode ser preta, cinza escura, ou a cor de detalhe #F3F4F8 se for para ser sutil.
              Se #F3F4F8 for para detalhes, um bg-gray-200 (similar a #E5E7EB) ou bg-gray-100 (similar a #F3F4F6) pode ser usado.
              Vamos usar bg-gray-200 para ser um pouco mais visível que F3F4F8 como uma linha.
              Ou, para usar #F3F4F8 diretamente: style={{ backgroundColor: '#F3F4F8' }}
          */}
          <div className="absolute left-0 w-full h-1 bg-gray-200 bottom-[-8px]"></div>
        </div>

        {/* Contador de Pessoas Assistindo Agora */}
        {/* Mantendo o vermelho para destaque, mas pode ser text-gray-700 se preferir */}
        <div className="my-4 text-md text-red-500 font-semibold animate-pulse flex items-center justify-center">
          <Users size={20} className="inline mr-2" /> {/* Ícone herda a cor do texto */}
          <span>{liveViewers} pessoas assistindo este vídeo agora!</span>
        </div>

        {/* Player de Vídeo ConverteAI */}
        <div className="mt-6 mb-3 flex justify-center">
          <div
            id="vid_6837f40a3515a3d9962151ba"
            style={{ position: 'relative', width: '100%', maxWidth: '560px', padding: '177.77777777777777% 0 0' }}
            // Adicionando um fundo de detalhe aqui para o player, se desejado
            // className="bg-gray-100" // Equivalente a F3F4F6, muito próximo de F3F4F8
          >
            <img
              id="thumb_6837f40a3515a3d9962151ba"
              src="https://images.converteai.net/9678d93b-140e-488a-8532-738f8e9321d0/players/6837f40a3515a3d9962151ba/thumbnail.jpg"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              alt="thumbnail"
            />
            <div
              id="backdrop_6837f40a3515a3d9962151ba"
              style={{ WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%' }}
            ></div>
          </div>
        </div>

        {/* Contador de Visualizações */}
        {/* Texto que era cinza claro, agora cinza mais escuro para contraste */}
        <div className="flex justify-center items-center text-gray-600 text-sm mb-10">
          <div className="flex items-center">
            <Eye size={18} className="mr-1.5" /> {/* Ícone herda a cor do texto */}
            <span>{viewCount.toLocaleString('pt-BR')} visualizações</span>
          </div>
          {/* O botão que aparece após 150s seria renderizado aqui condicionalmente se 'showMainButton' for true */}
          {/* Exemplo:
          {showMainButton && (
            <div className="mt-10">
              <Button href="SEU_LINK_AQUI" variant="primary" className="animate-pulse">
                QUERO ACELERAR MEUS RESULTADOS AGORA!
                <ArrowRight className="inline w-5 h-5 ml-2" />
              </Button>
            </div>
          )}
          */}
        </div>
      </div>
      {/* Se você quiser usar a cor #F3F4F8 como fundo para uma subseção, poderia ser algo como:
      <div className="bg-gray-100 p-6 rounded-lg"> ... conteúdo de detalhe ... </div>
      Lembre-se que bg-gray-100 do Tailwind é #F3F4F6, muito similar.
      Para usar EXATAMENTE #F3F4F8, você pode precisar definir no tailwind.config.js ou usar style inline.
      Exemplo de uso para #F3F4F8 em um detalhe (ex: uma borda ou um fundo sutil):
      <div className="border-t-2 border-[#F3F4F8] mt-4 pt-4"> ... </div>
      Ou se for um background de uma caixa:
      <div style={{ backgroundColor: '#F3F4F8' }} className="p-4 rounded"> ... </div>
      */}
    </section>
  );
};

export default HeroSection;