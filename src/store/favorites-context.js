import { createContext, useState } from "react";

//The context will ultimately create a React component
//And per convention, all react components should start
//with capital names

//Initial context (context declaration)
const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
}); //Above are the initial context values

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addfavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((meetup) => meetup.id != meetupId);
      //Executes the function for each item, removes the item where the condition is true
    });
  }

  function itemIsFavoriteHandler(meetupID) {
    //.some() allows us to find, if at least one item matches our condition
    // some() <==> at least one
    return userFavorites.some((meetup) => meetup.id === meetupID); //built-in vanilla JS
  }

  //Updated Context values (context initialization)
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addfavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return <FavoritesContext.Provider value={context}>{props.children}</FavoritesContext.Provider>;
}

export default FavoritesContext;
