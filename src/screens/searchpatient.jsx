import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/screens/Search.css';


const Searchpatient = () => {
    let variable = {};
  const [phone, setPhone] = useState({
    phoneNumber: "",
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setPhone((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
    await axios.post("https://e-react-node-backend-22ed6864d5f3.herokuapp.com/searchpatient", phone).then(function (response) {
        variable = response.data 
        console.log(variable); 
       
    })     
      navigate("/searchresult",{state:variable});
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    
    <>
    <center>
   <div className="form">
    <br></br><br></br><br></br><br></br>
      <h1>Search For Patient</h1>
      <input class="inputstyle"
        type="text"
        placeholder="Enter Mobile Number"
        name="phoneNumber"
        onChange={handleChange}
      />

      <button class="button buttonS" onClick={handleClick}>Search</button>
      {error && "Something went wrong!"}
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

          </div></center>
    
    </>
  );
};

export default Searchpatient;