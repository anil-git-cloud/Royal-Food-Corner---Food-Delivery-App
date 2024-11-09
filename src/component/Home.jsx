import { useState } from "react";
import RestaurantCard from "./RestaurantCard"
import RestaurantList from "./RestaurantList";
import "./home.css";

function filterData(search, fliterRestaurantList) {
  const fliterData = fliterRestaurantList.filter((restaurants) => restaurants.info.name.includes(search)
  );
  return fliterData;
}

const Home = () => {
  const [fliterRestaurantList, setFliterRestaurantList] = useState(RestaurantList)
  const [search, setSearch] = useState('')
    

//     useEffect(() => { 
//         // Api Call
//         getRestaurants();
//     }, [])

//     async function getRestaurants() {
//         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1364016&lng=72.8296252&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//         const json = await data.json();
//         console.log(json);
//         setFliterRestaurantList(json?.data?.cards[5]?.card?.gridElements?.infoWithStyle
// ?.restaurants)
//     }
  return (
    <>
      <div className="restaurant-list">
        <div className="int-btn srch h1">
          <input type="text" className="input" placeholder="Search by Restaurant" value={search} onChange={(e) => {
            setSearch(e.target.value)
          }}></input>
          <button type="submit" className="search-btn" onClick={() => {
            const data = filterData(search, fliterRestaurantList);
            setFliterRestaurantList(data);
          }}>
            Search
          </button>
        </div>

        <div className="Rest-card">
          {fliterRestaurantList.map((restaurant) => {
            return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
        })}
       </div>
      </div>
    </>
  );
};

export default Home;
