const fetchModels = require("../models/Models");


exports.updationContact = async (req,res) =>{
    try {
        // fetch it from the body both the id and other things required

        const {id} = req.params;
        const {name,phone} = req.body;

        console.log(id,name,phone);

        // now we need to update by using id

        const updation = await fetchModels.findByIdAndUpdate(id, {
            name: name,
            phone: phone
          }, {});
          
        console.log("nnln",updation);

        res.status(200).json({
            success:true,
            message:"updated successfully"
        })

     console.log(name,phone);

    } catch (error) {
        res.status(404).json({
            success:false,
            message:error
        })
    }
}