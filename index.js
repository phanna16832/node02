const express = require("express"); 

const app = express();

//register ejs
app.set('view engine', 'ejs');

//middleware static
app.use(express.static('static'));

app.get("/", (req, res) => { 
  res.render('home')

 }); 

// 404 Page
app.use((req, res) => {
  res.render('404' ,{title : "ahbeoun"}); // Make sure views/home.ejs exists
});


const PORT = process.env.PORT || 5000; app.listen(PORT, () => { 
  console.log(`Server is running on port http://localhost:${PORT} `);
 });


