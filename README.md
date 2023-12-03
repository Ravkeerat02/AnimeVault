# AnimeVault

This project is a simple Next.js application that utilizes Tailwind CSS and Framer Motion. The Shikimori API (https://shikimori.one/api/doc) is used to generate data for the respective titles. The application features a page transition animation using Framer Motion when navigating to the next page.

## Technologies Used

- **Next.js:** A React framework for building web applications.
- **Tailwind CSS:** A utility-first CSS framework for quickly styling applications.
- **Framer Motion:** A React library for creating smooth animations.

## Getting Started

1: Clone the Repository:
   ```bash
   git clone <https://github.com/Ravkeerat02/AnimeVault>
   cd anime_vault-main
   ```

2: Install Dependencies:
```bash
   npm install
```

3: Run the Application:
```bash
   npm run dev
   ```
# Components

## AnimeCard

The `AnimeCard` component is responsible for displaying information about an anime, including its image, name, kind, episodes, and score. It incorporates Framer Motion for a smooth hover animation.

## API Integration

Data for the respective titles is fetched from the Shikimori API (https://shikimori.one/api/doc). The `fetchData` utility function in `app/action` handles the API requests.

## Page Transition Animation

Framer Motion is utilized to create a seamless page transition animation when navigating to the next page. The `AnimeCard` component showcases a simple hover animation.




