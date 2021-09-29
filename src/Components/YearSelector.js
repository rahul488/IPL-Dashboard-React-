import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

function YearSelector({ teamName, year }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  let years = [];

  for (let yr = 2008; yr <= 2020; yr++) {
    years.push(yr);
  }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret style={{ width: "80px" }}>
        Year
      </DropdownToggle>
      <DropdownMenu>
        {years.map((yr, index) => (
          <DropdownItem key={index}>
            <Link
              className="select_link"
              to={`/teams/${teamName}/matches/${yr}`}
            >
              {yr}
            </Link>
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default YearSelector;
