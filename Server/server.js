import { connectToMongoDb } from "./config/db.js";
import app from "./app.js";


app.listen(process.env.PORT , async()=>{
    await connectToMongoDb();
    console.log(`server is running on this ${process.env.PORT}`)
})