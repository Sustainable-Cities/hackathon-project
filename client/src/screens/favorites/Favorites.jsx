import React, { useState, useEffect } from "react";
import { __GetFavs } from "../../services/FavServices";

export default function Favorites({ loggedIn }) {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    GetFavs();
  }, []);

  // API CALL TO GET FAVS USING USER ID
  const GetFavs = async () => {
    const data = __GetFavs(loggedIn.id);
    setFavs(data);
  };

  return <div>Favorites Screen</div>;
}
