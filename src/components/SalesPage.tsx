import React from 'react';
import { ArrowRight, Check, AlertTriangle } from 'lucide-react';
import HeroSection from './sections/HeroSection';
import BenefitsSection from './sections/BenefitsSection';
import PressureSection from './sections/PressureSection';
import CtaSection from './sections/CtaSection';
import FinalSection from './sections/FinalSection';

const SalesPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-white">
      <div className="w-full max-w-4xl px-4 sm:px-6 lg:px-8">
        <HeroSection />
        <BenefitsSection />
        <PressureSection />
        <CtaSection />
        <FinalSection />
      </div>
    </div>
  );
};

export default SalesPage;