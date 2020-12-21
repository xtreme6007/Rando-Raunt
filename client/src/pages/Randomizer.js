import React, {useState, useEffect } from "react";
import API from "../utils/API";


function Randomize(){

    const [restaurants, setRestaurants] = useState([])



    useEffect(() => {
         loadRestaurants()
      }, [])

      function loadRestaurants() {
        API.getRestaurants()
          .then(res => 
            setRestaurants(res.data)
          )
          .catch(err => console.log(err));
      };

return (
    <div>




    </div>


)

}


export default Randomize