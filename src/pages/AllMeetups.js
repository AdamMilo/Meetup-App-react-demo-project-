import { useState } from "react";
import { useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description: "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetmeupstreet 10, 56789 Meetup City",
//     description: "This is a Second, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

function AllMeetupsPage() {
  //UseState variables
  const [isLoading, setIsLoading] = useState(true); //The component starts in a 'load' state (true)
  const [loadedMeetups, setLoadedMeetups] = useState([]); //This is how we define our state variables as arrays

  //UseEffect react hook to define when fetching data should happen
  useEffect(() => {
    setIsLoading(true);
    //Fetching data
    fetch("https://meetup-react-project-default-rtdb.firebaseio.com/meetups.json", {})
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.push(meetup);
        }
        setIsLoading(false); //When the data is fetched we set the 'loadState' to false (no longer loading)
        setLoadedMeetups(meetups); //We update the loaded meetups state-array, with our fetched and converted data
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  } else {
    //Note that we don't need an else branch since return automatically leaves the component code
    //So just having one if statement works fine, as well
    return (
      <section>
        <h1>All Meetups</h1>

        <MeetupList meetups={loadedMeetups} />
      </section>
    );
  }
}

export default AllMeetupsPage;
