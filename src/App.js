import axios from "axios";
import { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import emaill from "./assets/email.svg";
import locationn from "./assets/location.svg";
import phonee from "./assets/phone.svg"
import "./App.css";

function App() {
  const [picture, setPicture] = useState("");
  const [name, setName] = useState({});
  const [email, setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [location,setLocation] = useState({});
  const [age,setAge] = useState("");
  const [date,setDate] = useState("");

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        // console.log(res.data.results[0]);
        console.log(res);
        setPicture(res.data.results[0].picture.large);
        setName(res.data.results[0].name);
        setEmail(res.data.results[0].email);
        setPhone(res.data.results[0].phone);
        setLocation(res.data.results[0].location);
        setAge(res.data.results[0].dob);
        setDate(res.data.results[0].registered.date);
      })
  }, []);

  const handleClick = () => {
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        // console.log(res.data.results[0]);
        console.log(res);
        setPicture(res.data.results[0].picture.large);
        setName(res.data.results[0].name);
        setEmail(res.data.results[0].email);
        setPhone(res.data.results[0].phone);
        setLocation(res.data.results[0].location);
        setAge(res.data.results[0].dob);
        setDate(res.data.results[0].registered.date);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(name);
  return (
    <div className="App">
      <div className="container">
        <div className="container-sol">
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src={picture}
              sx={{ width: 100, height: 100 }}
            />
          </Stack>
          <img src={emaill} alt="" style={{width:"40px"}}/>
          <img src={locationn} alt="" style={{width:"40px"}}/>
          <img src={phonee} alt="" style={{width:"40px"}}/>
          <p>Age:</p>
          <p>Register Date:</p>
        </div>
        <div className="container-sağ">
          <h3 style={{height:"35px"}}>{name.title} {name.first} {name.last}</h3>
          <p>{email}</p>
          <p>{location.city}-{location.country}</p>
          <p>{phone}</p>
          <p>{age.age}</p>
          <p>{date.slice(0,10)}</p>
        </div>
      </div>
      <Button variant="contained" color="primary" onClick={handleClick} className="btn">
        Random User
      </Button>
    </div>
  );
}

// {<Stack direction="row" spacing={2}>
// <Avatar
//   alt="Remy Sharp"
//   src={picture}
//   sx={{ width: 100, height: 100 }}
// />
// </Stack>}

export default App;
