import React, { useState } from "react";
import { Link } from "react-router-dom";

function Recommendation() {
    const [selectedOccasion, setSelectedOccasion] = useState("");
    const [selectedGender, setSelectedGender] = useState("");
    const [selectedType, setSelectedType] = useState("");

    const handleOccasionChange = (e) => {
        setSelectedOccasion(e.target.value);
    };

    const handleGenderChange = (e) => {
        setSelectedGender(e.target.value);
    };

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    };

    // Image arrays
    const wgfImages = [
        "/images/wedding/guest/female/wgf1.png",
        "/images/wedding/guest/female/wgf2.png",
        "/images/wedding/guest/female/wgf3.jpeg",
        "/images/wedding/guest/female/wgf4.jpg",
        "/images/wedding/guest/female/wgf5.jpg",
        "/images/wedding/guest/female/wgf6.jpg",
        "/images/wedding/guest/female/wgf7.jpg",
        "/images/wedding/guest/female/wgf8.jpg",
        "/images/wedding/guest/female/wgf9.jpg",
        "/images/wedding/guest/female/wgf10.jpg",
    ];

    const wofImages = [
        "/images/wedding/own/female/wow1.jpg",
        "/images/wedding/own/female/wow2.jpg",
        "/images/wedding/own/female/wow3.jpg",
        "/images/wedding/own/female/wow4.jpg",
        "/images/wedding/own/female/wow5.jpg",
        "/images/wedding/own/female/wow6.jpg",
        "/images/wedding/own/female/wow7.jpg",
        "/images/wedding/own/female/wow8.jpg",
        "/images/wedding/own/female/wow9.jpg",
        "/images/wedding/own/female/wow10.jpg",
    ];
    const womImages = [
        "/images/wedding/own/male/wedding-own-male1.webp",
        "/images/wedding/own/male/wedding-own-male2.webp",
        "/images/wedding/own/male/wedding-own-male3.webp",
        "/images/wedding/own/male/wedding-own-male4.webp",
        "/images/wedding/own/male/wedding-own-male5.webp",
        "/images/wedding/own/male/wedding-own-male6.webp",
        "/images/wedding/own/male/wedding-own-male7.webp",
        "/images/wedding/own/male/wedding-own-male8.webp",
        "/images/wedding/own/male/wedding-own-male9.webp",
        "/images/wedding/own/male/wedding-own-male10.webp",
    ];
    const wgmImages = [
        "/images/wedding/guest/male/wedding-guest-male1.webp",
        "/images/wedding/guest/male/wedding-guest-male2.webp",
        "/images/wedding/guest/male/wedding-guest-male3.webp",
        "/images/wedding/guest/male/wedding-guest-male4.webp",
        "/images/wedding/guest/male/wedding-guest-male5.webp",
        "/images/wedding/guest/male/wedding-guest-male6.webp",
        "/images/wedding/guest/male/wedding-guest-male7.webp",
        "/images/wedding/guest/male/wedding-guest-male8.webp",
        "/images/wedding/guest/male/wedding-guest-male9.webp",
        "/images/wedding/guest/male/wedding-guest-male10.webp",
    ];
    const somImages = [
        "/images/sangeet/own/male/som1.jpg",
        "/images/sangeet/own/male/som2.webp",
        "/images/sangeet/own/male/som3.jpg",
        "/images/sangeet/own/male/som4.jpg",
        "/images/sangeet/own/male/som5.jpg",
        "/images/sangeet/own/male/som6.webp",
        "/images/sangeet/own/male/som7.jpg",
        "/images/sangeet/own/male/som8.webp",
        "/images/sangeet/own/male/som9.webp",
        "/images/sangeet/own/male/som10.jpg",

    ];
    const sgmImages = [
        "/images/sangeet/guest/male/sgm1.jpg",
        "/images/sangeet/guest/male/sgm2.jpg",
        "/images/sangeet/guest/male/sgm3.jpg",
        "/images/sangeet/guest/male/sgm4.avif",
        "/images/sangeet/guest/male/sgm5.webp",
        "/images/sangeet/guest/male/sgm6.avif",
        "/images/sangeet/guest/male/sgm7.webp",
        "/images/sangeet/guest/male/sgm8.avif",
        "/images/sangeet/guest/male/sgm9.jpg",
        "/images/sangeet/guest/male/sgm10.jpg",

    ];
    const sofImages = [
        "/images/sangeet/own/female/sof1.jpg",
        "/images/sangeet/own/female/sof2.webp",
        "/images/sangeet/own/female/sof3.webp",
        "/images/sangeet/own/female/sof4.jpg",
        "/images/sangeet/own/female/sof5.jpg",
        "/images/sangeet/own/female/sof6.webp",
        "/images/sangeet/own/female/sof7.jpg",
        "/images/sangeet/own/female/sof8.jpg",
        "/images/sangeet/own/female/sof9.webp",
        "/images/sangeet/own/female/sof10.jpg",

    ];
    const sgfImages = [
        "/images/sangeet/guest/female/sgf1.webp",
        "/images/sangeet/guest/female/sgf2.avif",
        "/images/sangeet/guest/female/sgf3.webp",
        "/images/sangeet/guest/female/sgf4.jpg",
        "/images/sangeet/guest/female/sgf5.webp",
        "/images/sangeet/guest/female/sgf6.jpg",
        "/images/sangeet/guest/female/sgf7.jpeg",
        "/images/sangeet/guest/female/sgf8.jpg",
        "/images/sangeet/guest/female/sgf9.jpg",
        "/images/sangeet/guest/female/sgf10.avif",

    ];
    const hofImages = [
        "/images/holiday/own/female/hof1.jpg",
        "/images/holiday/own/female/hof2.jpg",
        "/images/holiday/own/female/hof3.jpg",
        "/images/holiday/own/female/hof4.jpg",
        "/images/holiday/own/female/hof5.jpg",
        "/images/holiday/own/female/hof6.jpg",
        "/images/holiday/own/female/hof7.jpg",
        "/images/holiday/own/female/hof8.jpg",
        "/images/holiday/own/female/hof9.jpg",
        "/images/holiday/own/female/hof10.jpg",

    ];
    const homImages = [
        "/images/holiday/own/male/hom1.jpg",
        "/images/holiday/own/male/hom2.jpg",
        "/images/holiday/own/male/hom3.jpg",
        "/images/holiday/own/male/hom4.jpg",
        "/images/holiday/own/male/hom5.jpg",
        "/images/holiday/own/male/hom6.jpg",
        "/images/holiday/own/male/hom7.jpg",
        "/images/holiday/own/male/hom8.jpg",
        "/images/holiday/own/male/hom9.jpg",
        "/images/holiday/own/male/hom10.jpg",

    ];
    const pofImages = [
        "/images/party wear/female/pf1.jpg",
        "/images/party wear/female/pf2.jpg",
        "/images/party wear/female/pf3.jpg",
        "/images/party wear/female/pf4.jpg",
        "/images/party wear/female/pf5.jpg",
        "/images/party wear/female/pf6.jpg",
        "/images/party wear/female/pf7.jpg",
        "/images/party wear/female/pf8.jpg",
        "/images/party wear/female/pf9.jpg",
        "/images/party wear/female/pf10.jpg",
        "/images/party wear/female/pf11.jpg",
        "/images/party wear/female/pf12.jpg",
        "/images/party wear/female/pf13.jpg",
        "/images/party wear/female/pf14.jpg",
        "/images/party wear/female/pf15.jpg",
        "/images/party wear/female/pf16.jpg",
    ];
    const pomImages = [
        "/images/party wear/male/pm1.jpg",
        "/images/party wear/male/pm2.jpg",
        "/images/party wear/male/pm3.jpg",
        "/images/party wear/male/pm4.jpg",
        "/images/party wear/male/pm5.jpg",
        "/images/party wear/male/pm6.jpg",
        "/images/party wear/male/pm7.jpg",
        "/images/party wear/male/pm8.jpg",
        "/images/party wear/male/pm9.jpg",
        "/images/party wear/male/pm10.jpg",
        "/images/party wear/male/pm11.jpg",
        "/images/party wear/male/pm12.jpg",
    ];
    const fomImages = [
        "/images/formals/male/fm1.jpg",
        "/images/formals/male/fm2.jpg",
        "/images/formals/male/fm3.jpg",
        "/images/formals/male/fm4.jpg",
        "/images/formals/male/fm5.jpg",
        "/images/formals/male/fm6.jpg",
        "/images/formals/male/fm7.jpg",
        "/images/formals/male/fm8.jpg",
        "/images/formals/male/fm9.jpg",
        "/images/formals/male/fm10.jpg",
        "/images/formals/male/fm11.jpg",
        "/images/formals/male/fm12.jpg",
        "/images/formals/male/fm13.jpg",
        "/images/formals/male/fm14.jpg",
        "/images/formals/male/fm15.jpg",
        "/images/formals/male/fm16.jpg",
    ];
    const fofImages = [
        "/images/formals/female/ff1.jpg",
        "/images/formals/female/ff2.jpg",
        "/images/formals/female/ff3.jpg",
        "/images/formals/female/ff4.jpg",
        "/images/formals/female/ff5.jpg",
        "/images/formals/female/ff6.jpg",
        "/images/formals/female/ff7.jpg",
        "/images/formals/female/ff8.jpg",
        "/images/formals/female/ff9.jpg",
        "/images/formals/female/ff10.jpg",
        "/images/formals/female/ff11.jpg",
        "/images/formals/female/ff12.jpg",
        "/images/formals/female/ff13.jpg",
        "/images/formals/female/ff14.jpg",
        "/images/formals/female/ff15.jpg",
        "/images/formals/female/ff16.jpg",
    ];
    const hfImages = [
        "/images/Haldi/female/hf1.jpg",
        "/images/Haldi/female/hf2.jpg",
        "/images/Haldi/female/hf3.jpg",
        "/images/Haldi/female/hf4.jpg",
        "/images/Haldi/female/hf5.jpg",
        "/images/Haldi/female/hf6.jpg",
        "/images/Haldi/female/hf7.jpg",
        "/images/Haldi/female/hf8.jpg",
        "/images/Haldi/female/hf9.jpg",
        "/images/Haldi/female/hf10.jpg"
    ];
    const hmImages = [
        "/images/Haldi/male/hm1.jpg",
        "/images/Haldi/male/hm2.jpg",
        "/images/Haldi/male/hm3.jpg",
        "/images/Haldi/male/hm4.jpg",
        "/images/Haldi/male/hm5.jpg",
        "/images/Haldi/male/hm6.jpg",
        "/images/Haldi/male/hm7.jpg",
        "/images/Haldi/male/hm8.jpg",
        "/images/Haldi/male/hm9.jpg",
        "/images/Haldi/male/hm10.jpg"
    ];
    // Decide which image array to use based on selection
    const getCurrentImageSet = () => {
        if (selectedOccasion === "wedding" && selectedGender === "female") {
            switch (selectedType) {
                case "guest":
                    return wgfImages;
                case "own":
                    return wofImages;
                default:
                    return [];
            }
        }
        else if(selectedOccasion === "wedding" && selectedGender === "male"){
            switch (selectedType) {
                case "guest":
                    return wgmImages;
                case "own":
                    return womImages;
                default:
                    return [];
            }
        }
        else if(selectedOccasion === "sangeet" && selectedGender === "male"){
            switch(selectedType){
                case "guest":
                    return somImages;
                case "own":
                    return sgmImages;
            }
        }
        else if(selectedOccasion === "sangeet" && selectedGender === "female"){
            switch(selectedType){
                case "guest":
                    return sgfImages;
                case "own":
                    return sofImages;
            }
        }
        else if(selectedOccasion === "holiday" && selectedGender === "female"){
            switch(selectedType){
                case "guest":
                    return hofImages;
                case "own":
                    return hofImages;
            }
        }
        else if(selectedOccasion === "holiday" && selectedGender === "male"){
            switch(selectedType){
                case "guest":
                    return homImages;
                case "own":
                    return homImages;
            }
        }
        else if(selectedOccasion === "party-wear" && selectedGender === "female"){
            switch(selectedType){
                case "guest":
                    return pofImages;
                case "own":
                    return pofImages;
            }
        }
        else if(selectedOccasion === "party-wear" && selectedGender === "male"){
            switch(selectedType){
                case "guest":
                    return pomImages;
                case "own":
                    return pomImages;
            }
        }
        else if(selectedOccasion === "formal" && selectedGender === "male"){
            switch(selectedType){
                case "guest":
                    return fomImages;
                case "own":
                    return fomImages;
            }
        }
        else if(selectedOccasion === "formal" && selectedGender === "female"){
            switch(selectedType){
                case "guest":
                    return fofImages;
                case "own":
                    return fofImages;
            }
        }
        else if(selectedOccasion === "haldi" && selectedGender === "female"){
            switch(selectedType){
                case "guest":
                    return hfImages;
                case "own":
                    return hfImages;
            }
        }
        else if(selectedOccasion === "haldi" && selectedGender === "male"){
            switch(selectedType){
                case "guest":
                    return hmImages;
                case "own":
                    return hmImages;
            }
        }
        return [];
    };

    const currentImages = getCurrentImageSet();

    return (
        <div>
            <style>
                {`
                body {
                    font-family: "Playfair Display", serif; 
                    background-image: url('/images/Image3.png');
                    background-size: cover;
                    background-position: center;
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 100vh;
                    padding: 20px;
                }
                .navbar {
                    background-color: transparent;
                    color: white;
                    padding: 10px 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin: 0 auto;
                    max-width: 100%;
                    max-height: 7%;
                }
                .navbar-links a {
                    color: white;
                    padding: 10px 15px;
                    text-decoration: none;
                    margin: 0 5px;
                    transition: color 0.3s;
                }
                .navbar-links a:hover {
                    color: #afac4c;
                }
                .profile-link:hover {
                    background-color: white; 
                    color: #e7e5e5; 
                }
                // .selection {
                //     display: flex;
                //     justify-content: center;
                //     align-items: center;
                //     gap: 30px;
                //     margin-top: 50px;
                //     text-align: center;
                //     width: 100%;
                // }
                // select {
                //     padding: 10px 20px;
                //     background-color: transparent;
                //     color: white;
                //     border: 2px solid white;
                //     border-radius: 15px;
                //     outline: none;
                //     box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                //     cursor: pointer;
                //     width: 250px;
                // }
                // select:hover {
                //     background-color: transparent;
                // }
                .selection {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 30px;
                    margin-top: 50px;
                    text-align: center;
                    width: 100%;
                }

                select {
                    padding: 10px 20px;
                    background-color: transparent;
                    color: white;
                    border: 2px semi-solid white;
                    border-radius: 15px;
                    outline: none;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
                    cursor: pointer;
                    width: 250px;
                }

                select:hover {
                    background-color: transparent;
                }
                .image-container {
                    width: 300px;
                    height: 300px;
                    margin: 10px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    backdrop-filter: blur(30px);
                    box-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
                    border: 2px solid rgba(255, 255, 255, 0.2);
                    background: transparent;
                    border-radius: 10px;
                }
                .image-container img {
                    max-width: 280px;
                    max-height: 280px;
                }
                option {
                    background: rgba(0, 0, 0, 0.7); // Dark background for options for visibility
                    color: white;
                }
                `}
            </style>

            <nav className="navbar">
                <div className="navbar-links">
                    <Link to="/first" className="profile-link">Back</Link>
                </div>
            </nav>

            <div className="selection">
                <select value={selectedOccasion} onChange={handleOccasionChange}>
                    <option value="">Select Occasion</option>
                    <option value="wedding">Wedding</option>
                    <option value="sangeet">Sangeet</option>
                    <option value="holiday">Holiday</option>
                    <option value="party-wear">Party wear</option>
                    <option value="formal">Formal</option>
                    <option value="haldi">Haldi</option>


                </select>
                <select value={selectedGender} onChange={handleGenderChange}>
                    <option value="">Select Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </select>
                <select value={selectedType} onChange={handleTypeChange}>
                    <option value="">Select Type</option>
                    <option value="own">Own</option>
                    <option value="guest">Guest</option>
                </select>
            </div>

            <div className="image-container-wrapper" style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginTop: "50px" }}>
                {currentImages.map((img, index) => (
                    <div className="image-container" key={index}>
                        <img src={img} alt="" style={{ visibility: selectedOccasion && selectedGender && selectedType ? 'visible' : 'hidden' }} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Recommendation;
