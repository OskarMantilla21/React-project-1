import React from "react";
import "./App.css";

import Header from "./atomos/header";
import Footer from "./atomos/footer";
import Avatar from "./atomos/avatar";
import Counter from "./atomos/counter";
import Card from "./atomos/card";
import Badge from "./atomos/badge";
import micarro from "./micarro.jpg";

function App(){
  return(
    <div className="App"> 
      {/*Header*/}
      <Header title="My car"/>

      <div className="container">
        {/* Avatar */}
        <Avatar 
        imageSrc={micarro}
        description="My dream car"/>

        {/* Card */}
        <Card title="Brand" content="Mercedes"/>
        <Card title="Color" content="Black"/>
        <Card title="Style" content="Brabus"/>

        {/* Badge */}
        <Badge label="car"/>

        {/* Counter */}
        <Counter/>


        {/* Footer */}
        <Footer content="Creado con ❤️ por Oskar"/>

      </div>
    </div>
  );
}


export default App;