import React from "react";
import {Link} from "react-router-dom";

function StatusLink(props) {
  let to = "/" + props.filter;
  let name = props.filter[0].toUpperCase() + props.filter.substring(1);
  return (
      <Link
          className={`btn-link ${props.filter === props.selectedFilter ? "selected" : ""}`}
          to={to}>{name}</Link>
  );
}

export default StatusLink;