import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { ChangeEvent, useEffect, useState } from "react";
import { fetchCountryList } from "../../services/country-list/country-list.service";
import { CountryCarousel } from "../../components/country-carousel";
import { CountryList } from "../../components/country-list";
import { Navigation } from "../../components/navigation";
import { Container } from "react-bootstrap";
import { Header } from "../../components/header";

export const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectedOption, setSelectedOption] = useState("");

  const countryList = useSelector((state: RootState) => {
    if (selectedOption !== "") {
      const data = state.countryList.data.filter(
        (d) => d.region === selectedOption,
      );
      return { ...state.countryList, data };
    }
    return state.countryList;
  });

  useEffect(() => {
    dispatch(fetchCountryList());
  }, []);

  const handleTabChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div>
      <Navigation />
      <Container>
        <Header />
        <CountryCarousel />
      </Container>
    </div>
  );
};
