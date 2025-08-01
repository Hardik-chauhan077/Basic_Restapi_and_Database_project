const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const chat  = require("../MongoExpress/models/chat");
const methodOverride = require("method-override");

let app = express();
const port = 8080;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// for ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname,"public")));


app.use(methodOverride("_method")); 

// for mongoose
main()
.then(()=>{
    console.log("succesfully connection");
})
.catch((err)=>{
    console.log(err);
})

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatshapp');
}


// Route
app.get("/", (req, res) => {
    console.log("page is running");
    res.send("Welcome to the home page!"); 
});

app.get("/chats", async(req, res) => {
    let chats = await chat.find();
    res.render("index.ejs",{chats});
});


// new chat 
app.get("/chats/new",(req, res) => {
    res.render("new.ejs");
});

app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body;

    let newChat = new chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });

    console.log(newChat);

    newChat.save()
    .then(() => {
        res.redirect("/chats"); // or res.send(newChat) if it's an API
    })
    .catch((err) => {
        console.error("Error saving chat:", err);
        res.status(500).send("Something went wrong");
    });
});

// edit
app.get("/chats/:id/edit", async (req, res) => {
  const { id } = req.params;
  const chatDoc = await chat.findById(id);   
  res.render("edit", { chat: chatDoc });
});

app.put("/chats/:id",async(req,res)=>{
    let {id } = req.params;
    let {msg:Newmsg} = req.body;
    let data =  await chat.findByIdAndUpdate(id,{msg:Newmsg},{runValidators:true , new:true});
    console.log(data);
    res.redirect("/chats"); 
})

// delete datta
app.delete("/chats/:id",async(req,res)=>{
    let {id} = req.params;
   await chat.findByIdAndDelete(id);
   res.redirect("/chats");
});

app.listen(port, () => {
    console.log(`port is listening on ${port}`);
});
