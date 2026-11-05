
import React, { useState, useEffect } from 'react';

interface FloatingAudioGuideProps {
  /** O ID do elemento HTML que contém o texto que o guia deve ler */
  targetElementId: string;
}

export const TtsComponent: React.FC<FloatingAudioGuideProps> = ({ targetElementId }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [systemVoices, setSystemVoices] = useState<SpeechSynthesisVoice[]>([]);

  // Carrega a lista de vozes do dispositivo
  useEffect(() => {
    const updateVoices = () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        setSystemVoices(window.speechSynthesis.getVoices());
      }
    };
    updateVoices();
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }

    // Limpa o áudio se o componente for destruído (mudar de página)
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const handleToggleSpeech = () => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    // Se já estiver falando, o botão funciona como "Parar"
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    // Captura o elemento da página pelo ID fornecido
    const element = document.getElementById(targetElementId);
    if (!element) {
      console.warn(`Elemento com o ID "${targetElementId}" não foi localizado na página.`);
      alert("Texto para leitura não encontrado.");
      return;
    }

    const textToRead = element.innerText || element.textContent || '';
    if (!textToRead.trim()) return;

    setIsSpeaking(true);

    const utterance = new SpeechSynthesisUtterance(textToRead);

    {/* Língua e cadência */}
    utterance.lang = 'pt-BR';
    utterance.rate = 0.92;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  return (
    <a
      onClick={handleToggleSpeech}
      title={isSpeaking ? "Parar leitura" : "Ouvir descrição"}
      style={{
        width: '60px',
        height: '40px',
        borderRadius: '20%',
        backgroundColor: isSpeaking ? '#dc3545' : '#007bff',
        color: '#ffffff',
        border: 'none',
        boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '18px',
        transition: 'all 0.3s ease',
      }}
    >
      {isSpeaking ? <i class="bi bi-stop-fill"></i> : <i class="bi bi-play-fill"></i>}
    </a>
  );
};

