import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { base_url } from "../Constants/base_url";

function TeamSelector({ teamName, year }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [teams, setTeams] = useState([{ name: "" }]);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  useEffect(() => {
    const getTeam = async () => {
      const response = await fetch(`${base_url}/getAllTeams`);
      const data = await response.json();
      setTeams(data);
    };

    getTeam();
  }, []);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret style={{ width: "80px" }}>
        Teams
      </DropdownToggle>
      <DropdownMenu>
        {teams.map((team, index) => (
          <DropdownItem key={index}>
            <Link
              className="select_link"
              to={`/teams/${team.name}/matches/${year}`}
            >
              {team.name}
            </Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default TeamSelector;
