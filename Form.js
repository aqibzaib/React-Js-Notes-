import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    textArea: "",
    isfrindely: true,
    employment: "",
    favColor: "",
  });
  // console.log(formData.favColor);
  function handleChange(event) {
    //First Method
    // setFormData((prevData) => {
    //   return {
    //     ...prevData,
    //     [event.target.name]: event.target.value,
    //   };
    // });
    //Seconnd Method It is use for including check boxes
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        name="firstName"
        //value property is used to make single state
        value={formData.firstName}
        onChange={handleChange}
      />
      <br /> <br />
      <input
        type="text"
        placeholder="Last Name"
        name="lastName"
        //value property is used to make single state
        value={formData.lastName}
        onChange={handleChange}
      />
      <br /> <br />
      <input
        type="email"
        placeholder="Please enter email"
        name="email"
        //value property is used to make single state
        value={formData.email}
        onChange={handleChange}
      />
      <br /> <br />
      <textarea
        placeholder="Please Enter Your Comment"
        name="textArea"
        value={formData.textArea}
        onChange={handleChange}
      />
      <br /> <br />
      <input
        type="checkbox"
        id="forFriendly"
        checked={formData.isfrindely}
        onChange={handleChange}
        name="isfrindely"
      />
      <label htmlFor="forFriendly"> Are You Friendly</label>
      <br /> <br />
      <fieldset className="fieldset">
        Current employment status
        <br />
        <input
          type="radio"
          id="unemployed"
          onChange={handleChange}
          name="employment"
          value="unemployed"
          checked={formData.employment === "unemployed"}
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        <input
          type="radio"
          id="part-time"
          name="employment"
          onChange={handleChange}
          value="part-time"
          checked={formData.employment === "part-time"}
        />
        <label htmlFor="part-time">Part-time</label>
        <br />
        <input
          type="radio"
          id="full-time"
          name="employment"
          onChange={handleChange}
          value="full-time"
          checked={formData.employment === "full-time"}
        />
        <label htmlFor="full-time">Full-time</label>
      </fieldset>
      <br />
      <label htmlFor="favColor">What is your favourite color</label>
      <select
        id="favColor"
        onChange={handleChange}
        name="favColor"
        value={formData.favColor}
      >
        <option defaultValue value="">
          --Choose--
        </option>
        <option value="red">Red</option>
        <option value="orange">Orange</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="white">White</option>
        <option value="purple">Purple</option>
        <option value="pink">Pink</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
  function handleSubmit(event) {
    //  event.preventDefault(); help not to refresh the page and our form is submited succesfully
    event.preventDefault();
    console.log(formData);
  }
}
