import { Link } from "react-router-dom";
import Card from "../components/Card";
import Filter from "../components/Filter";
import { useCountryStore } from "../store";

const HomePage = () => {
  const filteredCountries = useCountryStore((state) => state.filteredCountries);

  return (
    <section className="dark:bg-primary-600">
      <Filter />
      <div className="container-width grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-16">
        {filteredCountries.length == 0 ? (
          <p className="mt-[10%] text-sm dark:text-white">no match :(</p>
        ) : (
          filteredCountries?.map((c) => (
            <Link to={`countries/${c.cca2}`} key={c.cca2}>
              <Card
                name={c.name}
                key={c.cca2}
                region={c.region}
                capital={c.capital}
                population={c.population}
                flags={c.flags}
              />
            </Link>
          ))
        )}
      </div>
    </section>
  );
};

export default HomePage;
