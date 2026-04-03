const express=require('express')
const router=express.Router();


let users=[
    {
        id:1,
        name:"Rose",
        email:"rj45@gmail.com"
    },
      {
        id:2,
        name:"Neev",
        email:"rn16@gmail.com"
    },
      {
        id:3,
        name:"Jatin",
        email:"rj27@gmail.com"
    },
      {
        id:4,
        name:"pooja",
        email:"pj13@gmail.com"
    },
      {
        id:5,
        name:"Mickey",
        email:"mk3@gmail.com"
    }
]

router.get("/",(req,res)=>{
    res.json(users);
});

router.get('/:id',(req,res)=>{
    const user=users.find(u=>u.id===parseInt(req.params.id));
    if (!user) return res.status(404).send("User not Found");
    res.json(user);
});


router.post('/',(req,res)=>{
    const {name,email}=req.body;
    const newUser = {
        id:users.length + 1,
        name,
        email};
    users.push(newUser);
    res.status(201).json(newUser);
});
module.exports=router;