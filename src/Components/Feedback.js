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
  const [success, setSuccess] = useState(false);
  const [empty, setEmpty] = useState(false);

  const { value: name, bind: bindName, reset: resetName } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const {
    value: feedback,
    bind: bindFeedback,
    reset: resetFeedback,
  } = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || feedback === "")
      return setEmpty(true), setSuccess(false);
    setEmpty(false);
    store
      .collection("feedback")
      .add({
        name,
        email,
        feedback,
      })
      .then(() => {
        resetName();
        resetEmail();
        resetFeedback();

        setSuccess(true);
      });
  };

  return (
    <div className="componentContainer">
      <h2>Leave your feedback here</h2>
      <p>Idea for a new game? Something you didn't like? Found an error?</p>
      <p> This is the place to say it.</p>
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
        {empty && <p className="error">Empty feedback? 🤔</p>}
        {success && (
          <p>Your feedback has been sent ⚡ Wilfredo will read it soon.</p>
        )}
      </form>
    </div>
  );
}
