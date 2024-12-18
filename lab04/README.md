# React Project: Form Page with Exit Confirmation Popup

Цей проєкт демонструє **React-додаток**, орієнтований на покращення досвіду користувачів і контроль навігації. Він включає діалогове вікно, яке попереджає користувачів під час спроби залишити сторінку з формою після внесення змін, які не було збережено.

---

## Особливості

- **Кастомні хуки**:
  - Реалізовано кастомний хук `useBeforeUnload` для перехоплення навігації та запобігання втраті незбережених змін.

- **Попап-діалог**:
  - Відображає модальне вікно для підтвердження навігації, якщо у формі є незбережені зміни.

- **Управління станом**:
  - Використовує `useState` для локального управління станом.
  - Динамічно відстежує зміни у формі та встановлює прапорець `isFormDirty`.

### Логіка

1. **Відстеження змін у формі**:
   - Поля форми контролюються через обробники подій `onChange`.
   - Прапорець стану `isFormDirty` встановлюється у значення `true`, якщо виявлено будь-які зміни.

2. **Блокування навігації**:
   - Хук `useBeforeUnload` слухає спроби навігації.
   - Якщо `isFormDirty` має значення `true`, він блокує навігацію і показує попап підтвердження.

3. **Підтвердження через попап**:
   - Якщо користувач намагається залишити сторінку, попап пропонує два варіанти:
     - **Залишитися на сторінці**: Закриває попап і зберігає поточний вигляд.
     - **Покинути сторінку**: Продовжує навігацію і скидає прапорець `isFormDirty`.


