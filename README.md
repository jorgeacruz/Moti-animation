# ✨ React Native | Animações com Moti

Projeto desenvolvido utilizando **React Native** e **Moti**, uma biblioteca baseada no **React Native Reanimated**, criada para simplificar a implementação de animações fluidas e de alto desempenho.

O projeto demonstra como criar transições elegantes utilizando poucas linhas de código, explorando propriedades como opacidade, posição, escala e rotação.

---

## 📸 Preview

<img src="https://zippy-naiad-258ebd.netlify.app/images/image1.png" alt="Preview do projeto Moti Animation">

---

## 🚀 Tecnologias

- React Native
- TypeScript
- Moti
- React Native Reanimated

---

## ✨ Funcionalidades

- Animações declarativas
- Transições suaves
- Controle de opacidade
- Movimentação de elementos
- Escala e rotação
- Configuração de duração e atraso
- Alto desempenho utilizando a thread nativa

---

## 📚 Conceitos Aplicados

Este projeto explora conceitos importantes relacionados à criação de interfaces modernas e interativas.

- Animações declarativas
- Transições de componentes
- React Native Reanimated
- Biblioteca Moti
- Componentização
- Estados visuais
- Experiência do usuário (UX)
- Interfaces fluidas
- Performance em aplicações mobile

---

## 📦 Instalação

```bash
npm install moti
```

ou

```bash
yarn add moti
```

> **Observação:** O Moti utiliza o **React Native Reanimated** como base. Consulte a documentação oficial para realizar todas as configurações necessárias no projeto.

---

## ▶️ Executando o Projeto

```bash
npm install

npm start
```

ou

```bash
yarn

yarn start
```

---

## 🧩 Implementação

```tsx
import React from 'react';
import { Text } from 'react-native';
import { MotiView } from 'moti';

export default function MyComponent() {
  return (
    <MotiView
      style={{
        width: 100,
        height: 100,
        backgroundColor: 'red',
      }}
      from={{
        opacity: 0,
        translateX: -50,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      transition={{
        duration: 500,
      }}
    >
      <Text>Animação com Moti</Text>
    </MotiView>
  );
}
```

---

## 🎨 Recursos Demonstrados

- Fade In
- Transições suaves
- Animação de posição
- Controle de opacidade
- Escala
- Rotação
- Configuração de duração
- Delays
- Easing

---

## 🎯 Objetivos de Aprendizagem

- Aprender a criar animações declarativas no React Native.
- Utilizar a biblioteca Moti integrada ao Reanimated.
- Desenvolver interfaces mais modernas e interativas.
- Melhorar a experiência do usuário através de animações fluidas.
- Aplicar boas práticas na organização de componentes animados.

---

## 💡 Possíveis Evoluções

- Skeleton Loading
- Cards animados
- Bottom Sheets
- Onboarding
- Splash Screen animada
- Microinterações
- Botões com feedback visual
- Listas animadas
- Navegação com transições personalizadas

---

## 🌟 Por que utilizar o Moti?

O Moti simplifica significativamente a criação de animações em React Native, permitindo desenvolver interfaces sofisticadas com uma API declarativa e intuitiva.

Entre seus principais benefícios estão:

- Sintaxe simples
- Excelente desempenho
- Baseado no React Native Reanimated
- Menor quantidade de código
- Fácil manutenção
- Compatibilidade com Expo
- Ideal para interfaces modernas

---

## 📚 Recursos

- 📖 **Documentação Oficial:** https://moti.fyi
- 🔗 **Referência:** https://lnkd.in/dYZMUsJf

---

## 👨‍💻 Autor

Desenvolvido por **Jorge Cruz**.
