import * as admin from 'firebase-admin';
import { usersRef } from './User';

export default {
    async deleteUser(uid: string): Promise<void> {
        // const notificationRef = await notificationsRef.where('userId', '==', uid).get();
        // const batch = firestoreRef.batch();
        // Delete user images
        await admin
            .storage()
            .bucket()
            .deleteFiles({
                prefix: `customers/${uid}/`
            });
        //notificationRef.forEach((doc) => { batch.delete(doc.ref) });
        //await batch.commit();
        await admin.auth().deleteUser(uid);
        await usersRef.doc(uid).delete();
    }
};
