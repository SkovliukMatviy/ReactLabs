# React Hook: useIdle

## Опис проекту
Цей проект демонструє створення кастомного хука `useIdle`, який відстежує бездіяльність користувача в браузері. Хук базується на стандартних React-хуках (`useState` та `useEffect`) і дозволяє визначати, чи був користувач неактивним протягом заданого часу. У цьому проекті хук інтегровано у головний компонент `App`, який відображає відповідне повідомлення залежно від активності користувача.

---

## Технології
- **React**: Фреймворк для створення динамічних користувацьких інтерфейсів.
- **React Hooks**: Використання стандартних та кастомних хуків.
- **JavaScript**: Реалізація логіки роботи хука.
- **CSS**: Стилізація компонентів.

---

## Структура проекту
public/ ├── index.html # Головний HTML-файл src/ ├── hooks/ │ └── useIdle.jsx # Кастомний хук useIdle ├── components/ │ └── App.jsx # Головний компонент, який використовує useIdle ├── index.css # Основні стилі ├── index.jsx # Вхідна точка програми └── App.css # Стилі для компонента App

---

## Код проекту

### useIdle.jsx — кастомний хук
Цей хук відстежує активність користувача. Якщо користувач неактивний (не рухав мишкою або не натискав клавіші) протягом заданого часу, хук повертає `true`.

```javascript
import { useState, useEffect } from 'react';

/**
 * Кастомний хук useIdle для відстеження бездіяльності користувача.
 * @param {number} timeout - Час бездіяльності (у мілісекундах).
 * @returns {boolean} - Повертає true, якщо користувач неактивний.
 */
const useIdle = (timeout = 3000) => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timer;

    const handleActivity = () => {
      clearTimeout(timer); // Очистка існуючого таймера.
      setIsIdle(false); // Якщо була активність — скидаємо статус.
      timer = setTimeout(() => setIsIdle(true), timeout); // Встановлюємо новий таймер на бездіяльність.
    };

    window.addEventListener('mousemove', handleActivity); // Відстеження руху миші.
    window.addEventListener('keydown', handleActivity);  // Відстеження натискання клавіш.

    handleActivity(); // Запуск таймера при завантаженні компонента.

    return () => {
      clearTimeout(timer); // Очистка таймера при демонтажі компонента.
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
    };
  }, [timeout]);

  return isIdle; // Повертає true, якщо користувач неактивний
};

export default useIdle;
