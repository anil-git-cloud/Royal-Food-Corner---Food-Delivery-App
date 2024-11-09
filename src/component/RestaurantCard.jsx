// import RestaurantList from "./RestaurantList";
import "./restaurantCard.css";

const RestaurantCard = ({
  // eslint-disable-next-line react/prop-types
  name,
  // eslint-disable-next-line react/prop-types
  // cuisines,
  // eslint-disable-next-line react/prop-types
  avgRating,
  // eslint-disable-next-line react/prop-types
  cloudinaryImageId,
  // eslint-disable-next-line react/prop-types
  areaName
}) => {
  return (
    <>
        <div className="card-container">
          <div className="card">
            <div className="img-div">
                <img className="card-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    cloudinaryImageId} alt="cloudimage"/>
          </div>
          <div className="card-down">
            <h2>{name}</h2>
            {/* <h3>{cuisines}</h3> */}
            <h4>{avgRating} star</h4>
            <p>{areaName}</p>
          </div>
          </div>
        </div>
    </>
  );
};
export default RestaurantCard;
