const mongoose  = require("mongoose")

const url = "mongodb+srv://NikhilAchari_Dbuser:NikhilAchari1234@cluster2.h3pzrss.mongodb.net/?appName=Cluster2"


const connectDb = async()=>{
    try {
        const conn = await mongoose.connect(url);
        console.log(`MongoDb connected: ${conn.connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDb;