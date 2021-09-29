import React from "react";
import { Link } from "react-router-dom";
import "./MatchDetail.scss";

function MatchDetailCard({ match, teamName }) {
  if (!match) return null;
  const otherTeam = match.team1 === teamName ? match.team2 : match.team1;
  const otherTeamRoute = `/teams/${otherTeam}`;
  const isMatchWon = teamName === match.winner;
  return (
    <div className={isMatchWon ? "match-detail won" : "match-detail lost"}>
      <div className="row">
        <div className="col-lg-4 col-sm-12 col-md-6 offset-lg-2">
          <div className="">
            <span className="vs">Vs</span>
            <h3>
              <Link to={otherTeamRoute} className="link">
                {otherTeam}
              </Link>
            </h3>
            <h5 className="match_date">Date-{match.date}</h5>
            <h5 className="match_venue">At {match.venue}</h5>
            <h4 className="match_result">
              {match.winner} won by {match.resultMargin} {match.result}
            </h4>
          </div>
        </div>
        <div className="col-lg-4 col-sm-12 col-md-6 offset-lg-2">
          <div className="info">
            <span>First Innings</span>
            <h3 className="team1">{match.team1}</h3>
            <span>Second Innings</span>
            <h3 className="team2">{match.team2}</h3>
            <span>Umpires</span>
            <h5 className="umpire">
              {match.umpire1} And {match.umpire2}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MatchDetailCard;
