import { useRef } from "react";


import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm({ onAddMeetup }) {
  const titleInputRef = useRef(); //This creates a Ref (reference) object and stores it in the constant
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault(); //preventing the default http request

    //Every default JSX element contains a 'ref' attribute
    //the 'current' property of a ref element, contains the actual referenced html element
    //the 'current.value'property holds the current entered value of the referenced input
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    //Object that stores the entered values in a single object
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    onAddMeetup(meetupData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Description</label>
          <textarea id="description" rows="5" ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
