import { SET_SEARCH_CATEGORY_RESTAURANTS } from "../types";

export const setSearchCategoryRestaurantsAction = ({ search }) => ({
    type: SET_SEARCH_CATEGORY_RESTAURANTS,
    search: search,
});
