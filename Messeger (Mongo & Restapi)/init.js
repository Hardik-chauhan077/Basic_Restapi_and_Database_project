const mongoose = require('mongoose');
const chat  = require("../MongoExpress/models/chat");


main()
.then(()=>{
    console.log("succesfully connection");
})
.catch((err)=>{
    console.log(err);
})

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatshapp');
};

let allChat = [
    {
        from: "luffy",
        to: "zoro",
        msg: "Zoro! I found the One Piece!",
        created_at: new Date()
    },
    {
        from: "zoro",
        to: "luffy",
        msg: "Where is it? I was sleeping.",
        created_at: new Date()
    },
    {
        from: "nami",
        to: "robin",
        msg: "Let's go shopping at the next island!",
        created_at: new Date()
    },
    {
        from: "sanji",
        to: "nami",
        msg: "I’ll cook you something special today ❤️",
        created_at: new Date()
    },
    {
        from: "usopp",
        to: "franky",
        msg: "Let’s upgrade the Sunny!",
        created_at: new Date()
    }
];

chat.insertMany(allChat);

