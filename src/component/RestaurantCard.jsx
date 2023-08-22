// import RestaurantList from "./RestaurantList";
import "./restaurantCard.css";

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  areaName
}) => {
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2>
        {name}
      </h2>
      <h2>
        {cuisines.join(" , ")}
      </h2>
      <h3>
        {avgRating} star
      </h3>
      <h3>
        {areaName}
      </h3>
    </div>
  );
};
export default RestaurantCard;
