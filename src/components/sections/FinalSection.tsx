import React, { useState } from 'react'; // Importar useState
import Button from '../ui/Button';
import { ArrowRight, ThumbsUp, MessageSquare, Send } from 'lucide-react'; // Adicionado Send para o botão de comentar

// A interface CommentData permanece a mesma
interface CommentData {
  id: number;
  name: string;
  avatarInitial: string;
  avatarColor: string;
  text: string;
  timestamp: string;
}

// Dummy comment data
const initialCommentsData: CommentData[] = [
  { id: 1, name: 'Ana Silva', avatarInitial: 'AS', avatarColor: 'bg-pink-500', text: 'Gente, eu quase ia passar batido por essa parte importante. Ainda bem que insisti!', timestamp: '5m atrás' },
  { id: 2, name: 'Maria Oliveira', avatarInitial: 'MO', avatarColor: 'bg-purple-500', text: 'Estava cética no início, mas a orientação que recebi foi um divisor de águas. Obrigada por tudo!', timestamp: '15m atrás' },
  { id: 3, name: 'Sofia Costa', avatarInitial: 'SC', avatarColor: 'bg-indigo-500', text: 'Finalmente encontrei um caminho que funciona pra mim. A conversa gratuita já me deu várias ideias. Gratidão!', timestamp: '1h atrás' },
  { id: 4, name: 'Laura Pereira', avatarInitial: 'LP', avatarColor: 'bg-blue-500', text: 'Simplesmente amei! Todo o processo foi muito acolhedor e as dicas são práticas e fáceis de seguir. Vale muito a pena!', timestamp: '3h atrás' },
  { id: 5, name: 'Beatriz Santos', avatarInitial: 'BS', avatarColor: 'bg-green-500', text: 'Amei que falaram de coisa mais natural! E essa de entender porque certas dietas não funcionam, abriu minha cabeça real.', timestamp: '1d atrás' },
  { id: 6, name: 'Júlia Rodrigues', avatarInitial: 'JR', avatarColor: 'bg-yellow-500', text: 'Meu Deus! Se não fosse esse vídeo, eu ia ficar sem. Menos mal que vi até o final..', timestamp: '2d atrás' },
  { id: 7, name: 'Manuela Ferreira', avatarInitial: 'MF', avatarColor: 'bg-red-500', text: 'A Roberta explicando tudo com calma e sem enrolação, passa uma confiança que dá gosto. Adorei o jeito dela!"', timestamp: '5d atrás' },
  { id: 8, name: 'Isabela Almeida', avatarInitial: 'IA', avatarColor: 'bg-teal-500', text: 'Achei que era mais um video daqueles longos, valeu a pena assistir ', timestamp: '1sem atrás' },
];



// --- Funções Auxiliares ---
const getInitials = (name: string): string => {
  const words = name.trim().split(' ').filter(Boolean);
  if (words.length === 0) return '??';
  if (words.length === 1) return words[0].substring(0, 2).toUpperCase();
  return (words[0][0] + (words[words.length - 1][0] || '')).toUpperCase();
};

const avatarColors = [
  'bg-pink-500', 'bg-purple-500', 'bg-indigo-500', 'bg-blue-500',
  'bg-green-500', 'bg-yellow-500', 'bg-red-500', 'bg-teal-500',
  'bg-orange-500', 'bg-cyan-500'
];
const getRandomAvatarColor = (): string => {
  return avatarColors[Math.floor(Math.random() * avatarColors.length)];
};
// --- Fim das Funções Auxiliares ---

