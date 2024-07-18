"use client";
import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    fetch("/api/home")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return <div>Home</div>;
}

export default Home;
