import React, { useState } from 'react';
import Button from '../ui/Button'; // Assumindo que este botão será usado ou tem variantes adequadas
import { ThumbsUp, MessageSquare, Send } from 'lucide-react';

interface CommentData {
  id: number;
  name: string;
  avatarInitial: string;
  avatarColor: string;
  text: string;
  timestamp: string;
}

const initialCommentsData: CommentData[] = [
  // Seus dados de comentários permanecem aqui...
  // Exemplo de como eles ficariam com a nova cor de avatar (apenas para ilustração, o código já faz isso randomicamente)
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

// Componente para renderizar um único comentário
const CommentCard: React.FC<CommentData> = ({ name, avatarInitial, avatarColor, text, timestamp }) => {
  return (
    // Card do comentário com fundo branco e borda de detalhe
    <div className="flex items-start space-x-3 p-3 bg-white rounded-lg mb-3 shadow border border-gray-200"> {/* Alterado de bg-gray-700/70 */}
      <div className={`flex-shrink-0 w-10 h-10 ${avatarColor} rounded-full flex items-center justify-center text-white font-semibold text-sm`}>
        {avatarInitial} {/* Cor do texto do avatar mantida como branca para contraste com fundos coloridos */}
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <span className="font-semibold text-sm text-gray-800">{name}</span> {/* Alterado de text-gray-100 */}
          <span className="text-xs text-gray-500">{timestamp}</span> {/* Alterado de text-gray-400 */}
        </div>
        <p className="text-sm text-gray-700 mt-1 leading-relaxed">{text}</p> {/* Alterado de text-gray-200 */}
        <div className="mt-2 flex items-center space-x-4 text-xs text-gray-500"> {/* Alterado de text-gray-400 */}
          <button className="flex items-center hover:text-blue-600 hover:underline"> {/* Hover alterado */}
            <ThumbsUp size={14} className="mr-1" /> Curtir
          </button>
          <button className="flex items-center hover:text-blue-600 hover:underline"> {/* Hover alterado */}
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
    setComments(prevComments => [newComment, ...prevComments]);
    setNewCommentName('');
    setNewCommentText('');
  };

  return (
    // Seção principal com texto escuro e fonte padrão (Satoshi, por exemplo)
    // Fundo da página geral deve ser branco. Esta seção pode ter um fundo de detalhe.
    <section className="py-12 mb-8 text-gray-900 bg-white font-satoshi"> {/* Mudado text-white e adicionado bg-white (ou remova se o pai já for branco) */}
      {/* Container interno pode usar a cor de detalhe #F3F4F8 (bg-gray-100 do Tailwind) */}
      <div className="p-6 md:p-10 rounded-lg bg-gray-100 shadow-xl max-w-3xl mx-auto"> {/* Mudado bg-gray-800/80 para bg-gray-100 (próximo de #F3F4F8) */}

        {/* Lista de Comentários Existentes */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-8 text-center text-gray-800 font-inter"> {/* Título com fonte Inter e cor escura */}
            O que estão dizendo sobre a conversa:
          </h3>
          {comments.length > 0 ? (
            <div className="space-y-4">
              {comments.map(comment => (
                <CommentCard
                  key={comment.id}
                  // Props do CommentCard já estão sendo passadas
                  {...comment} // Simplifica a passagem de props
                />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600">Ainda não há comentários. Seja o primeiro a comentar!</p> // Cor de texto ajustada
          )}
        </div>

        {/* --- Seção de Adicionar Comentário --- */}
        {/* Fundo branco para esta seção se destacar do bg-gray-100 do container pai */}
        <div className="my-10 p-6 bg-white rounded-lg shadow-md border border-gray-200"> {/* Mudado bg-gray-700/50 */}
          <h3 className="text-xl font-bold mb-6 text-center text-gray-800 font-inter">Deixe seu comentário abaixo!</h3>
          <form onSubmit={handleAddComment}>
            <div className="mb-4">
              <label htmlFor="commentName" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo:</label> {/* Cor do label ajustada */}
              <input
                type="text"
                id="commentName"
                value={newCommentName}
                onChange={(e) => setNewCommentName(e.target.value)}
                placeholder="Seu nome completo"
                // Estilo do input para tema claro
                className="w-full p-3 rounded bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="commentText" className="block text-sm font-medium text-gray-700 mb-1">Seu Comentário:</label> {/* Cor do label ajustada */}
              <textarea
                id="commentText"
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                placeholder="Escreva seu comentário aqui..."
                rows={4}
                // Estilo do textarea para tema claro
                className="w-full p-3 rounded bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>} {/* Cor do erro ajustada */}
            <div className="flex justify-end">
              {/* Botão de Enviar Comentário - Estilo para tema claro */}
              <Button // Se o seu componente Button tiver variantes (ex: variant="primary" ou variant="dark"), use-as.
                    // Se não, o className abaixo é um exemplo de como estilizá-lo.
                type="submit"
                className="px-6 py-2.5 bg-gray-800 hover:bg-gray-700 text-white rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-700 flex items-center"
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