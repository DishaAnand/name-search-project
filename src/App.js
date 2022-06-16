import React, { useState } from "react";
import Select from "react-select";
import "./styles.css";

function App() {
  const data = [
    {
      value: 1,
      label: "Disha"
    },
    {
      value: 2,
      label: "Anand"
    },
    {
      value: 3,
      label: "Credo"
    },
    {
      value: 4,
      label: "Health"
    },
    {
      value: 5,
      label: "Awesome Interviewer"
    },
    {
      value: 6,
      label: "Kalpana Ji"
    },
    {
      value: 7,
      label: "Disha Bajaj"
    }
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e);
    setInputVal(e ? e.label : "");
    console.log(e);
  };
  return (
    <div className="App">
      <h1> Name Search 🔎</h1>
      <Select
        styles={{ width: "200px" }}
        placeholder="Select Option"
        value={selectedOption}
        options={data}
        onChange={handleChange}
        isClearable={true}
      />
      {inputVal && <input type="text" value={inputVal} />}
    </div>
  );
}
export default App;
