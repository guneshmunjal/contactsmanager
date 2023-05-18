const fetchModels = require("../models/Models");

exports.deletionContact = async (req,res) => {

    try {
        // in order to delete the contact 
        // we need to find the id and then delete that particular id from the database

        // first of  all we would have to fetch it from the body
        const{id}=req.params;
             const {name,phone} = req.body;

             console.log(id,name,phone);

             const remove = await fetchModels.findByIdAndDelete({
                _id:id
             });

                 console.log("the number from the contacts has been deleted",remove);                
        
                       if(!remove){
                        res.status(400).json({
                            message:"the contact has been removed",
                        })
                       }


        // second step is to remove the entry from the db


    } catch(error){
       
            res.status(404).json({
               message:"delete operation not successfull",
               error:error
            })
    
            
        }
    }

