import RestaurantCard from "./RestaurantCard"
import RestaurantList from "./RestaurantList";
import "./body.css";

const Body = () => {
  return (
    <>
      <section className="restaurant-list">
       {RestaurantList.map((restaurant) => {
            return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
        })}
      </section>
    </>
  );
};

export default Body;
