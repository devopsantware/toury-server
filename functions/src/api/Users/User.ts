import * as admin from 'firebase-admin';

export interface ProfileType {
    firstname: string;
    lastname: string;
    name: string;
    photo?: string;
}

export interface UserType {
    uid: string;
    appVersion: string;
    createdAt: Date;
    deviceToken: string;
    email: string;
    profile: ProfileType;
}

export const USERS_COLLECTION = 'users';

export const usersRef = admin.firestore().collection(USERS_COLLECTION);
