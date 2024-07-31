import { IoSearch } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import useCountries, { Country } from "../hooks/useCountries";
import { useEffect, useState } from "react";
import { useCountryStore } from "../store";

const Filter = () => {
  const continents = ["Asia", "Africa", "Americas", "Europe", "Oceania"];

  const { data: countries } = useCountries();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContinent, setSelectedContinent] = useState("");
  const setFilteredCountries = useCountryStore(
    (state) => state.setFilteredCountries
  );

  useEffect(() => {
    let filtered = countries;

    console.log("Countries data:", countries);

    // Filter by search query
    if (searchQuery) {
      filtered = filtered?.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by selected continent
    if (selectedContinent) {
      filtered = filtered?.filter((country) =>
        country.region.includes(selectedContinent)
      );
    }

    setFilteredCountries(filtered || []);
  }, [searchQuery, selectedContinent, countries]);

  return (
    <section>
      <div className="container-width pt-5 sm:flex sm:items-baseline sm:justify-between sm:gap-10 md:justify-between">
        <div className="w-[98%] bg-white dark:bg-primary-500 flex gap-2 max-sm:mx-auto p-1 items-center justify-space-between rounded-md shadow sm:w-[40%]">
          <button className="ml-5 cursor-pointer dark:text-white text-gray-500">
            <IoSearch size={20} />
          </button>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for a country..."
            className="w-[90%] text-xs pl-3 sm:pl-1 py-2 focus:border-transparent focus:ring-0 focus:outline-none caret-secondary-500 dark:bg-primary-500 dark:text-white"
          />
        </div>
        <div className="w-[49%] sm:w-[15%] mt-10 ml-1 mb-5 sm:mb-8 relative">
          <select
            value={selectedContinent}
            onChange={(e) => setSelectedContinent(e.target.value)}
            className="mb-2 block appearance-none w-full bg-white dark:bg-primary-500 px-4 py-3 pr-8 rounded-md shadow leading-tight focus:outline-none focus:border-none text-xs dark:text-white cursor-pointer"
          >
            <MdOutlineKeyboardArrowDown />
            <option value="">Region</option>
            {continents.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 dark:text-white">
            <MdOutlineKeyboardArrowDown />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
