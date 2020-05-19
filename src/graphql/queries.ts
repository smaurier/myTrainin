import mongoose from "mongoose";
import getAccounts from './queries/getAccounts'

// tslint:disable-next-line: max-line-length
const queries: {
    getAccounts(root: any, { _id, }: { _id: string }): Promise<mongoose.Document[]>,
} = {
    getAccounts,
}

export default queries
