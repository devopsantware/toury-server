import { usersRef, UserType } from '../Users/User';

export default {
    async getToken(body: any): Promise<string | undefined> {
        if (body.userId) {
            const userDoc = await usersRef.doc(body.userId).get();
            const customer = userDoc.data() as UserType;
            return customer.deviceToken;
        }
        return undefined;
    }
};