// Componente para renderizar um único comentário (permanece o mesmo)
const CommentCard: React.FC<CommentData> = ({ name, avatarInitial, avatarColor, text, timestamp }) => {
  return (
    <div className="flex items-start space-x-3 p-3 bg-gray-700/70 rounded-lg mb-3 shadow">
      <div className={`flex-shrink-0 w-10 h-10 ${avatarColor} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
        {avatarInitial}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-sm text-gray-100">{name}</span>
          <span className="text-xs text-gray-400">{timestamp}</span>
        </div>
        <p className="text-sm text-gray-200 mt-1 leading-relaxed">{text}</p>
        <div className="mt-2 flex items-center space-x-4 text-xs text-gray-400">
          <button className="flex items-center hover:text-gray-200 hover:underline">
            <ThumbsUp size={14} className="mr-1" /> Curtir
          </button>
          <button className="flex items-center hover:text-gray-200 hover:underline">
            <MessageSquare size={14} className="mr-1" /> Responder
          </button>
        </div>
      </div>
    </div>
  );
};

const FinalSection: React.FC = () => {
  const [comments, setComments] = useState<CommentData[]>(initialCommentsData);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [error, setError] = useState('');

  const handleAddComment = (event: React.FormEvent) => {
    event.preventDefault();
    if (!newCommentName.trim() || !newCommentText.trim()) {
      setError('Por favor, preencha o nome e o comentário.');
      return;
    }
    setError('');
    const newComment: CommentData = {
      id: Date.now(),
      name: newCommentName.trim(),
      avatarInitial: getInitials(newCommentName.trim()),
      avatarColor: getRandomAvatarColor(),
      text: newCommentText.trim(),
      timestamp: 'Agora mesmo',
    };
    setComments(prevComments => [newComment, ...prevComments]); // Adiciona novo comentário no topo
    setNewCommentName('');
    setNewCommentText('');
  };

  return (
    // A <section> e <div> principais que você queria manter como container
    <section className="py-12 mb-8 text-white">
      <div className="p-6 rounded-lg bg-gray-800/80 shadow-xl">
        
        {/* A PARTE REMOVIDA (TEXTO PERSUASIVO E BOTÃO CTA PRINCIPAL) ESTAVA AQUI */}

        {/* Lista de Comentários Existentes */}
        <div className="mb-10"> {/* Ajustado margin-bottom, e removido margin-top pois é o primeiro elemento agora */}
          <h3 className="text-xl font-semibold mb-6 text-center">O que estão dizendo sobre a conversa:</h3>
          {comments.length > 0 ? (
            <div className="space-y-4">
              {comments.map(comment => (
                <CommentCard
                  key={comment.id}
                  id={comment.id}
                  name={comment.name}
                  avatarInitial={comment.avatarInitial}
                  avatarColor={comment.avatarColor}
                  text={comment.text}
                  timestamp={comment.timestamp}
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400">Ainda não há comentários. Seja o primeiro a comentar!</p>
          )}
        </div>

        {/* --- Seção de Adicionar Comentário (MOVIDA PARA DEPOIS DA LISTA) --- */}
        <div className="my-10 p-6 bg-gray-700/50 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4 text-center">Deixe seu comentário abaixo!</h3>
          <form onSubmit={handleAddComment}>
            <div className="mb-4">
              <label htmlFor="commentName" className="block text-sm font-medium text-gray-200 mb-1">Nome Completo:</label>
              <input
                type="text"
                id="commentName"
                value={newCommentName}
                onChange={(e) => setNewCommentName(e.target.value)}
                placeholder="Seu nome completo"
                className="w-full p-2 rounded bg-gray-600 border border-gray-500 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="commentText" className="block text-sm font-medium text-gray-200 mb-1">Seu Comentário:</label>
              <textarea
                id="commentText"
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                placeholder="Escreva seu comentário aqui..."
                rows={4}
                className="w-full p-2 rounded bg-gray-600 border border-gray-500 text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
            <div className="flex justify-end">
              <Button
                type="submit"
                // Removido qualquer animação de pulsar
                className="px-5 py-2 bg-gray-600 hover:bg-gray-500 text-gray-100 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-700 focus:ring-gray-500 flex items-center"
              >
                Enviar Comentário <Send size={16} className="ml-2" />
              </Button>
            </div>
          </form>
        </div>
        {/* --- Fim da Seção de Adicionar Comentário --- */}

      </div>
    </section>
  );
};

export default FinalSection;