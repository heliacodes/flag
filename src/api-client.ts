import axios from "axios";
export interface Country {
  name: {
    common: string;
  };
  population: number;
  region: string;
  flags: {
    png: string;
  };
}
const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

export const fetchAllCountries = () => api.get<Country>("/all");
