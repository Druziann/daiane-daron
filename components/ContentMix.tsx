import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { ShoppingBag, BookOpen, Smile, MapPin } from 'lucide-react';

const data = [
  { name: 'Vitrine/Vendas', value: 40, color: '#DC2626' }, // red-600
  { name: 'Educativo', value: 20, color: '#2563EB' },      // blue-600
  { name: 'Humanização', value: 20, color: '#9333EA' },    // purple-600
  { name: 'Conexão Local', value: 20, color: '#16A34A' },  // green-600
];

const ContentMix: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in zoom-in duration-500">
       <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900">Linhas Editoriais</h2>
        <p className="mt-2 text-gray-500">Distribuição estratégica do conteúdo para evitar a fadiga de vendas.</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <div className="flex items-start p-4 bg-red-50 rounded-lg border border-red-100">
            <ShoppingBag className="w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-gray-900">Vitrine (40%)</h4>
              <p className="text-sm text-gray-600">Fotos de produtos, ofertas da semana, promoções relâmpago. O foco é a conversão direta.</p>
            </div>
          </div>

          <div className="flex items-start p-4 bg-blue-50 rounded-lg border border-blue-100">
            <BookOpen className="w-6 h-6 text-blue-600 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-gray-900">Educativo/Utilidade (20%)</h4>
              <p className="text-sm text-gray-600">Como escolher colchão, receitas com eletros da loja, dicas de organização de roupeiros.</p>
            </div>
          </div>

          <div className="flex items-start p-4 bg-purple-50 rounded-lg border border-purple-100">
            <Smile className="w-6 h-6 text-purple-600 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-gray-900">Humanização (20%)</h4>
              <p className="text-sm text-gray-600">Quem são os vendedores, bastidores de entrega, montagem, aniversariantes do mês.</p>
            </div>
          </div>

          <div className="flex items-start p-4 bg-green-50 rounded-lg border border-green-100">
            <MapPin className="w-6 h-6 text-green-600 mt-1 mr-4 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-gray-900">Conexão Local (20%)</h4>
              <p className="text-sm text-gray-600">Eventos da cidade, parcerias locais, enquetes sobre Assis Chateaubriand.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentMix;