import React, { useState } from 'react';
import Navigation from './components/Navigation';
import DiagnosisView from './components/DiagnosisView';
import ContentMix from './components/ContentMix';
import WeeklyCalendar from './components/WeeklyCalendar';
import VisualStrategy from './components/VisualStrategy';
import TrafficAds from './components/TrafficAds';
import Footer from './components/Footer';
import { ArrowRight } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview': return <DiagnosisView />;
      case 'content': return <ContentMix />;
      case 'calendar': return <WeeklyCalendar />;
      case 'strategy': return <VisualStrategy />;
      case 'traffic': return <TrafficAds />;
      default: return <DiagnosisView />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content Area */}
        <div className="min-h-[600px]">
          {renderContent()}
        </div>

        {/* Immediate Actions Summary (Visible on all tabs at bottom) */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-800 rounded-2xl shadow-xl overflow-hidden text-white">
          <div className="px-6 py-8 sm:p-10">
            <h3 className="text-2xl font-bold text-white flex items-center">
              Resumo das Ações Imediatas
              <ArrowRight className="ml-2 w-6 h-6" />
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <span className="font-bold block mb-1">BIO</span>
                <p className="text-sm text-red-50">Adicionar CTA forte: "👇 Fale com um vendedor agora e garanta sua oferta".</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <span className="font-bold block mb-1">REELS</span>
                <p className="text-sm text-red-50">Gravar 2 vídeos por semana mostrando produtos "na vida real".</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                <span className="font-bold block mb-1">LEGENDAS</span>
                <p className="text-sm text-red-50">Fazer perguntas para estimular comentários (ex: "Qual cor combina com sua sala?").</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;