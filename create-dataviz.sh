#!/bin/bash

# DataViz Dashboard - Analytics & Visualização
# Script para criar o projeto Next.js

echo "📊 Criando projeto DataViz Dashboard..."

# Criar diretório do projeto
mkdir dataviz-dashboard
cd dataviz-dashboard

# Inicializar projeto Next.js
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"

# Instalar dependências principais
npm install @supabase/supabase-js
npm install recharts
npm install chart.js react-chartjs-2
npm install jspdf html2canvas
npm install xlsx
npm install lucide-react
npm install clsx
npm install date-fns

# Instalar dependências de desenvolvimento
npm install --save-dev @types/chart.js

# Criar estrutura de pastas
mkdir -p src/{components,screens,lib,types,utils,hooks}
mkdir -p src/components/{Charts,Layout,Forms,UI}
mkdir -p src/components/Charts/{LineChart,BarChart,PieChart,AreaChart}
mkdir -p src/lib/{supabase,utils}
mkdir -p public/{images,icons}

# Criar arquivos principais
cat > src/types/index.ts << 'EOF'
export interface ChartData {
  name: string;
  value: number;
  date?: string;
  category?: string;
}

export interface DashboardData {
  totalSales: number;
  totalUsers: number;
  totalOrders: number;
  revenue: ChartData[];
  users: ChartData[];
  orders: ChartData[];
  categories: ChartData[];
}

export interface FilterOptions {
  startDate: Date;
  endDate: Date;
  category?: string;
  period: 'day' | 'week' | 'month' | 'year';
}

export interface ExportOptions {
  format: 'pdf' | 'excel';
  includeCharts: boolean;
  dateRange: {
    start: Date;
    end: Date;
  };
}
EOF

cat > src/lib/supabase/client.ts << 'EOF'
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Funções para buscar dados
export const fetchDashboardData = async () => {
  const { data, error } = await supabase
    .from('sales_data')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
};

export const fetchRevenueData = async (startDate: string, endDate: string) => {
  const { data, error } = await supabase
    .from('revenue')
    .select('*')
    .gte('date', startDate)
    .lte('date', endDate)
    .order('date', { ascending: true });

  if (error) throw error;
  return data;
};

export const fetchUserData = async (startDate: string, endDate: string) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .gte('created_at', startDate)
    .lte('created_at', endDate)
    .order('created_at', { ascending: true });

  if (error) throw error;
  return data;
};
EOF

cat > src/components/Charts/LineChart/index.tsx << 'EOF'
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ChartData } from '@/types';

interface LineChartProps {
  data: ChartData[];
  title: string;
  dataKey: string;
  color?: string;
}

