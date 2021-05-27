//Importing the {Route} component used to define our URLs
import { Route, Switch } from "react-router-dom";

//Importing persistant layout Components contained in our <Layout/>Component
import Layout from "./components/layout/Layout";

//Importing all of the page components to our App
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";

function App() {
  //localhost:3000  --> This is beginning URL on localhost
  //Project-Meetup.com/  --> Beginning URL on a published app
  //Examples of adding routing to the base URL
  //localhost:3000/Favorites   , localhost:3000/NewMeetup, etc...
  return (
    //Main navigation will appear regardless of current page*/}
    <Layout>
      {/*Page components - start */}
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetup">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
      {/*Page components - end */}
    </Layout>
  );
}

export default App;
