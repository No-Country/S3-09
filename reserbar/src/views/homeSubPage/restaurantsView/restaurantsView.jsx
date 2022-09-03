import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardRestaurant from '../../../components/cardRestaurant/cardRestaurant';
import CardRestauranteBig from '../../../components/cardRestauranteBig/cardRestauranteBig';
import { getAllRestaurantsAction } from '../../../redux/actions/getAllRestaurantsAction';

const RestaurantsView = () => {

    const dispatch = useDispatch()

    const restaurants = useSelector((store) => store.getAllRestaurantsReducer); // Get all restaurants.
    console.log(restaurants[1])
    // Load all restaurants.
    useEffect(() => {
        dispatch(getAllRestaurantsAction());
    }, [dispatch]);

    return (
        <section className='alingRestaurants'>
            <div className="alingRestaurants__allRestaurants">
                <CardRestaurant />
            </div>
        </section>
    )
}

export default RestaurantsView