import React from "react";
import { Link } from "react-router-dom";
import "./MatSmallcard.scss";

function MatchSmallCard({ match, teamName }) {
  if (!match) return null;

  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchWon = teamName === match.winner;

  return (
    <div
      className={isMatchWon ? "match-small-card  won" : "match-small-card lost"}
    >
      <span className="vs">Vs</span>
      <h3>
        <Link to={otherTeamRoute} className="link">
          {otherTeam}
        </Link>
      </h3>
      <p className="result">
        {match.winner} won by {match.resultMargin} {match.result}
      </p>
    </div>
  );
}

export default MatchSmallCard;
