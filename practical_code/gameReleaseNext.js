/*
Function to return a single game that is closest to the release date
after today (or the date passed)

if no upcoming games, it returns null
*/

/**
 * 
 * @param {Array} games 
 * @param {DateString} today 
 * @returns 
 */
function getNextGameRelease(games, today) {
  const comingGames = games
    .filter(g => new Date(g.releaseDate) > new Date(today))
    .sort((a,b) => new Date(a.releaseDate) - new Date(b.releaseDate));
  
  return comingGames[0] || null;
}