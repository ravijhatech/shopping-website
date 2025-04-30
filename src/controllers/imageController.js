// import Image from "../models/image.js";


// export const uploadImage = async (req,res)=>{
//     try {
//         const image = new Image({
//             imageUrl:req.file?.path,
//             public_id:req.file,
//         });
//         const res =await image.save();
//         console.log(imageUrl);
        
//         res.status(201).json({message:"Image uploaded sucessfully"});

//     } catch (error) {
//         res.status(500).json({error: error.message});
//     }
// };


