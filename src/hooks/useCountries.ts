import { useQuery, UseQueryResult } from "@tanstack/react-query";
import axios from "axios";

export interface Country {
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  capital: string;
  flags: {
    png: string;
  };
  cca2?: string;
  borders?: string[];
  languages?: { [key: string]: string };
  currencies?: { [key: string]: { name: string; symbol: string } };
  topLevelDomain?: string[];
  subregion?: string;
}
const useCountries = () => {
  const fetchCountries = () => {
    return axios
      .get<Country[]>("https://restcountries.com/v3.1/all")
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  return useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
  });
};

export default useCountries;
