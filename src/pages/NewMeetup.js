import { useHistory } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    fetch("https://meetup-react-project-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST", //Defines the http method that will be used "GET" is default
      body: JSON.stringify(meetupData), //This property requires a data input (data that we send in our request)
      headers: {
        "Content-Type": "application/json", //some API's require that you strictly define what type of data you are posting
      },
    }).then(function () {
      history.replace("/");
    });
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
