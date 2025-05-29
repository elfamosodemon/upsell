import React from 'react';
import { AlertTriangle, X } from 'lucide-react';

interface ExitIntentPopupProps {
  isVisible: boolean;
  onClose: () => void;
  onStay: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ isVisible, onClose, onStay }) => {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 transition-opacity duration-300 ease-in-out">
      <div className="bg-gray-800 p-6 pt-8 sm:p-8 rounded-xl shadow-2xl w-full max-w-sm text-white text-center relative transform transition-all duration-300 ease-in-out scale-100">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition-colors"
          aria-label="Fechar pop-up"
        >
          <X size={24} />
        </button>
        
        <div className="mb-5">
          <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">Espere um Pouco!</h2>
        </div>

        <p className="text-base sm:text-lg text-gray-300 mb-6">
          Tem certeza que quer ir embora? VOCÊ NUNCA MAIS VAI VER ESSA PÁGINA!
        </p>

        <div className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row sm:space-x-3 justify-center">
          <button
            onClick={onStay}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Continuar no Site
          </button>
          <button
            onClick={onClose}
            className="w-full bg-gray-600 hover:bg-gray-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors text-base focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Sair Mesmo Assim
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitIntentPopup;