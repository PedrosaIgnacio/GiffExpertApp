import React, { useState } from "react";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCategories((arr) => [inputValue, ...arr]);
    setInputValue("");
  };
  return (
    <div>
      <h1>{inputValue}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </form>
    </div>
  );
};

export default AddCategory;
