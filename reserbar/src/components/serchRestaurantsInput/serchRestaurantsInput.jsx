import React, { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CgSearch } from 'react-icons/cg'
import { setSearchCategoryRestaurantsAction } from '../../redux/actions/setSearchRestaurantsActions'

const SerchRestaurantsInput = () => {

    const dispatch = useDispatch()

    // String search
    const searchText = useSelector(store => store.setSearcRestaurantsReducer)

    // handle search input
    const handleSearchCategorys = useCallback(evento => {
        dispatch(setSearchCategoryRestaurantsAction({
            search: evento.target.value
        }))

    },[dispatch, setSearchCategoryRestaurantsAction])

    return (
        <div className='searchRestaurants'>
            <CgSearch />
            <input 
                type="text"
                placeholder='Buscar restaurantes ...'
                onChange={handleSearchCategorys}
                value={searchText}
            />
        </div>
    )
}

export default SerchRestaurantsInput