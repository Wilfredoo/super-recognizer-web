import React, { useState } from "react";
import * as firebase from "firebase";

export default function Footer() {
  const store = firebase.firestore();
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [feedback, setFeedback] = useState(null);


  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (name === "" || feedback === "") return setError("empty");
    store.collection("feedback").add({
      name,
      email,
      feedback
    });
  };

  return (
    <>
      <h3>Leave your feedback here</h3>
      <p>Idea for a new game? Something you didn't like? Found an error?</p>
      <p> This is the place to say it.</p>
      <p>Your feedback will be read directly by me (Wilfredo).</p>
      <form  onSubmit={handleSubmit}>
        <input placeholder="Name" type="text" name="name" value={name} onChange={handleChange} />
        <input placeholder="Email" type="email" name="email" value={email} onChange={handleChange} />
        <textarea placeholder="Speak your mind here :)" type="text"           rows={5}
 name="feedback" value={feedback} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
