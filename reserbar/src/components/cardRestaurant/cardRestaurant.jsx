import favoriteSvg from "@icons/favorite.svg";

const CardRestaurant = () => {
    return (
        <div className="cardRestaurant">
            <div className="cardRestaurant__img">
                <img
                    src="https://www.seriouseats.com/thmb/-udP101JmSMl7snPfmT45bzPFO8=/880x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__03__20150310-sichuan-wonton-chili-oil-recipe-new-1-267bae64def94fa9961b98aaa6bf302d.jpg"
                    alt=""
                />
            </div>
            <div className="cardRestaurant__text">
                <ul className="cardRestaurant__list">
                    <li className="cardRestaurant__body">Famiglia Riarte</li>
                    <li className="cardRestaurant__body">Calle falsa 123</li>
                    <li className="cardRestaurant__body">10:00hs - 19:30hs</li>
                </ul>
                <div className="cardRestaurant__img-icon">
                    <img src={favoriteSvg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CardRestaurant;
