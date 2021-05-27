import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";
function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  //Helper variable that will contain a different value
  //depending on the context (total number of favorite meetups)
  //Then outputing this helper variable storing JSX
  //as our component's return output.
  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You got no favorites yet, Start adding some?</p>;
  } else {
    content = <MeetupList meetups={favoritesCtx.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
