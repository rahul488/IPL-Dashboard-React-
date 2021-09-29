import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { base_url } from "../Constants/base_url";
import "./Homepage.scss";

function HomePage() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const getTeam = async () => {
      const response = await fetch(`${base_url}/getAllTeams`);

      const data = await response.json();

      setTeams(data);
    };

    getTeam();
  }, []);

  return (
    <div className="home_page">
      <h3 style={{ textAlign: "center", color: "white" }}>Select Team</h3>
      <div className="team_details row">
        {teams.slice(0, 6).map((team, index) => (
          <div key={index} className="team_card col-lg-4 offset-1">
            <Link to={`/teams/${team.name}`} className="team_name">
              {team.name}
            </Link>
          </div>
        ))}
        {teams.slice(6).map((team, index) => (
          <div key={index} className="team_card col-lg-4 offset-1">
            <Link to={`/teams/${team.name}`} className="team_name">
              {team.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
