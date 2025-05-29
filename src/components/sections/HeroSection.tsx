import React, { useState, useEffect } from 'react';
// Adicionando Users e Eye para os novos contadores
import { AlertTriangle, ArrowRight, Users, Eye } from 'lucide-react'; 
import Button from '../ui/Button'; // Mantido, pois o botão principal está no seu código

const HeroSection: React.FC = () => {
  const [showMainButton, setShowMainButton] = useState(false); // Mantido do seu código

  // --- Estados para Contadores Dinâmicos ---
  const [liveViewers, setLiveViewers] = useState(0);
  const [viewCount, setViewCount] = useState(0);
  const [initialCountersSet, setInitialCountersSet] = useState(false); // Flag para inicializar uma vez

  useEffect(() => {
    // Timer para exibir o botão principal (do seu código)
    const mainButtonTimer = setTimeout(() => {
      setShowMainButton(true);
    }, 150000); // 2 minutos e 30 segundos

    // Carregar NOVO Script do Player ConverteAI
    const converteAiScriptId = "scr_6837f40a3515a3d9962151ba"; // NOVO ID DO SCRIPT
    if (!document.getElementById(converteAiScriptId)) {
      const script = document.createElement("script");
      script.id = converteAiScriptId;
      // NOVO SRC DO SCRIPT com o novo ID do player
      script.src = "https://scripts.converteai.net/9678d93b-140e-488a-8532-738f8e9321d0/players/6837f40a3515a3d9962151ba/player.js";
      script.async = true;
      document.head.appendChild(script);
    }

    // Inicializar contadores dinâmicos apenas uma vez
    if (!initialCountersSet) {
      // Pessoas assistindo: inicializa entre 5 e 25 (para ter mais espaço para crescer até 100)
      setLiveViewers(Math.floor(Math.random() * (25 - 5 + 1)) + 5);
      // Visualizações: número aleatório inicial
      setViewCount(Math.floor(Math.random() * 8000) + 1500); // Ex: 1500-9499 views
      setInitialCountersSet(true);
    }

    // Intervalo para aumentar o número de pessoas assistindo
    const viewersInterval = setInterval(() => {
      setLiveViewers(prevViewers => {
        const increment = Math.floor(Math.random() * 3) + 1; // Incrementa de 1 a 3
        const newTotal = prevViewers + increment;
        // Mantém o número entre o valor inicial e 100
        return Math.min(newTotal, 100); 
      });
    }, 4500); // Atualiza a cada 4.5 segundos

    // Função de limpeza
    return () => {
      clearTimeout(mainButtonTimer);
      clearInterval(viewersInterval);
      // Limpeza do script ConverteAI (do seu código)
      // const scriptElement = document.getElementById(converteAiScriptId);
      // if (scriptElement && scriptElement.parentNode) {
      //   scriptElement.parentNode.removeChild(scriptElement);
      // }
    };
  }, [initialCountersSet]); // Dependência para controlar a inicialização dos contadores

  return (
    <section className="pt-12 pb-8 text-center text-white"> {/* Adicionado text-white como padrão */}
      <div className="flex items-center justify-center mb-4">
      <AlertTriangle className="w-8 h-8 mr-2 text-red-500" />
      <h2 className="text-xl font-bold text-red-500 uppercase">Não feche essa página</h2>
      <AlertTriangle className="w-8 h-8 ml-2 text-red-500" />
      </div>

      {/* Título principal com padding horizontal adicionado (px-4 sm:px-6 lg:px-8) */}
      <h1 className="mb-6 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl px-4 sm:px-6 lg:px-8">
      <span className="block mt-2">❌ ISSO PODE CAUSAR ERRO NO SEU PEDIDO ❌</span> {/* Texto do seu último snippet */}
      <span className="block mt-2 text-yellow-400">⚠️ Você acabou de garantir seu Mounjaro de Pobre, mas falta UMA COISA FUNDAMENTAL pra acelerar seus resultados! ⚠️</span>
      </h1>

      <div className="mt-8 mb-10">
      <div className="relative inline-block mb-4">
        <h2 className="text-2xl font-bold text-white sm:text-3xl px-2">
        Esse vídeo de 2 minutos é muito importante e é essencial que você assista ele até o final se quiser ter sucesso no seu tratamento…
        </h2>
        <div className="absolute left-0 w-full h-1 bg-white bottom-[-8px]"></div>
      </div>

      {/* Contador de Pessoas Assistindo Agora */}
      <div className="my-4 text-md text-red-400 font-semibold animate-pulse flex items-center justify-center">
        <Users size={20} className="inline mr-2" />
        <span>{liveViewers} pessoas assistindo este vídeo agora!</span>
      </div>

      {/* Player de Vídeo ConverteAI ATUALIZADO */}
      <div className="mt-6 mb-3 flex justify-center">
        <div 
        id="vid_6837f40a3515a3d9962151ba" // NOVO ID
        style={{ position: 'relative', width: '100%', maxWidth: '560px', padding: '177.77777777777777% 0 0' }}
        >
        <img
          id="thumb_6837f40a3515a3d9962151ba" // NOVO ID
          // NOVO SRC da thumbnail com o novo ID do player
          src="https://images.converteai.net/9678d93b-140e-488a-8532-738f8e9321d0/players/6837f40a3515a3d9962151ba/thumbnail.jpg"
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          alt="thumbnail"
        />
        <div
          id="backdrop_6837f40a3515a3d9962151ba" // NOVO ID
          style={{ WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%' }}
        ></div>
        </div>
      </div>

      {/* Contador de Visualizações (sem Likes) */}
      <div className="flex justify-center items-center text-gray-300 text-sm mb-10">
        <div className="flex items-center">
        <Eye size={18} className="mr-1.5" />
        <span>{viewCount.toLocaleString('pt-BR')} visualizações</span>
        </div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;