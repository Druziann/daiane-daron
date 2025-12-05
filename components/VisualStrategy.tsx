import React from 'react';
import { Camera, Video, Smartphone, Image as ImageIcon } from 'lucide-react';

const VisualStrategy: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in duration-700">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Estratégias Visuais</h2>
        <p className="mt-2 text-gray-500">Transformando a estética para vender mais e gerar desejo.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Card 1: Photos */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
          <div className="h-48 bg-gray-100 relative overflow-hidden">
             <img src="https://picsum.photos/800/400?grayscale" alt="Example aesthetic" className="w-full h-full object-cover opacity-50" />
             <div className="absolute inset-0 flex items-center justify-center">
                <Camera className="w-16 h-16 text-gray-800 opacity-80" />
             </div>
          </div>
          <div className="p-8 flex-1">
            <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <ImageIcon className="w-5 h-5 mr-2 text-red-600" />
              Menos Arte, Mais Foto Real
            </h3>
            <p className="text-gray-600 mb-4">
              Artes muito "poluídas" (fundo preto/vermelho excessivo) parecem panfletos baratos.
            </p>
            <div className="bg-red-50 p-4 rounded-lg border border-red-100">
              <h4 className="font-semibold text-red-900 text-sm mb-2">Ação Sugerida:</h4>
              <p className="text-sm text-red-800">
                Tire fotos reais do produto no chão de loja. Coloque num cenário bonito, com boa luz. Fotos reais passam credibilidade, noção de tamanho e desejo imediato.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2: Reels */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
          <div className="h-48 bg-gray-900 relative overflow-hidden">
             <img src="https://picsum.photos/800/401" alt="Reels example" className="w-full h-full object-cover opacity-40" />
             <div className="absolute inset-0 flex items-center justify-center">
                <Video className="w-16 h-16 text-white" />
             </div>
          </div>
          <div className="p-8 flex-1">
             <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
              <Smartphone className="w-5 h-5 mr-2 text-blue-600" />
              Uso Estratégico do Reels
            </h3>
            <p className="text-gray-600 mb-4">
              O Instagram entrega muito mais vídeos do que fotos estáticas atualmente.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-blue-900 text-sm mb-2">Ideias de Conteúdo:</h4>
              <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
                <li>Vídeos de tour: "Olha o espaço interno desse roupeiro".</li>
                <li>Trends de humor leve com a equipe de vendas.</li>
                <li>Demonstração de funcionamento de eletros.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Black Friday Banner */}
      <div className="bg-gray-900 rounded-2xl p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-red-600 rounded-full blur-2xl opacity-50"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">🔥 Black Friday (Urgente)</h3>
            <p className="text-gray-300 max-w-xl">
              Vi na bio que já estão com o selo. Crie um <strong>Grupo VIP no WhatsApp</strong>.
              Convide as pessoas nos stories para entrarem no grupo onde as ofertas serão soltas 1 hora antes.
            </p>
          </div>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-lg shadow-red-900/50">
            Criar Grupo VIP
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisualStrategy;