// executed on the server
"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

// function declaration
// fucntion param
export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=5&order=popularity`
  );
  const data = await response.json();

  return data.map((anime: AnimeProp, index: number) => (
    <AnimeCard key={anime.id} anime={anime} index={index} />
  ));
};
