import React from "react";
import StatusLink from "./StatusLink";
import { Breadcrumbs } from "@material-ui/core";

let getLinks = () => {
  let statuses = [
    "new",
    "saved",
    "applied",
    "interviewing",
    "excluded",
    "rejected",
    "ignored",
    "all",
  ];
  return statuses.map((status) => {
    return <StatusLink filter={status}/>;
  });
};

export default function NavFilters(props) {
  return (
    <Breadcrumbs color="white">
      {getLinks()}
    </Breadcrumbs>
  );
}
