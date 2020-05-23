import mongoose from "mongoose";
import addUser from './mutations/addUser'

const mutations = {
    addUser(root: any, { _id, }: { _id: String },{ email }: { email: String }, { password }: { password: String }): Promise<mongoose.Document[]>,
} = {
    addUser,
}

export default mutations