import mongoose from "mongoose";

export const connectToMongoDb = ()=>{
    try{
        const response = mongoose.connect(process.env.MONGO_URL);
        if(!response){
                console.log("mongo db connection error")
        }
        console.log(`mongoDB connected successfully ${process?.env?.MONGO_URL}`)
    }
    catch(error){

        console.log(error)
    }
}
