

import mongoose from "mongoose";


const conectarDB = async () => {
    try{
        mongoose.set("strictQuery", false);

        const connection = await mongoose.connect(process.env.MONGO_URI);

        const url = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`Mongo db conectado en ${url}`)

    } catch (error){
        console.log(`error: ${error.message} `);
        process.exit(1)
    }
}

export default conectarDB;
