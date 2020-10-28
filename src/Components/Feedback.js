import React, { useState } from "react";
import * as firebase from "firebase";

export default function Footer() {
  const store = firebase.firestore();
  const [name, setName] = useState(null);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e) => {
    alert("hello");
    // if (name === "" || feedback === "") return setError("empty");
    await store.collection("feedback").add({
      name: name,
      time: Date.now(),
    });
    e.preventDefault();

  };

  return (
    <>
      <h3>Leave your feedback here</h3>
      <p>
        Idea for a new game? Something you didn't like? Found an error? This is
        the place to say it.
      </p>
      <p>Your feedback will be read directly by me (Wilfredo).</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={name} onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
