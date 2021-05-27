import { useContext } from "react";

import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem({ meetup }) {
  //Context Object
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(meetup.id);
  //Nested functions
  function toggleFavoritesStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(meetup.id);
    } else {
      favoritesCtx.addFavorite({
        id: meetup.id,
        title: meetup.title,
        description: meetup.description,
        image: meetup.image,
        address: meetup.address,
      });
    }
  }

  return (
    <Card>
      <li className={classes.item}>
        {/*Image container */}
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        {/*content container */}
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address>{meetup.address}</address>
          <p>{meetup.description}</p>
        </div>
        {/*Button container */}
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>{itemIsFavorite ? "Remove Favorite" : "Add favorites"}</button>
        </div>
      </li>
    </Card>
  );
}
export default MeetupItem;
