#!/bin/bash

# ShopEasy - E-commerce Mobile
# Script para criar o projeto React Native

echo "🚀 Criando projeto ShopEasy - E-commerce Mobile..."

# Criar diretório do projeto
mkdir shopeasy
cd shopeasy

# Inicializar projeto React Native
npx react-native@latest init ShopEasy --template react-native-template-typescript

cd ShopEasy

# Instalar dependências principais
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context
npm install @reduxjs/toolkit react-redux
npm install react-native-vector-icons
npm install react-native-async-storage/async-storage
npm install socket.io-client
npm install react-native-paper
npm install react-native-gesture-handler
npm install react-native-reanimated

# Instalar dependências de desenvolvimento
npm install --save-dev @types/react-native-vector-icons

# Criar estrutura de pastas
mkdir -p src/{components,screens,navigation,store,services,utils,types}
mkdir -p src/components/{ProductCard,CartItem,SearchBar,Chat}
mkdir -p src/screens/{Home,Product,Cart,Checkout,Profile,Chat}
mkdir -p src/services/{api,stripe,notifications}
mkdir -p src/store/{slices,middleware}

# Criar arquivos principais
cat > src/types/index.ts << 'EOF'
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: number;
  reviews: Review[];
}

export interface Review {
  id: string;
  userId: string;
  rating: number;
  comment: string;
  date: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}
EOF

cat > src/services/api/index.ts << 'EOF'
import axios from 'axios';

const API_BASE_URL = 'https://api.shopeasy.com';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const productService = {
  getProducts: () => api.get('/products'),
  getProduct: (id: string) => api.get(`/products/${id}`),
  searchProducts: (query: string) => api.get(`/products/search?q=${query}`),
  getCategories: () => api.get('/categories'),
};

export const cartService = {
  addToCart: (productId: string, quantity: number) => 
    api.post('/cart', { productId, quantity }),
  getCart: () => api.get('/cart'),
  updateCart: (itemId: string, quantity: number) => 
    api.put(`/cart/${itemId}`, { quantity }),
  removeFromCart: (itemId: string) => api.delete(`/cart/${itemId}`),
};
EOF

cat > src/store/slices/cartSlice.ts << 'EOF'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, Product } from '../../types';

interface CartState {
  items: CartItem[];
  total: number;
  isLoading: boolean;
}

const initialState: CartState = {
  items: [],
  total: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        item => item.product.id === action.payload.id
      );
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ product: action.payload, quantity: 1 });
      }
      
      state.total = state.items.reduce(
        (sum, item) => sum + (item.product.price * item.quantity), 0
      );
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter(item => item.product.id !== action.payload);
      state.total = state.items.reduce(
        (sum, item) => sum + (item.product.price * item.quantity), 0
      );
    },
    updateQuantity: (state, action: PayloadAction<{id: string, quantity: number}>) => {
      const item = state.items.find(item => item.product.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        state.total = state.items.reduce(
          (sum, item) => sum + (item.product.price * item.quantity), 0
        );
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
EOF

cat > src/components/ProductCard/index.tsx << 'EOF'
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
  onPress: () => void;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onPress, onAddToCart }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={2}>{product.name}</Text>
        <Text style={styles.price}>R$ {product.price.toFixed(2)}</Text>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>⭐ {product.rating.toFixed(1)}</Text>
          <Text style={styles.reviews}>({product.reviews.length} reviews)</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={onAddToCart}>
          <Text style={styles.addButtonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  content: {
    padding: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 8,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  ratingText: {
    fontSize: 14,
    marginRight: 8,
  },
  reviews: {
    fontSize: 12,
    color: '#666',
  },
  addButton: {
    backgroundColor: '#1976D2',
    padding: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ProductCard;
EOF

cat > README.md << 'EOF'
# ShopEasy - E-commerce Mobile

## 🛒 Sobre o Projeto

ShopEasy é uma plataforma de e-commerce mobile desenvolvida com React Native, oferecendo uma experiência de compra fluida e intuitiva.

## ✨ Features

- 🛒 Carrinho de compras com persistência local
- 💳 Sistema de pagamentos integrado (Stripe)
- 💬 Chat em tempo real com vendedores
- 🔍 Busca avançada com filtros
- ⭐ Sistema de reviews e avaliações
- 🔔 Notificações push personalizadas
- 📱 Interface responsiva e moderna

## 🛠️ Tecnologias

- **React Native** - Framework mobile
- **TypeScript** - Tipagem estática
- **Redux Toolkit** - Gerenciamento de estado
- **React Navigation** - Navegação
- **Socket.io** - Chat em tempo real
- **Stripe** - Pagamentos
- **AsyncStorage** - Persistência local

## 🚀 Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Para iOS:
```bash
cd ios && pod install && cd ..
npx react-native run-ios
```

3. Para Android:
```bash
npx react-native run-android
```

## 📱 Screenshots

- Tela inicial com produtos
- Carrinho de compras
- Chat com vendedores
- Sistema de pagamentos

## 🔧 Configuração

1. Configure as variáveis de ambiente
2. Configure o Stripe API
3. Configure o servidor de chat
4. Configure as notificações push

## 📄 Licença

MIT License
EOF

echo "✅ Projeto ShopEasy criado com sucesso!"
echo "📁 Localização: ./shopeasy/ShopEasy"
echo "🚀 Para executar: cd shopeasy/ShopEasy && npm install && npx react-native run-android"
