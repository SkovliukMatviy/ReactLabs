# Форма з валідацією та Redux

## Опис проекту

Цей проект демонструє створення форми для збору платіжних даних із валідацією, використовуючи бібліотеки **`react-hook-form`** та **`yup`** для перевірки введених даних, а також **Redux** для збереження та управління глобальним станом додатку.

Форма дозволяє користувачам вводити реквізити для здійснення платежу, а потім перевіряє введені дані на правильність перед відправленням. Після успішної валідації дані зберігаються в глобальному стані через Redux, і виводяться в консоль.

### Проект реалізує наступні етапи:
1. **Створення форми** для введення платіжних даних.
2. **Валідація полів** за допомогою `react-hook-form` та `yup`.
3. **Збереження та управління даними форми** за допомогою Redux.
4. **Виведення результатів** в консоль після успішної відправки форми.

## Технології

- **React**: Бібліотека для побудови інтерфейсів користувача.
- **react-hook-form**: Легка бібліотека для управління станом форми в React.
- **redux**: Бібліотека для управління глобальним станом додатку.
- **yup**: Бібліотека для валідації схем, яка інтегрується з `react-hook-form`.
- **@reduxjs/toolkit**: Інструменти для спрощення роботи з Redux.

## Структура проекту
/src /components PaymentForm.jsx # Компонент форми для введення платіжних даних /redux paymentSlice.js # Редюсер для управління станом форми /store store.js # Налаштування Redux Store App.jsx # Головний компонент додатку index.js # Точка входу в додаток styles.css # CSS стилі для форми

## Опис коду

### `App.jsx`

В цьому файлі знаходиться головний компонент додатку, який містить форму для введення платіжних даних. Ми підключаємо компонент `PaymentForm` та передаємо необхідні пропси для валідації.

```jsx
import React from 'react';
import PaymentForm from './components/PaymentForm';

function App() {
  return (
    <div className="App">
      <h1>Оплата рахунку за реквізитами</h1>
      <PaymentForm />
    </div>
  );
}

export default App;



