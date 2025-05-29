import React from 'react';
// Os ícones ArrowRight, Check, AlertTriangle não são usados diretamente aqui,
// mas podem ser usados dentro de HeroSection ou FinalSection.
// import { ArrowRight, Check, AlertTriangle } from 'lucide-react'; 
import HeroSection from './sections/HeroSection';
import FinalSection from './sections/FinalSection';

// Corrigido o nome da função para SalesPage
const SalesPage: React.FC = () => {
  return (
    // Removemos o div redundante com min-h-screen bg-gray-900,
    // pois App.tsx já cuida disso.
    // Usamos um Fragment <> ou um simples <div> se precisar de um container.
    <>
      <HeroSection />
      <FinalSection />
    </>
  );
};

// Corrigido o export para SalesPage
export default SalesPage;