import React, { useState } from "react";
import * as firebase from "firebase";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(""),
    bind: {
      value,
      onChange: (event) => {
        setValue(event.target.value);
      },
    },
  };
};

export default function Feedback() {
  const store = firebase.firestore();
  const { value: name, bind: bindName, reset: resetName } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const {
    value: feedback,
    bind: bindFeedback,
    reset: resetFeedback,
  } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("values", name, email, feedback);

    // if (name === "" || feedback === "") return setError("empty");
    store.collection("feedback").add({
      name,
      email,
      feedback,
    });
    resetName();
    resetEmail();
    resetFeedback();
  };

  return (
    <div className="componentContainer">
      <h2>Leave your feedback here</h2>
      <p>Idea for a new game? Something you didn't like? Found an error?</p>
      <p> This is the place to say it.</p>
      <p>Your feedback will be read directly by me (Wilfredo).</p>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" type="text" {...bindName} />
        <input placeholder="Email" type="email" {...bindEmail} />
        <textarea
          placeholder="Speak your mind here :)"
          type="text"
          rows={5}
          {...bindFeedback}
        />
        <input type="submit" value="Submit" />
        {empty && <p>Empty feedback huh?</p>}
        {sent && (
          <p>
            Your feedback has been sent. I'll read it and will get back to you
            soon.
          </p>
        )}
      </form>
    </div>
  );
}
