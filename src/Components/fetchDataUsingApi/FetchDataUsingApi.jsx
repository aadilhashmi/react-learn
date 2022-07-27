import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import FilterCountry from "../../Components/fetchDataUsingApi/FilterCountry";

export const FetchDataUsingApi = () => {
  const [info, setInfo] = useState([]);

  const [countryfilter, setCountryFilter] = useState();
  const [search, setSearch] = useState();
  //for loading in case get error
  const [loading, setLoading] = useState(true);
  const { data } = info;
  const slicedArray= data.slice(0,99)

  // useEffect(() => {
  //   async function fecthCountry() {
  //     let res = await fetch("https://restcountries.eu/rest/v2/all");
  //     let data = await res.json();
  //     console.log("hiiiii", data);
  //     setInfo(data.data);
  //   }
  // });

  const apiCall = async () => {
    const result = await axios(
      "https://countriesnow.space/api/v0.1/countries/population/cities"
    );
    setInfo(result.data);
    console.log(info);
  };
  useEffect(() => {
    //   axios
    //     .get("https://restcountries.eu/rest/v2/all")
    //     .then((res) => {
    //       setInfo(res.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    apiCall();
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // useEffect(() => {
  //   const filteredArray = data.filter((country) => country);
  //   console.log(filteredArray)
  //   // setCountryFilter();
  // }, [search, info]);

  if (loading) {
    return <p>Loading countries...</p>;
  }

  console.log("heeeeeelllooo", slicedArray);
  return (
    <div>
      <input
        type="text"
        placeholder="search country"
        onChange={(e) => setSearch(e.target.value)}
      />
      {countryfilter &&
        countryfilter.map((item, id) => <FilterCountry key={id} {...item} />)}
    </div>
  );
};
