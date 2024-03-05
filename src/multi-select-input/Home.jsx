import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tag } from "./Tag";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [selectedUserSet, setSelectedUserSet] = useState(new Set());
  console.log("selectedUser", selectedUserSet);
  const fetchUsers = async () => {
    if (searchTerm.trim() === "") {
      setSuggestion([]);
      return;
    }
    try {
      const response = await axios.get(
        `https://dummyjson.com/users/search?q=${searchTerm}`
      );
      setSuggestion(response.data);
    } catch (error) {
      console.log("failed fetching users", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [searchTerm]);

  const handleSelectedUser = (user) => {
    setSelectedUser([...selectedUser, user]);
    setSelectedUserSet(new Set([...selectedUserSet, user.email]));
    setSuggestion([]);
    setSearchTerm("");
  };
  return (
    <div className="p-20 relative">
      <div className="flex flex-wrap items-center gap-3 p-2 border-2 border-indigo-400 rounded-full w-12/12">
        <span className="  flex space-x-3 flex-wrap">
          {selectedUser?.map((user, index) => {
            return (
              <Tag
                img={user.image}
                firstname={user.firstName}
                lastname={user.lastName}
              />
            );
          })}
        </span>
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for a user..."
            className="outline-none p-2 border-none flex-wrap"
          />
        </div>
      </div>

      <div className=" justify-center items-center mx-auto">
        <ul className=" bg-black/5 justify-center rounded-t-3xl">
          {suggestion?.users?.map((user, index) => {
            return !selectedUserSet.has(user.email) ? (
              <li
                key={user.email}
                className="flex space-x-3 items-center p-2 cursor-pointer"
                onClick={() => handleSelectedUser(user)}
              >
                <img className="h-10 w-10" src={user.image} alt="" />
                <span>
                  {user.firstName} {user.lastName}
                </span>
              </li>
            ) : (
              <></>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
