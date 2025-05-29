import React, { useState, useEffect, useCallback } from 'react';
import SalesPage from './components/SalesPage';
// Ajuste o caminho para onde você salvou o ExitIntentPopup.tsx
// Se está em src/components/sections/ExitIntentPopup.tsx:
import ExitIntentPopup from './components/sections/ExitIntentPopup'; 

function App() {
  const [isExitPopupVisible, setIsExitPopupVisible] = useState(false);
  
  const checkAndShowPopup = useCallback(() => {
    const popupShownInSession = sessionStorage.getItem('exitPopupShown');
    
    if (document.hidden && !popupShownInSession && !isExitPopupVisible) {
      setIsExitPopupVisible(true);
      sessionStorage.setItem('exitPopupShown', 'true');
    }
  }, [isExitPopupVisible]); // Dependência para evitar reaberturas se já estiver visível

  useEffect(() => {
    document.addEventListener('visibilitychange', checkAndShowPopup);

    return () => {
      document.removeEventListener('visibilitychange', checkAndShowPopup);
    };
  }, [checkAndShowPopup]);

  const handleClosePopup = () => {
    setIsExitPopupVisible(false);
  };

  const handleStayOnSite = () => {
    setIsExitPopupVisible(false);
    console.log("Usuário decidiu ficar no site.");
    // Você pode adicionar lógica aqui, como rolar para uma oferta.
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <SalesPage /> {/* Seu conteúdo principal da página */}

      {/* O Pop-up de Intenção de Saída */}
      <ExitIntentPopup
        isVisible={isExitPopupVisible}
        onClose={handleClosePopup}
        onStay={handleStayOnSite}
      />
    </div>
  );
}

export default App;