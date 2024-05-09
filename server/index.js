const express=require("express")
const mongoose=require('mongoose')
const cors=require("cors")
const StylistModel=require('./models/Stylist(signup)')
const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/stylist(signup)");

app.post('/login',(req,res) => {
    const {email,password}=req.body;

    StylistModel.findOne({email:email})
    .then(user => {
        if(user) {
            if(user.password===password){
                res.json("Success")
            }
            else{
                res.json("The Password is incorrect")
            }

        }
        else{
            res.json("No record existed")
        }
    })
    

}) 
const stylists = {
  guntur: [
    {
      _id: 1,
      name1: "Yaswanth",
      email1: "yaswanthgopi_y@srmap.edu.in",
      location: "guntur",
      age1: 20,
      gender1: "Male",
      mobileNumber1: "9160853146"
    },
    {
      _id: 2,
      name1: "GK",
      email1: "gopalakrishna_p@srmap.edu.in",
      location: "guntur",
      age1: 21,
      gender1: "Male",
      mobileNumber1: "7780472151"
    },
    {
      _id: 3,
      name1: "Priya",
      email1: "lakshmipriya_k@srmap.edu.in",
      location: "guntur",
      age1: 20,
      gender1: "Female",
      mobileNumber1: "7036535679"
    },{
      _id: 4,
      name1: "Sravya",
      email1: "venkatasravya_a@srmap.edu.in",
      location: "guntur",
      age1: 20,
      gender1: "Female",
      mobileNumber1: "9440899787"
    }

    // Add more stylists for Guntur if needed
  ],
  vijayawada: [
    {
      _id: 1,
      name1: "Sri Charan",
      email1: "sricharan_m@srmap.edu.in",
      location: "vijayawada",
      age1: 20,
      gender1: "Male",
      mobileNumber1: "9849929023"
    },
    {
      _id: 2,
      name1: "Pavana Venkat",
      email1: "venkat_mylavarapu@srmap.edu.in",
      location: "vijayawada",
      age1: 20,
      gender1: "Male",
      mobileNumber1: "8186903814"
    },
    {
      _id: 3,
      name1: "vigneshkode",
      email1: "vigneshkode_v@srmap.edu.in",
      location: "vijayawada",
      age1: 20,
      gender1: "Male",
      mobileNumber1: "9912930007"
    },
    {
      _id: 4,
      name1: "Sanjay sahu",
      email1: "Jalsa@srmap.edu.in",
      location: "vijayawada",
      age1: 50,
      gender1: "Male",
      mobileNumber1: "9898989898"
    }
    // Add more stylists for Vijayawada if needed
  ],
  ibm: [
    {
      _id: 1,
      name1: "Niharika",
      email1: "niharika_juttuka@srmap.edu.in",
      location: "IBM",
      age1: 20,
      gender1: "Female",
      mobileNumber1: "9391198850"
    },
    {
      _id: 2,
      name1: "jejamma",
      email1: "arundhati@srmap.edu.in",
      location: "IBM",
      age1: 60,
      gender1: "Female",
      mobileNumber1: "9191919191"
    }
  ],
  delhi: [
    {
      _id: 1,
      name1: "Byas",
      email1: "byas_yadav@srmap.edu.in",
      location: "Delhi",
      age1: 22,
      gender1: "Male",
      mobileNumber1: "6394908792"
    },
    {
      _id: 2,
      name1: "Rishabh",
      email1: "Rishabh_kumar@srmap.edu.in",
      location: "Delhi",
      age1: 21,
      gender1: "Male",
      mobileNumber1: "9470035869"
    }
  ],
  hyderabad: [
    {
      _id: 1,
      name1: "Pushpa",
      email1: "Pushparaj@srmap.edu.in",
      location: "Hyderabad",
      age1: 45,
      gender1: "Male",
      mobileNumber1: "9494949494"
    },
    {
      _id: 2,
      name1: "Amarendra Bahubali",
      email1: "Fatherbahubali@srmap.edu.in",
      location: "Hyderabad",
      age1: 60,
      gender1: "Male",
      mobileNumber1: "9959959959"
    },
    {
      _id: 3,
      name1: "mahendra Bahubali",
      email1: "sonbahubali@srmap.edu.in",
      location: "Hyderabad",
      age1: 35,
      gender1: "Male",
      mobileNumber1: "9959959959"
    },
    {
      _id: 4,
      name1: "seetharama Raju",
      email1: "Khaleja@srmap.edu.in",
      location: "Hyderabad",
      age1: 50,
      gender1: "Male",
      mobileNumber1: "9969969969"
    }
  ],
  bangalore: [
    {
      _id: 1,
      name1: "Rocky",
      email1: "RockyBhai@srmap.edu.in",
      location: "Bangalore",
      age1: 40,
      gender1: "Male",
      mobileNumber1: "9595959595"
    },
    {
      _id: 2,
      name1: "Michael",
      email1: "Cup_mukyam_bigilu@srmap.edu.in",
      location: "Bangalore",
      age1: 40,
      gender1: "Male",
      mobileNumber1: "9229229221"
    }
  ]
  };
  
  // Route to fetch stylists based on location
  app.get("/bookstylists/:location", (req, res) => {
    const { location } = req.params;
    const stylistData = stylists[location] || [];
    res.json(stylistData);
  });

app.post('/register',(req,res) => {
    StylistModel.create(req.body)
    .then(Users => res.json(Users))
    .catch(err => res.json(err))

}) 
app.get("/user/:email", (req, res) => {
    const email = req.params.email;
    StylistModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json(user); // Send user data as JSON response
            } else {
                res.status(404).json({ error: "User not found" });
            }
        })
        .catch(err => {
            console.error("Error fetching user data:", err);
            res.status(500).json({ error: "Internal server error" });

        });
});
app.listen(3001, () => {
    console.log("Server is running")
})