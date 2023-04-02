import React from "react";
import "./style.css";
import bgImage from "./images/about.jpg";


const About = () => {
    return (
        <section class="about" >
            <div id="background" style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            zIndex: "-1",
            filter: "brightness(50%)"
          }}>
            </div>
            <div class="htu-body">
                <h1>ABOUT THIS APPLICATIOn</h1>
                <hr class="pdivider" />
                <p>Our web app is designed to simplify an automate the collection and organization of rental listing data in Simcoe County. It captures rental ads from multiple websites and saves the information in a database, creating an unique ID for each listing.
                </p>
                <p>The app captures important information such as the source website of the listing, date of posting, address, number of bedrooms, monthly rent, housing type, descriptions, utilities information, type of lease and a screenshot of the ad. With this data, County of Simcoe staff can easily create a monthly average rent report for different areas and unit sizes, saving both time and effort.</p>
                <p>Our app provides a user-friendly, comprehensive solution for the local rental market data to support housing policies planning and decision making.</p>

            </div>
        </section>
    );
};

export default About;
