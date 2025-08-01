const express = require("express");
const path = require("path");
const { v4: uuidv4 } = require('uuid');// for unique id and long id this is api
const methodOverride = require("method-override");// it is the method to handle  or access path request in html form

const app = express();

// Middleware for parsing JSON and form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views")); // Views folder

// Serve static files (like CSS, JS, images) from a public folder
app.use(express.static(path.join(__dirname, "/public"))); 

//override method for petch
app.use(methodOverride('_method'));

const port = 8080;
let pid = 1;

let posts = [
    {
        id:uuidv4(),
        username:"hardik",
        content :"i love coding"
    },
    {
        id:uuidv4(),
        username:"coding",
        content :"c++ best"
    },
    {
        id:uuidv4(),
        username:"luffy",
        content :"rest api"
    }
]

// main route
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

// creating and updating post
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  const { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id , username, content });   
  res.redirect("/posts");
});


// search the post by the id 

app.get("/posts/:id", (req, res) => {
  let {id} = req.params;      
  let post = posts.find(p => id === p.id); 
  if (!post) return res.status(404).send("Post not found");
  res.render("show.ejs", { post });
});

// for updating the route means to edeit the exiting  content
app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newcontent = req.body.content;
    let post = posts.find(p => p.id === id);
    post.content = newcontent;
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find(p => id === p.id); 
    res.render("edit.ejs",{post});
});
// delete the post

app.delete("/posts/:id", (req, res) => {
  const { id } = req.params;
  posts = posts.filter(p => p.id !== id); // it is used to which id does not match  they will store in the array rest of will delte
  res.redirect("/posts");
});

// listing port starting 
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
