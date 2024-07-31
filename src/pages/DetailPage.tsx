import { Link, useParams } from "react-router-dom";
import useCountries from "../hooks/useCountries";
import { FaArrowLeftLong } from "react-icons/fa6";

const DetailPage = () => {
  const param = useParams();
  const { data: countries } = useCountries();

  const country = countries?.find((c) => c.cca2 == param.code);
  console.log(country);

  return (
    <section className="h-full w-full dark:text-white">
      <div className="w-[80%] mx-auto pt-10">
        <div className="mb-3">
          <Link
            to={"/"}
            className="py-1 px-7 shadow relative text-xs dark:text-white dark:bg-primary-500 rounded-md"
          >
            Back
            <div className="absolute top-2 left-2">
              <FaArrowLeftLong />
            </div>
          </Link>
        </div>

        <div className="md:flex md:justify-around md:items-start md:gap-5">
          {/* image */}
          <div className="flex items-center justify-center mt-16">
            <img src={country?.flags.png} alt="" className="w-[210px] h-auto" />
          </div>
          <div className="md:mt-5">
            {/* title */}
            <p className="mt-10 mb-3 font-bold">{country?.name.official}</p>
            {/* info-1 */}
            <div>
              <p className="font-light">
                <span className="font-semibold text-sm">Native Name:</span>{" "}
                {country?.name.common}
              </p>
              <p className="font-light">
                <span className="font-semibold text-sm">Population:</span>{" "}
                {country?.population}
              </p>
              <p className="font-light">
                <span className="font-semibold text-sm">Region:</span>{' '}
                {country?.region}
              </p>
              <p className="font-light">
                <span className="font-semibold text-sm">Capital: </span>{" "}
                {country?.capital}
              </p>
            </div>
            {/* info-2 */}
            <div className="mt-5">
              <p className="font-light">
                <span className="font-semibold text-sm">Currrency:</span>{" "}
                {country?.currencies
                  ? Object.values(country.currencies)
                      .map((currency) => currency.name)
                      .join(", ")
                  : "N/A"}
              </p>
              <p className="font-light">
                <span className="font-semibold text-sm">Languages: </span>{" "}
                {country?.languages
                  ? Object.values(country.languages).join(", ")
                  : "N/A"}
              </p>
              <p className="font-light">
                <span className="font-semibold text-sm">Sub Region: </span>{" "}
                {country?.subregion ?? "N/A"}
              </p>
            </div>
            {/* info-3 */}
            <div className="mt-10">
              <span className="font-semibold text-sm">Border Countries:</span>
              {country?.borders?.length ? (
                <ul className="flex list-none gap-2 flex-wrap mt-2">
                  {country.borders.map((border, index) => (
                    <li
                      key={index}
                      className="font-light text-xs py-1 px-5 shadow rounded-sm dark:bg-primary-500"
                    >
                      {border}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-light">N/A</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
