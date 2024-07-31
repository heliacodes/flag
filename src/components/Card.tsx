// import { Country } from "../hooks/useCountries"

// const Card = ({flags, region, population, capital, name} : Country) => {
//   return (
//     <article className="mx-auto w-full">
//       <div className="">
//         <img
//           src={flags.png}
//           alt={`${name.common}`}
//           className="h-full w-full"
//         />
//       </div>
//       <div className="dark:bg-primary-500 dark:text-white">
//         <p>{name.common}</p>
//         <div>
//           <p>Population : {population}</p>
//           <p>Region : {region}</p>
//           <p>Capital : {capital}</p>
//         </div>
//       </div>
//     </article>
//   );
// }

import { Country } from "../hooks/useCountries";

const Card = ({ flags, region, population, capital, name }: Country) => {
  return (
    <div className="w-full mx-auto flex items-center justify-center">
      <article className="transition ease-in-out cursor-pointer rounded-lg w-[250px] h-[320px] dark:bg-primary-500 shadow-md hover:shadow-lg m-3 hover:scale-105">
        <div className="w-[250px] h-[150px] rounded-t-lg bg-gray-100 flex justify-center items-center dark:bg-primary-700">
          <img
            src={flags.png}
            alt={`${name.common} flag`}
            className="w-[120px] "
          />
        </div>
        <div className="p-6  dark:bg-primary-500 dark:text-white">
          <p className="font-bold text-md mb-3">{name.common}</p>
          <div className="text-sm">
            <p className="font-light">
              <span className="font-semibold">Population:</span>{" "}
              {population.toLocaleString()}
            </p>
            <p className="font-light">
              <span className="font-semibold">Region:</span> {region}
            </p>
            <p className="font-light">
              <span className="font-semibold">Capital:</span> {capital}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Card;
