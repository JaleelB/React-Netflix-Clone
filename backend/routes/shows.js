const router = require("express").Router();
const Show = require("../models/Show");
const verifyAccessToken = require("../utils/verifyAccessToken");

//create/add show method
// router.post("/", verifyAccessToken, async (request, response)=>{

//     const newShow = new Show(request.body);
    
//     try{
//         const savedShow = await newShow.save();
//         response.status(201).json(savedShow)
//     }catch(error){ response.status(500).json(error) }
// })

router.post("/", verifyAccessToken, async (request, response)=>{

    const newShow = new Show(request.body);
    
    try{
        const savedShow = await newShow.save();
        response.status(201).json(savedShow)
    }catch(error){ response.status(500).json(error) }
})

//delete method
router.delete("/:id", verifyAccessToken, async (request, response)=>{

    const showID = await Show.findOne({ id: request.params.id })
    if(!showID) return response.status(401).json("Cannot delete show as it doesn't exist!");

    try{
        console.log(showID)
        await Show.findByIdAndDelete(request.params.id);
        response.status(201).json("Show deleted.");
    }catch(error){
        response.status(500).json(error);
    }
})

//get all shows method
// router.get("/find/:id", verifyAccessToken,  async (request, response)=>{

//     try{
 
//         const user = await User.findById(request.params.id)
//         const {password, ...userDetails} = user._doc;
//         response.status(200).json(userDetails);

//     }catch(error){ response.status(500).json(error);  }
    
// })

module.exports = router;