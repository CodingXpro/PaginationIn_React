import React from "react";
import Pagination from "@mui/material/Pagination";
import { usePagination } from "./../hooks/Pagination";

const Pages = ({ data }) => {
  // console.log(data.length);
  const [
    totalPage,
    startPageIndex,
    endPageIndex,
    currentPageIndex, //eslint-disable-line
    displayPage,
  ] = usePagination(6, data.length);
  return (
    <div style={{ marginLeft: "40px" }}>
      <h1>User Posts</h1>
      {(() => {
        const displayPosts = [];
        for (let i = startPageIndex; i < endPageIndex; i++) {
          displayPosts.push(
            <div key={data[i].id}>
              <h3>
                <span>{i + 1}</span> {data[i].title}
              </h3>
              <p>{data[i].body}</p>
            </div>
          );
        }
        return displayPosts;
      })()}
      <Pagination
        color="primary"
        count={totalPage}
        onChange={(event, value) => displayPage(value)}
      />
    </div>
  );
};

export default Pages;
