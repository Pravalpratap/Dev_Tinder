const mongoose =require('mongoose');

const connectDB=async ()=>{
    await mongoose.connect("mongodb+srv://praval949:7459915530@cluster0.xyod69s.mongodb.net/devtinder");
};


module.exports={
    connectDB
}