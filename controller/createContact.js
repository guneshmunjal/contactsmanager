const fetchModel = require("../models/Models");


exports.contactCreation = async (req,res)=>{

    try {
        // first of all we need to fetch the data from the body
           console.log("gdgg");
        const {name,phone} = req.body;
        
        console.log(name,phone);
        // make a new entry 

        const newEntry = await fetchModel.create({name,phone}); // isme await isliye likha  kyunki db ke saath interaction hai
        console.log(newEntry,phone,name);

        if(phone.length != 10){
            res.status(404).json({
                success:false,
                message:"the number you have entered is not valid . please enter a 10 digit number"
            })

        }

    } catch (error) {
        console.log(error);
        
        res.status(404).json({
            success:false,
            message:`there is an error while creating the contact ${error}`
        })
    }

}