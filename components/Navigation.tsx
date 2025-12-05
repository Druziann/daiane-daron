import React from 'react';
import { LayoutDashboard, Calendar, BarChart3, Target, Megaphone } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'overview', label: 'Visão Geral', icon: LayoutDashboard },
    { id: 'content', label: 'Linha Editorial', icon: BarChart3 },
    { id: 'calendar', label: 'Calendário Semanal', icon: Calendar },
    { id: 'strategy', label: 'Estratégias Visuais', icon: Target },
    { id: 'traffic', label: 'Tráfego & Google', icon: Megaphone },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <span className="font-bold text-2xl text-red-700 tracking-tight">DAROM</span>
              <span className="ml-2 text-xs font-semibold text-gray-500 uppercase tracking-wide">Planejamento</span>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`${
                      activeTab === tab.id
                        ? 'border-red-600 text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors duration-200`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex items-center">
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800">
              Assis Chateaubriand
            </span>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className="sm:hidden flex overflow-x-auto px-4 py-2 gap-2 hide-scrollbar">
         {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id
                    ? 'bg-red-50 text-red-700 border-red-200'
                    : 'bg-white text-gray-500 border-gray-200'
                } flex items-center px-3 py-2 border rounded-md text-sm font-medium whitespace-nowrap`}
              >
                <Icon className="w-4 h-4 mr-2" />
                {tab.label}
              </button>
            );
          })}
      </div>
    </nav>
  );
};

export default Navigation;