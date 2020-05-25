import mongoose from "mongoose";
import { userModel } from "../../database/userCollection";

const uri = `mongodb+srv://${process.env.DB_HOST_ATLAS}:${process.env.DB_PASSWORD}@${process.env.DB_ADRESS}/${process.env.DB_NAME}?retryWrites=true&w=majority`

const addUser = async (root: any, { _id }: { _id: String },{ email }: { email: String }, { password }: { password: String } ): Promise<mongoose.Document[]> => {
    console.log('mutation in progress')
    const database = mongoose.connection
    // handle errors
    database.on('error', console.error.bind(console, 'connection error:'));
    // open the connection
    await database.openUri(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    // exemple of query : SELECT * from ACCOUNTS where id = args // exemple to set in query args : 5ca4bbc7a2dd94ee58162a49
    const mutation: mongoose.Document[] = await userModel.updateOne({ _id: _id }, { email: email }, { password: password }, function(err, res) {
    // Updated at most one doc, `res.modifiedCount` contains the number
    // of docs that MongoDB updated
    });

    /*
    const myNewDocument = new userModel()
    myNewDocument.save()
    */

    // close the connection
    await database.close()
    console.log('mutation terminée')

}

export default addUser