import { useRecoilState, useRecoilValue } from "recoil";
import { resultsState, queryAtom } from "../recoil";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

export function useSearchResults() {
  const params = useParams().query;
  const [query, setQuery] = useRecoilState(queryAtom);
  const results = useRecoilValue(resultsState);

  useEffect(() => {
    setQuery(params);
  }, [params]);

  return results;
}
