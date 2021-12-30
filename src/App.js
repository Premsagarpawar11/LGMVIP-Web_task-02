import React from "react";
import { useState } from "react";
import Cards from "./user";
import "./App.css";

function App() {
    const [isDateLoaded, setIsDateloaded] = React.useState(false);
    const [userData, setUserData] = React.useState([]);
    const [isButtonClick, setisButtonClick] = React.useState(false);
    const handleClick = () => {
        setisButtonClick(true);
        fetch("https://reqres.in/api/users?page=1")
            .then((response) => response.json())
            .then((res) => {
                setUserData(res.data);
                setInterval(() => {
                    setIsDateloaded(true);
                }, 1500);
            })
            .catch((err) => {
                console.log(err);
            });

    };
    return (


        <>   


        <div class="swiper-container"> 
            <section className="wholecontainer">

                <div class="nav" id="mynav">
                <h1><marquee>Techno RODAN</marquee></h1> 
                </div> 

               

                <div className="container">    

                    <div className="row justify-content-center">
                        {
                            isButtonClick ? (
                                isDateLoaded ? (
                                    <Cards userData={userData} />
                                ) : (
                                    <div class="loader"></div>
                                )
                            ) : (
                                <div className="instruction">
                                    <h1> "Hit the get users button to see user's information"</h1>

                                </div>

                            )}
                    </div>
                    <div class="bottom" id="mybottom">
                        <a href="#getusers" class="btn" onClick={handleClick}><b> Get Users</b></a>
                    </div>
                </div>
            </section>
            <footer class="foot" >
               <h2>copywrite &copy :2021 Techno RODAN.com</h2> 
               <h4>All Rights Reserved</h4>
               <h4>Developed & managed by Premsagar</h4>
            </footer> 
        </div>
        </>

    );
} export default App;