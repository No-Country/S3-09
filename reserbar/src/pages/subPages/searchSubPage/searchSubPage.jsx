import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardCategoryRestaurant from "../../../components/cardCategoryRestaurant/cardCategoryRestaurant";
import SerchRestaurantsInput from "../../../components/serchRestaurantsInput/serchRestaurantsInput";
import { getAllRestaurantsAction } from "../../../redux/actions/getAllRestaurantsAction";

const SearchSubPage = () => {
    const dispatch = useDispatch();

    const restaurants = useSelector((store) => store.getAllRestaurantsReducer); // Get all restaurants.
    const searchFilter = useSelector(
        (store) => store.setSearcRestaurantsReducer
    ); // Capute input search restaurants.

    useEffect(() => {
        dispatch(getAllRestaurantsAction());
    }, [dispatch]);

    return (
        <section className="explorerContent">
            <h1>Buenos Aires, Argentina</h1>
            <div className="explorerContent__search">
                <SerchRestaurantsInput />
            </div>
            <h3>Restaurantes</h3>
            <div className="explorerContent__restaurants">
                {restaurants
                    .filter((restaurant) => {
                        if (
                            restaurant.name
                                .toLowerCase()
                                .startsWith(searchFilter.toLowerCase()) ||
                            restaurant.name
                                .toLowerCase()
                                .endsWith(searchFilter.toLowerCase()) ||
                            restaurant.name
                                .toLowerCase()
                                .includes(searchFilter.toLowerCase())
                        ) {
                            return true;
                        } else {
                            return false;
                        }
                    })
                    .map((restaurant) => {
                        return (
                            <CardCategoryRestaurant
                                key={restaurant.id}
                                onClick={() => console.log(restaurant.id)}
                                title={restaurant.name}
                                srcImage={restaurant.img}
                            />
                        );
                    })}
            </div>
        </section>
    );
};

export default SearchSubPage;
