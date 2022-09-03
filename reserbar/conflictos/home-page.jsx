import CardRestaurant from "@components/cardRestaurant/cardRestaurant";
import "./_home.scss";

const Homepage = () => {
    return (
        <div className="home">
            <h1 className="home__title">Nueva reserva</h1>
            <h2 className="home__subtitle">Elegí el restaurante</h2>
            <CardRestaurant />
            <CardRestaurant />
            <CardRestaurant />
        </div>
    );
};

export default Homepage;
