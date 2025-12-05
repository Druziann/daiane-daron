import React from 'react';
import { Tag, Video, Star, MessageCircle, AlertCircle, Store } from 'lucide-react';
import { DailyTask } from '../types';

const weeklyPlan: DailyTask[] = [
  {
    day: 'Segunda-feira',
    focus: 'Oportunidade',
    post: 'A oferta da semana. Carrossel com 3 produtos destaque.',
    stories: 'Enquete: "O que não pode faltar na sua casa? Opção A ou B".',
    icon: 'offer'
  },
  {
    day: 'Terça-feira',
    focus: 'Demonstração',
    post: 'Reels: Vendedor demonstrando produto (abrindo guarda-roupa, ligando TV).',
    stories: 'Detalhes do produto mostrado no Reels com link.',
    icon: 'video'
  },
  {
    day: 'Quarta-feira',
    focus: 'Prova Social',
    post: 'Foto de cliente feliz ou repost. "Obrigado Dona Maria!".',
    stories: 'Bastidores da entrega ou montagem na casa do cliente.',
    icon: 'social'
  },
  {
    day: 'Quinta-feira',
    focus: 'Interação/TBT',
    post: 'Dica de especialista: "3 coisas para olhar antes de comprar um sofá".',
    stories: 'Caixa de perguntas: "Dúvidas sobre crediário/entrega?".',
    icon: 'interaction'
  },
  {
    day: 'Sexta-feira',
    focus: 'Urgência',
    post: 'Reels ou Post: "O fim de semana chegou e o preço caiu!".',
    stories: 'Contagem regressiva para ofertas de sábado.',
    icon: 'alert'
  },
  {
    day: 'Sábado',
    focus: 'Loja Aberta',
    post: 'Foto da fachada ou equipe pronta.',
    stories: 'Tour pela loja mostrando movimento e convite para café.',
    icon: 'store'
  }
];

const getIcon = (type: string) => {
  switch (type) {
    case 'offer': return <Tag className="w-5 h-5 text-red-600" />;
    case 'video': return <Video className="w-5 h-5 text-blue-600" />;
    case 'social': return <Star className="w-5 h-5 text-yellow-500" />;
    case 'interaction': return <MessageCircle className="w-5 h-5 text-purple-600" />;
    case 'alert': return <AlertCircle className="w-5 h-5 text-orange-600" />;
    case 'store': return <Store className="w-5 h-5 text-green-600" />;
    default: return <Tag className="w-5 h-5" />;
  }
};

const WeeklyCalendar: React.FC = () => {
  return (
    <div className="space-y-6 animate-in slide-in-from-right duration-500">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900">Calendário Sugerido</h2>
        <p className="mt-2 text-gray-500">Rotina semanal para manter consistência e engajamento.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {weeklyPlan.map((day, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all hover:-translate-y-1">
            <div className="bg-slate-50 px-4 py-3 border-b border-gray-100 flex justify-between items-center">
              <span className="font-bold text-gray-900">{day.day}</span>
              <span className="text-xs font-semibold px-2 py-1 bg-white border border-gray-200 rounded-full text-gray-600 uppercase">
                {day.focus}
              </span>
            </div>
            <div className="p-5 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-gray-50 p-2 rounded-lg">
                  {getIcon(day.icon)}
                </div>
                <div>
                  <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Feed / Reels</h5>
                  <p className="text-sm text-gray-800 leading-relaxed">{day.post}</p>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-3 flex items-start gap-3">
                <div className="mt-1">
                  <div className="w-9 h-9 rounded-full border-2 border-red-500 p-0.5">
                    <div className="w-full h-full rounded-full bg-gray-200" />
                  </div>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Stories</h5>
                  <p className="text-sm text-gray-600 italic">"{day.stories}"</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCalendar;