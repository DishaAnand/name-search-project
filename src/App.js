import React, { useState } from "react";
import Select from "react-select";
import { data } from './data';
import "./styles.css";

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e);
    setInputVal(e ? e.label : "");
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
