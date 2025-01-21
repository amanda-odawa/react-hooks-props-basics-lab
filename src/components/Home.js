import React from "react";
import user from "../data/user";

function Home({ name = user.name, city = user.city, color = user.color }) {
  return (
    <div id="home">
      <h1 style={{ color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
