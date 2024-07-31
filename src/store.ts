import create from "zustand";
import { Country } from "./hooks/useCountries";

interface CountryStore {
  filteredCountries: Country[];
  setFilteredCountries: (countries: Country[]) => void;
}

export const useCountryStore = create<CountryStore>((set) => ({
  filteredCountries: [],
  setFilteredCountries: (countries) => set({ filteredCountries: countries }),
}));
