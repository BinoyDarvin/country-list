import { useDispatch, useSelector } from "react-redux";
import { CountryCard } from "../country-card";
import "./country-list.scss";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { fetchCountryList } from "../../services/country-list/country-list.service";

export const CountryList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const countryList = useSelector((state: RootState) => state.countryList);

  useEffect(() => {
    dispatch(fetchCountryList());
  }, []);

  return (
    <div className="country-list-container">
      {countryList.data.map((country) => (
        <CountryCard
          key={country.name}
          image={country.flag}
          country={country.name}
          region={country.region}
        />
      ))}
    </div>
  );
};
