import express from 'express'
const app = express();
const PORT = process.env.PORT || 3001;
import fetch from "node-fetch";
import bodyParser from "body-parser"
import https from "https"
const router = new express.Router()



const agent = new https.Agent({
  rejectUnauthorized: false,
  headers : { 
    'Content-Type': 'application/json',
    'Accept': 'application/json'
   }
})





// Handle GET requests to /api route
app.get("/api", async (req, res) => {
  
  fetch('https://catfact.ninja/fact', {agent})
  .then(response => {
    //console.log(response);
    return response.json();
  }).then(data => {
    res.json({data})
  }).catch(err => {
    // Do something for an error here
    console.log("Error Reading data " + err);
  });
})

// // All other GET requests not handled before will return our React app
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
//   });

  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });


  