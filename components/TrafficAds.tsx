import React from 'react';
import { Target, MessageCircle, MapPin, MousePointerClick } from 'lucide-react';

const TrafficAds: React.FC = () => {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-500">
      
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Tráfego Pago & Google</h2>
        <p className="mt-2 text-gray-500">Não dependa só do orgânico. Acelere os resultados.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        
        {/* Ads Section */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-gray-900 flex items-center">
            <MousePointerClick className="w-6 h-6 mr-2 text-red-600" />
            Campanhas de Anúncios (Ads)
          </h3>
          
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-50 rounded-bl-full -mr-8 -mt-8"></div>
            <div className="flex items-start gap-4 relative z-10">
              <div className="bg-blue-100 p-3 rounded-lg text-blue-700">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Campanha 1: Raio Geográfico</h4>
                <p className="text-sm text-gray-500 mb-2">Objetivo: Reconhecimento</p>
                <p className="text-gray-700">
                  Anúncio para moradores de Assis Chateaubriand (+10km). Use vídeo institucional ou carrossel de "Mais Vendidos".
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 right-0 w-16 h-16 bg-green-50 rounded-bl-full -mr-8 -mt-8"></div>
            <div className="flex items-start gap-4 relative z-10">
              <div className="bg-green-100 p-3 rounded-lg text-green-700">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg">Campanha 2: Conversão WhatsApp</h4>
                <p className="text-sm text-gray-500 mb-2">Objetivo: Mensagens</p>
                <p className="text-gray-700">
                  Oferta agressiva (produto isca com preço muito bom). Botão "Enviar mensagem" direto para o vendedor.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Google Business Section */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center mb-6">
               <div className="bg-red-100 p-3 rounded-full mr-4">
                 <MapPin className="w-8 h-8 text-red-600" />
               </div>
               <h3 className="text-2xl font-bold text-gray-900">Google Perfil da Empresa</h3>
            </div>
            
            <p className="text-gray-600 mb-6 text-lg">
              Fundamental para aparecer quando alguém pesquisa "loja de móveis em Assis".
            </p>

            <ul className="space-y-4">
              <li className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-md">
                <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold mr-3">✓</span>
                Atualizar horário e endereço.
              </li>
              <li className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-md">
                <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold mr-3">✓</span>
                Postar fotos da fachada e interior.
              </li>
              <li className="flex items-center text-gray-700 bg-gray-50 p-3 rounded-md">
                <span className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs font-bold mr-3">!</span>
                <span className="font-medium ml-1">Estratégia de Ouro:</span> Peça para todo cliente avaliar a loja no Google após a compra.
              </li>
            </ul>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-100">
             <div className="text-center bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <span className="text-yellow-800 font-semibold">🌟 Meta: Conquistar 50 novas avaliações 5 estrelas este mês.</span>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TrafficAds;