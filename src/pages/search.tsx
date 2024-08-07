import React from "react";
import { MyResults } from "../components/searchResult";
import { useSearchResults } from "../hooks";

function Search(props) {
  const results = useSearchResults();
  return (
    <div className="main-container">
      {results.map((r: any) => (
        <MyResults
          key={r.id}
          img={r.thumbnail}
          title={r.title}
          price={"$" + r.price}
        />
      ))}
    </div>
  );
}

export { Search };
