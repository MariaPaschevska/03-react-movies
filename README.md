# 🎬 React Movies

A movie search app built with React and TypeScript. It searches [The Movie Database (TMDB)](https://www.themoviedb.org/), shows the results as a poster grid, and opens a modal with each movie's details.

**Live demo:** https://YOUR-PROJECT.vercel.app

## Features

- Search movies by title through the TMDB API
- Toast notifications for an empty search and for no results
- Loading and error states shown in place of the grid
- Movie details modal with backdrop image, overview, release date and rating
- The modal closes with the × button, the ESC key or a click on the backdrop, and page scrolling is locked while it is open

## Tech stack

- React 19 and TypeScript
- Vite
- axios for HTTP requests
- react-hot-toast for notifications
- CSS Modules and modern-normalize
- ESLint and Prettier

## Project structure

```
src/
├── components/
│   ├── App/
│   ├── SearchBar/
│   ├── MovieGrid/
│   ├── MovieModal/
│   ├── Loader/
│   └── ErrorMessage/
├── services/
│   └── movieService.ts   # TMDB API requests
└── types/
    └── movie.ts          # shared Movie interface
```

## Getting started

1. Clone the repository and install dependencies:
   ```bash
   git clone https://github.com/MariaPaschevska/03-react-movies.git
   cd 03-react-movies
   npm install
   ```
2. Create a `.env` file in the project root with your TMDB API Read Access Token (from your TMDB account settings, under API):
   ```
   VITE_TMDB_TOKEN=your_token_here
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```

## Scripts

| Command           | Description                         |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the dev server                |
| `npm run build`   | Type-check and build for production |
| `npm run preview` | Preview the production build        |
| `npm run lint`    | Run ESLint                          |
| `npm run format`  | Format the code with Prettier       |

---

This product uses the TMDB API but is not endorsed or certified by TMDB.
