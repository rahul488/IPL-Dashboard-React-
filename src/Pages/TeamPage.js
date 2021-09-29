import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import MatchDetailCard from "../Components/MatchDetailCard";
import MatchSmallCard from "../Components/MatchSmallCard";
import "./TeamPage.scss";
import { PieChart } from "react-minimal-pie-chart";
import { Link } from "react-router-dom";
import { base_url } from "../Constants/base_url";

function TeamPage() {
  const [team, setTeam] = useState({ matches: [] });

  const { teamName } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(`${base_url}/teams/${teamName}`);
      const data = await response.json();
      console.log(data);
      setTeam(data);
    };
    fetchMatches();
  }, [teamName]);

  if (!team || !team.name) {
    return <h1>Team Not found</h1>;
  }

  const year = team.matches[0].date.substring(0, 4);

  return (
    <div className="teamPage">
      <div className="graph mt-5">
        <h5 className="win_loss">
          <span style={{ color: "green" }}>Win</span>/
          <span style={{ color: "#850410" }}>Losses</span>
        </h5>
      </div>
      <div className="graph">
        <PieChart
          className="pie-chart"
          data={[
            { title: "Wins", value: team.totalWins, color: "green" },
            {
              title: "Losses",
              value: team.totalMatch - team.totalWins,
              color: "#850410",
            },
          ]}
        />
        ;
      </div>
      <div className="team_name row">
        <div className="col-md-6 col-sm-6 col-xl-6">
          <h1 className="name">{team.name}</h1>
        </div>
      </div>
      <h4 className="latest_match">Latest Matches</h4>
      <div className="row matchDetails mt-4">
        <div className="col-md-7 offset-md-2 col-lg-8 offset-lg-2 coll-xl-8 offset-xl-2 col-sm-12">
          <MatchDetailCard teamName={team.name} match={team.matches[0]} />
        </div>
      </div>
      <div className="match_small_card row">
        {team.matches.slice(1).map((match, index) => (
          <div
            key={index}
            className="small_card col-md-3 col-lg-3 col-sm-10 col-xl-4"
          >
            <MatchSmallCard match={match} key={index} teamName={team.name} />
          </div>
        ))}
        <div className="more">
          <Link to={`/teams/${teamName}/matches/${year}`}>
            <span className="more_link">More</span>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
