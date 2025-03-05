import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { ChangeEvent, useEffect, useState } from "react";
import { fetchCountryList } from "../../services/country-list/country-list.service";
import { ApiStatus } from "../../types/types";

export const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [selectedOption, setSelectedOption] = useState("");

    const countryList = useSelector((state: RootState) => {
        if(selectedOption !== "") {
            const data = state.countryList.data.filter((d) => d.region === selectedOption);
            return { ...state.countryList, data };
        }
        return state.countryList;
    });

    useEffect(() => {
        dispatch(fetchCountryList());
    }, []);

    const handleTabChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
    }

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="all">All</label>
                    <input type="radio" name="region" id="all" value="" onChange={handleTabChange}/>
                </div>
                <div>
                    <label htmlFor="asia">Asia</label>
                    <input type="radio" name="region" id="asia" value="Asia" onChange={handleTabChange}/>
                </div>
                <div>
                    <label htmlFor="europe">Europe</label>
                    <input type="radio" name="region" id="europe" value="Europe" onChange={handleTabChange}/>
                </div>
            </form>
        {
            countryList.status === ApiStatus.Pending && <h1>Loading....</h1>
        }
        {
            countryList.status === ApiStatus.Fulfilled && countryList.data.map(data => <h1>{data.name}</h1>)
        }
        {
            countryList.status === ApiStatus.Rejected && <h1>Error</h1>
        }
        </div>
    );
}