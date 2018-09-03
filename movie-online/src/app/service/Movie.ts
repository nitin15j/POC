export interface Movie {
  title: string;
  director_name: string;
  actor_1_name: string;
  actor_2_name: string;
  genres: Array<string>;
  language: string;
  country: string;
  content_rating: string;
  budget: number;
  title_year: number;
  plot_keywords: Array<string>;
  movie_imdb_link: string;
}
