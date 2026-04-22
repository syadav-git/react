import React from "react";
import Student from "./component/Student";
import "./App.css";

function App() {
  return (
    <div>
      <h1>Student Details</h1>

      <div className="container">
        <Student name="Saurabh" course="B.Tech" marks="85" />
        <Student name="Rahul" course="BCA" marks="78" />
        <Student name="Anjali" course="MCA" marks="92" />
      </div>

    </div>
  );
}

export default App;