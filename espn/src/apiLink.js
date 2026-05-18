const links = {
  soccer: "usa.1",
  baseball: "mlb",
  football: "nfl",
};

export function getSportLink(sport) {
  if (!sport) return "";

  return `https://site.api.espn.com/apis/site/v2/sports/${sport}/${links[sport]}/scoreboard`;
}

export function getTeamLink(sport, id) {
  if (!sport || !id) return "";

  return `https://site.api.espn.com/apis/site/v2/sports/${sport}/${links[sport]}/teams/${id}`;
}

export function getRosterLink(sport, id) {
  if (!sport || !id) return "";

  return `https://site.api.espn.com/apis/site/v2/sports/${sport}/${links[sport]}/teams/${id}/roster`;
}