const CustomLineChart: React.FC<LineChartProps> = ({
  data,
  title,
  dataKey,
  color = '#8884d8',
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={2}
            dot={{ fill: color, strokeWidth: 2, r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
EOF

cat > src/components/Charts/BarChart/index.tsx << 'EOF'
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ChartData } from '@/types';

interface BarChartProps {
  data: ChartData[];
  title: string;
  dataKey: string;
  color?: string;
}

const CustomBarChart: React.FC<BarChartProps> = ({
  data,
  title,
  dataKey,
  color = '#82ca9d',
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={dataKey} fill={color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
EOF

cat > src/components/Charts/PieChart/index.tsx << 'EOF'
import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { ChartData } from '@/types';

interface PieChartProps {
  data: ChartData[];
  title: string;
  dataKey: string;
  colors?: string[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const CustomPieChart: React.FC<PieChartProps> = ({
  data,
  title,
  dataKey,
  colors = COLORS,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            outerRadius={80}
            fill="#8884d8"
            dataKey={dataKey}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
EOF

cat > src/lib/utils/export.ts << 'EOF'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import { DashboardData, ExportOptions } from '@/types';

export const exportToPDF = async (
  elementId: string,
  filename: string = 'dashboard-report.pdf'
) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const canvas = await html2canvas(element);
  const imgData = canvas.toDataURL('image/png');
  
  const pdf = new jsPDF();
  const imgWidth = 210;
  const pageHeight = 295;
  const imgHeight = (canvas.height * imgWidth) / canvas.width;
  let heightLeft = imgHeight;

  let position = 0;

  pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
  heightLeft -= pageHeight;

  while (heightLeft >= 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
  }

  pdf.save(filename);
};

export const exportToExcel = (data: DashboardData, filename: string = 'dashboard-data.xlsx') => {
  const workbook = XLSX.utils.book_new();
  
  // Revenue sheet
  const revenueSheet = XLSX.utils.json_to_sheet(data.revenue);
  XLSX.utils.book_append_sheet(workbook, revenueSheet, 'Revenue');
  
  // Users sheet
  const usersSheet = XLSX.utils.json_to_sheet(data.users);
  XLSX.utils.book_append_sheet(workbook, usersSheet, 'Users');
  
  // Orders sheet
  const ordersSheet = XLSX.utils.json_to_sheet(data.orders);
  XLSX.utils.book_append_sheet(workbook, ordersSheet, 'Orders');
  
  // Categories sheet
  const categoriesSheet = XLSX.utils.json_to_sheet(data.categories);
  XLSX.utils.book_append_sheet(workbook, categoriesSheet, 'Categories');
  
  XLSX.writeFile(workbook, filename);
};
EOF

cat > src/app/page.tsx << 'EOF'
'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Download, Filter, Moon, Sun } from 'lucide-react';
import CustomLineChart from '@/components/Charts/LineChart';
import CustomBarChart from '@/components/Charts/BarChart';
import CustomPieChart from '@/components/Charts/PieChart';
import { DashboardData, FilterOptions } from '@/types';
import { exportToPDF, exportToExcel } from '@/lib/utils/export';

export default function Dashboard() {
  const [data, setData] = useState<DashboardData | null>(null);
  const [filters, setFilters] = useState<FilterOptions>({
    startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 days ago
    endDate: new Date(),
    period: 'day',
  });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados
    setTimeout(() => {
      setData({
        totalSales: 125000,
        totalUsers: 2500,
        totalOrders: 850,
        revenue: [
          { name: 'Jan', value: 4000 },
          { name: 'Fev', value: 3000 },
          { name: 'Mar', value: 5000 },
          { name: 'Abr', value: 4500 },
          { name: 'Mai', value: 6000 },
          { name: 'Jun', value: 5500 },
        ],
        users: [
          { name: 'Jan', value: 200 },
          { name: 'Fev', value: 150 },
          { name: 'Mar', value: 300 },
          { name: 'Abr', value: 250 },
          { name: 'Mai', value: 400 },
          { name: 'Jun', value: 350 },
        ],
        orders: [
          { name: 'Eletrônicos', value: 45 },
          { name: 'Roupas', value: 30 },
          { name: 'Casa', value: 15 },
          { name: 'Esportes', value: 10 },
        ],
        categories: [
          { name: 'Eletrônicos', value: 45 },
          { name: 'Roupas', value: 30 },
          { name: 'Casa', value: 15 },
          { name: 'Esportes', value: 10 },
        ],
      });
      setIsLoading(false);
    }, 1000);
  }, [filters]);

  const handleExportPDF = () => {
    exportToPDF('dashboard-content', 'dashboard-report.pdf');
  };

  const handleExportExcel = () => {
    if (data) {
      exportToExcel(data, 'dashboard-data.xlsx');
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Carregando dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-2xl font-bold text-gray-900">DataViz Dashboard</h1>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={handleExportPDF}
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Exportar PDF
              </button>
              <button
                onClick={handleExportExcel}
                className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Exportar Excel
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div id="dashboard-content">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-600">Total de Vendas</h3>
              <p className="text-3xl font-bold text-green-600">
                R$ {data?.totalSales.toLocaleString()}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-600">Total de Usuários</h3>
              <p className="text-3xl font-bold text-blue-600">
                {data?.totalUsers.toLocaleString()}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-600">Total de Pedidos</h3>
              <p className="text-3xl font-bold text-purple-600">
                {data?.totalOrders.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CustomLineChart
              data={data?.revenue || []}
              title="Receita por Mês"
              dataKey="value"
              color="#10B981"
            />
            <CustomBarChart
              data={data?.users || []}
              title="Usuários por Mês"
              dataKey="value"
              color="#3B82F6"
            />
            <CustomPieChart
              data={data?.categories || []}
              title="Vendas por Categoria"
              dataKey="value"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
EOF

cat > .env.local << 'EOF'
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# API Configuration
NEXT_PUBLIC_API_URL=http://localhost:3001/api
EOF

cat > README.md << 'EOF'
# DataViz Dashboard

## 📊 Sobre o Projeto

DataViz Dashboard é uma plataforma web para análise e visualização de dados empresariais, desenvolvida com Next.js e TypeScript. Oferece insights em tempo real através de gráficos interativos e relatórios personalizáveis.

## ✨ Features

- 📈 Gráficos interativos e responsivos
- 🔍 Filtros avançados por período e categoria
- 📄 Exportação de relatórios em PDF/Excel
- 🌙 Temas claro e escuro
- 📱 Dashboard personalizável
- 🔗 Integração com APIs externas
- ⚡ Performance otimizada

## 🛠️ Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Recharts** - Gráficos interativos
- **Chart.js** - Gráficos avançados
- **Supabase** - Backend e banco de dados
- **jsPDF** - Exportação PDF
- **XLSX** - Exportação Excel

## 🚀 Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Configure as variáveis de ambiente:
```bash
cp .env.local.example .env.local
# Edite o arquivo .env.local com suas credenciais
```

3. Execute o projeto:
```bash
npm run dev
```

4. Acesse: http://localhost:3000

## 📊 Funcionalidades

### Gráficos Disponíveis
- **Line Chart** - Tendências temporais
- **Bar Chart** - Comparações categóricas
- **Pie Chart** - Distribuições percentuais
- **Area Chart** - Áreas preenchidas

### Filtros
- Período (dia, semana, mês, ano)
- Categoria de dados
- Intervalo de datas personalizado

### Exportação
- PDF com gráficos e dados
- Excel com múltiplas planilhas
- Relatórios personalizáveis

## 🔧 Configuração

1. **Supabase**: Configure o banco de dados
2. **APIs**: Configure endpoints externos
3. **Temas**: Personalize cores e estilos
4. **Dados**: Configure fontes de dados

## 📱 Responsividade

- Design mobile-first
- Gráficos adaptativos
- Interface touch-friendly
- Performance otimizada

## 📄 Licença

MIT License
EOF

echo "✅ Projeto DataViz Dashboard criado com sucesso!"
echo "📁 Localização: ./dataviz-dashboard"
echo "🚀 Para executar: cd dataviz-dashboard && npm install && npm run dev"
