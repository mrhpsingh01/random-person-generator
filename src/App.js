import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaUserTie,
  FaCalendarTimes,
  FaMap,
  FaLock,
  FaPhone,
  FaEnvelopeOpen,
} from "react-icons/fa";

function App() {
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("RandomUser");
  const [value, setValue] = useState("name");

  const getUser = async () => {
    const response = await fetch("https://randomuser.me//api/");
    const data = await response.json();
    console.log(data);
    const person = data.results[0];
    const { phone, email } = person;
    const { large: image } = person.picture;
    const { username, password } = person.login;
    const { first, last } = person.name;
    const {
      dob: { age },
    } = person;
    const {
      street: { number, name },
    } = person.location;

    const newPerson = {
      image,
      age,
      phone,
      email,
      username,
      password,
      street: `${number} ${name}`,
      name: `${first} ${last}`,
    };
    setUser(newPerson);
    setTitle("name");
    setValue(newPerson.name);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleValue = (e) => {
    if (e.target.classList.contains("icon-btn")) {
      const newValue = e.target.dataset.label;
      setTitle(newValue);
      setValue(user[newValue]);
    }
  };

  return (
    <div className="m-0 p-0 bg-blue-200 box-border">
      <div className="bg-blue-200 w-full h-h-screen-1/2"></div>
      <div className="h-[36vw] flex justify-center items-start">
        <div className="w-[90vw] max-w-[738px] bg-blue-100 hover:bg-blue-50 m-0 mt-[-200px] rounded relative p-6 shadow-five-fifteen before:content-none before:absolute before:top-0 before:left-0 before:w-full before:h-[130px]">
          <div className="grid grid-rows-3 grid-flow-col">
            <div className="row-span-3">
              <div className="">
                <img
                  src={user && user.image}
                  height={200}
                  width={200}
                  alt="user img"
                  className="w-36 rounded-full p-[5px] bg-white shadow-five-fifteen mb-2 border-1 border-[#00000003] col-start-2"
                />
              </div>
            </div>
            <p className="mb-6 text-blue-500 col-span-2">
              <div className="text-lg mb-0">My {title} is </div>
            </p>
            <p className="mb-6 text-blue-500 row-span-2 col-span-2">
              <div className="text-3xl">{value}</div>
            </p>
          </div>
          <div className="flex justify-center ">
            <button
              className="icon-btn text-cyan-400 hover:text-cyan-600"
              data-label="name"
              onMouseOver={handleValue}
            >
              <FaUserTie
                className="react-icon text-blue-400 hover:text-blue-500 m-5"
                size={40}
              />
            </button>
            <button
              className="icon-btn text-cyan-400 hover:text-cyan-600"
              data-label="street"
              onMouseOver={handleValue}
            >
              <FaMap
                className="react-icon text-blue-400 hover:text-blue-500 m-5"
                size={40}
              />
            </button>
            <button
              className="icon-btn text-cyan-400 hover:text-cyan-600"
              data-label="phone"
              onMouseOver={handleValue}
            >
              <FaPhone
                className="react-icon text-blue-400 hover:text-blue-500 m-5"
                size={40}
              />
            </button>
            <button
              className="icon-btn text-cyan-400 hover:text-cyan-600"
              data-label="age"
              onMouseOver={handleValue}
            >
              <FaCalendarTimes
                className="react-icon text-blue-400 hover:text-blue-500 m-5"
                size={40}
              />
            </button>
            <button
              className="icon-btn text-cyan-400 hover:text-cyan-600"
              data-label="email"
              onMouseOver={handleValue}
            >
              <FaEnvelopeOpen
                className="react-icon text-blue-400 hover:text-blue-500 m-5"
                size={40}
              />
            </button>
            <button
              className="icon-btn text-cyan-400 hover:text-cyan-600"
              data-label="username"
              onMouseOver={handleValue}
            >
              <FaUser
                className="react-icon text-blue-400 hover:text-blue-500 m-5"
                size={40}
              />
            </button>
            <button
              className="icon-btn text-cyan-400 hover:text-cyan-600"
              data-label="password"
              onMouseOver={handleValue}
            >
              <FaLock
                className="react-icon text-blue-400 hover:text-blue-500 m-5"
                size={40}
              />
            </button>
          </div>
          <div className="flex justify-center gap-4 text-center font-bold leading-6 ">
            <button
              type="submit"
              onClick={getUser}
              class="rounded-full bg-blue-400 hover:bg-blue-600 text-cyan-400 hover:text-cyan-600 cursor-pointer p-5 text-lg "
            >
              Generate Random User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
