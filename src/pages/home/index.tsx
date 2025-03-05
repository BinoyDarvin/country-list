import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { useEffect } from "react";
import { fetchCountryList } from "../../services/country-list/country-list.service";
import { ApiStatus } from "../../types/types";

export const Home = () => {
    const dispatch = useDispatch<AppDispatch>();
    const countryList = useSelector((state: RootState) => state.countryList);

    useEffect(() => {
        dispatch(fetchCountryList());
    }, []);

    return (
        <div>
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