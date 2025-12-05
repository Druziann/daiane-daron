import React from 'react';
import { CheckCircle2, AlertTriangle, TrendingUp, Users, Heart } from 'lucide-react';

const DiagnosisView: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Header */}
      <div className="text-center pb-6">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Diagnóstico & Objetivos</h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          Análise rápida da presença digital atual e definição de metas claras.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Strengths */}
        <div className="bg-white rounded-xl shadow-sm border border-green-100 overflow-hidden">
          <div className="bg-green-50 px-6 py-4 border-b border-green-100 flex items-center">
            <CheckCircle2 className="w-6 h-6 text-green-600 mr-2" />
            <h3 className="text-lg font-semibold text-green-900">Pontos Fortes</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-green-500 mr-3"></span>
                <span className="text-gray-700">Frequência de postagem consistente.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-green-500 mr-3"></span>
                <span className="text-gray-700">Bom uso das cores da marca (Identidade Visual).</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-green-500 mr-3"></span>
                <span className="text-gray-700">Presença da equipe nas fotos (Humanização inicial).</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-green-500 mr-3"></span>
                <span className="text-gray-700">Localização clara na Bio e Posts.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Opportunities */}
        <div className="bg-white rounded-xl shadow-sm border border-amber-100 overflow-hidden">
          <div className="bg-amber-50 px-6 py-4 border-b border-amber-100 flex items-center">
            <AlertTriangle className="w-6 h-6 text-amber-600 mr-2" />
            <h3 className="text-lg font-semibold text-amber-900">Oportunidades de Melhoria</h3>
          </div>
          <div className="p-6">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-amber-500 mr-3"></span>
                <span className="text-gray-700">Feed visualmente poluído ("Cara de panfleto").</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-amber-500 mr-3"></span>
                <span className="text-gray-700">Pouco uso de Reels demonstrativos de produtos.</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-amber-500 mr-3"></span>
                <span className="text-gray-700">Legendas curtas e pouco persuasivas (Baixa retenção).</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-2 w-2 mt-2 rounded-full bg-amber-500 mr-3"></span>
                <span className="text-gray-700">Engajamento baixo (curtidas/comentários).</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Objectives Cards */}
      <h3 className="text-2xl font-bold text-gray-900 pt-8">Objetivos Estratégicos</h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-blue-600" />
          </div>
          <h4 className="text-lg font-bold text-gray-900">Vendas & Tráfego</h4>
          <p className="mt-2 text-gray-600">Aumentar cliques no Linktree/WhatsApp e visitas físicas à loja através de ofertas claras.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
            <Users className="w-6 h-6 text-red-600" />
          </div>
          <h4 className="text-lg font-bold text-gray-900">Envolvimento Local</h4>
          <p className="mt-2 text-gray-600">Tornar a Darom a referência "Top of Mind" em móveis e eletros em Assis Chateaubriand.</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
            <Heart className="w-6 h-6 text-purple-600" />
          </div>
          <h4 className="text-lg font-bold text-gray-900">Humanização</h4>
          <p className="mt-2 text-gray-600">Conectar emocionalmente o público com os vendedores e bastidores da loja.</p>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisView;