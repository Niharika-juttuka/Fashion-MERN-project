import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar2 from "../Navbar2/Navbar2";

function Booking() {
  const [location, setLocation] = useState("");
  const [stylists, setStylists] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const [selectedStylist,setSelectedStylist]=useState(null);


  // Function to fetch stylist data based on location
  const fetchStylists = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/bookstylists/${location}`);
      setStylists(response.data);
      setSelectedStylist(null);
    } catch (error) {
      console.error("Error fetching stylist data:", error);
      setError("Error fetching stylist data. Please try again later.");
    }
  };

 // Handle location change
const handleLocationChange = (event) => {
    const newLocation = event.target.value;
    setLocation(newLocation);
    // Clear stylist data when location changes
    setStylists([]);
    // Fetch stylist data for the new location if it's not empty
    if (newLocation) {
      fetchStylists();
    }
  };

const handleRowClick = (stylist) => {
    setSelectedStylist(stylist);
};

const handleConfirmClick = () => {
  if (selectedStylist) {
    // Redirect or perform further actions
    localStorage.setItem("name1R", selectedStylist.name1);
    navigate('/successful');
  } else {
    alert("Please select a stylist first.");
  }
};
  
  return (
    <div>
            <style>
        {`
          body {
            margin: 0;
            font-family: "Playfair Display", serif;
            font-optical-sizing: auto;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-image: url('/images/Image4_blur.png');
            background-size: cover;
            background-position: center;
          }
          .selection {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 30px;
            margin-top: 50px;
            text-align: center;
            width: 120%;
            font-size: 18px;
            box-shadow:0 0 10px rgba(255, 255,255, .2);
            justify-content: flex-start;
            margin-left:-10%;
            align-items: center;

          }
          select {
            padding: 10px 20px;
            background-color: transparent;
            color: white;
            border: 2px solid white;
            border-radius: 15px;
            outline: none;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            cursor: pointer;
            width: 250px;
          }
          option {
            background: rgba(0, 0, 0, 0.4);
            color: white;
          }
          .table {
            width: 120%;
            justify-content:flex-start;
            margin-left: -10%;
            // background-color: rgba(255, 255, 255, 0.5);
            background-color:transparent;
            border-collapse: collapse;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.25);
            border-radius: 8px;
            overflow: hidden;
            justify-content: center;
            align-items: center;
          }
          th, td {
            padding: 10px;
            color: #333;
            text-align: left;
          }
          tbody tr:hover {
            background-color: rgba(255, 255, 255, 0.75);
          }
          tbody tr.selected {
            background-color: rgba(100, 149, 237, 0.75); /* CornflowerBlue with opacity */
          }
        
        .wrapper{
            display: flex;
            justify-content: flex-start; /* Aligns the button to the right */
            width: 120%; /* Adjust this to match the table width or as needed */
            margin-left: 30%;
        }

        button{
            height: 45px;
            // background: white;
            background-color: #4CAF50;
            border: none;
            outline: none;
            border-radius: 40px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            cursor: pointer;
            font-size: 16px;
            color: #333;
            font-weight: 700;
            padding: 0 30px;
        }
        `}
      </style>
      <Navbar2/>
      {/* Dropdown button */}
      <div className="container">
        <div>
          <select className="selection" value={location} onChange={handleLocationChange} onClick={fetchStylists}>
            <option value="">Select Location</option>
            <option value="guntur">Guntur</option>
            <option value="vijayawada">Vijayawada</option>
            <option value="ibm">IBM</option>
            <option value="delhi">Delhi</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="bangalore">Bangalore</option>
          </select>
        </div>
      </div>


      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Mobile Number</th>
            </tr>
          </thead>
          <tbody>
            {stylists.map(stylist => (
              <tr key={stylist._id} onClick={() => handleRowClick(stylist)}
              className={selectedStylist===stylist ? "table-success":""}>
                <td>{stylist.name1}</td>
                <td>{stylist.email1}</td>
                <td>{stylist.location}</td>
                <td>{stylist.age1}</td>
                <td>{stylist.gender1}</td>
                <td>{stylist.mobileNumber1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="wrapper">
        <button type="submit" onClick={handleConfirmClick}>
          Confirm Selection
        </button>
      </div>
    </div>
  );
}

export default Booking;