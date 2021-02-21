import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 8
  }
}));

export default function SingleScrapePage(props) {
  return (
      <div>
        <div>Single Scrape Page</div>
        <p>Give a link and we will add the job</p>
      </div>
  );
}