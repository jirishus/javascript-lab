// Get a list of latest releases (last 30 days)
function getRecentlyReleasedGames(games, today) {
  const todayDate = new Date(today);
  return games.filter((game) => {
    const gameDate = new Date(game.releasedDate);
    const diffMS = todayDate.getTime() - gameDate.getTime();
    const diffDays = diffMS / (1000 * 60 * 60 * 24);

    return diffDays >= 0 && diffDays <= 30;
  });
}