import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import FilterCountry from "../../Components/fetchDataUsingApi/FilterCountry";

export const FetchDataUsingApi = () => {
  const [info, setInfo] = useState([]);
  const [filter, setFilter] = useState();
  const [search, setSearch] = useState();
  const apiCall = async () => {
    const result = await axios("https://restcountries.eu/rest/v2/all");
    setInfo(result.data);
    console.log(result);
  };
  useEffect(() => {
    apiCall();
  }, []);

  useEffect(() => {
    setFilter(info.filter((country) => country.name.includes(search)));
  }, [search, info]);

  return (
    <div>
      <input
        type="text"
        placeholder="search country"
        onChange={(e) => setSearch(e.target.value)}
      />
      {filter && filter.map((item, id) => <FilterCountry key={id} {...item} />)}
    </div>
  );
};
