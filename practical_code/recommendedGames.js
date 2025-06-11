
const userFavoriteGames = ['Action', 'Adventure'];
const games = [
  { name: 'The Legend of Zelda', genres: ['Action', 'Adventure'] },
  { name: 'Mario Kart', genres: ['Racing'] },
  { name: 'Super Smash Bros', genres: ['Fighting'] },
  { name: 'Assassin\'s Creed', genres: ['Action', 'Adventure'] }
];

const recommendedGames = recommendGames(games, userFavoriteGames);
console.log(recommendedGames);

function recommendGames(games, userGenres) {
  // todo - add error handling and case sensitivity

  // using a set so we don't track duplicates
  const recommendedGames = new Set();
  userGenres.forEach((genre) => {
    games.filter(g => g.genres.includes(genre)).forEach(game => recommendedGames.add(game));
  });
  return Array.from(recommendedGames);
}