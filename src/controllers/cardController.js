
import fs from 'fs';
import {cloudinary }from '../services/cloudinary.js';
import image from '../models/image.js';



export const uploadCard = async (req, res) => {
    
  try {
    const { title,price, des } = req.body;
    const url =req.file.path;
    
   // const url = req.file ? `/uploads/${req.file.filename}` : '';
    const result = await cloudinary.uploader.upload(req.file.path);

    fs.unlinkSync(req.file.path); 

    const Image = new image({
       title:title,
       price:price,
       des:des,
       url: result.secure_url,
      public_id: result.public_id,
    });
console.log(Image);

    await Image.save();
    res.status(201).json({ message: 'Image uploaded!', image });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const FetchCard = async (req, res) => {
     const items = await image.find();
      res.json(items);

}