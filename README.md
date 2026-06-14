# Memory Game

Классическая игра «Мемори» с животными: переворачивай карточки, запоминай расположение и находи все пары. Игра идёт на время — чем быстрее соберёшь все совпадения, тем лучше результат.

## Играть онлайн

**[https://memoryanimals.onrender.com/](https://memoryanimals.onrender.com/)**

## Превью

<p align="center">
  <img src="public/logo512.png" alt="Memory Game" width="200" />
</p>

<p align="center">
  <img src="public/logo192.png" alt="Memory Game icon" width="96" />
</p>

## Как играть

1. Нажми на любую карточку, чтобы начать игру и запустить таймер.
2. Первая открытая карточка остаётся видимой 5 секунд — успей запомнить её.
3. Открой вторую карточку: если животные совпали, пара остаётся открытой.
4. Если не совпали — обе карточки переворачиваются обратно через секунду.
5. Собери все 18 пар, чтобы завершить игру.

На поле 36 карточек с 18 видами животных: кролики, дельфины, слоны, медведи, тигры и другие.

## Стек

- [React](https://reactjs.org/) 17
- [styled-components](https://styled-components.com/) 5
- Create React App

## Локальный запуск

```bash
yarn install
yarn start
```

Приложение откроется на [http://localhost:3000](http://localhost:3000).

### Другие команды

| Команда       | Описание              |
| ------------- | --------------------- |
| `yarn build`  | Production-сборка     |
| `yarn test`   | Запуск тестов         |
| `yarn eject`  | Eject из CRA (необратимо) |

## Структура проекта

```
src/
├── components/   # UI-компоненты (Card, Timer, Button, Title)
├── containers/   # Game и Board — логика игры
├── consts/       # Константы и список карточек
├── functs/       # Вспомогательные функции
├── hooks/        # Хуки (таймер)
├── img/          # SVG-спрайт с иконками животных
└── styles/       # Стили styled-components
```
