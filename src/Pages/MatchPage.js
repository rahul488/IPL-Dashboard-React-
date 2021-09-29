import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import MatchDetailCard from "../Components/MatchDetailCard";
import TeamSelector from "../Components/TeamSelector";
import YearSelector from "../Components/YearSelector";
import { base_url } from "../Constants/base_url";
import "./MatchPage.scss";
import NotPlayed from "../Components/NotPlayed";

function MatchPage() {
  const [matches, setMatches] = useState([]);

  const { teamName, year } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");

    const headers = {
      Authorization: "Bearer " + token,
    };
    axios
      .get(`${base_url}/teams/${teamName}/matches?year=${year}`, {
        headers: headers,
        responseType: JSON,
      })
      .then(
        (response) => {
          setMatches(response.data);
        },
        (error) => {
          toast.error("Error occured", { position: toast.POSITION.TOP_CENTER });
        }
      );
  }, [teamName, year]);

  return (
    <div className="match_page row">
      <div className="col-md-2 col-lg-2 col-sm-2 col-xl-2">
        <TeamSelector teamName={teamName} year={year} />
      </div>
      <div className="col-md-2 col-lg-2 col-sm-2 col-xl-2">
        <YearSelector teamName={teamName} year={year} />
      </div>
      <div className="col-md-8 col-l-8 col-sm-8  col-xl-8 ">
        <h3 style={{ color: "wheat" }}>
          {teamName} matches in year {year}
        </h3>
        {matches.length < 1 ? (
          <NotPlayed />
        ) : (
          matches.map((match, index) => (
            <MatchDetailCard
              teamName={teamName}
              className="details"
              match={match}
              key={index}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default MatchPage;
