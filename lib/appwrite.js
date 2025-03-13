import { ID, Account, Client, Avatars, Databases } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.hooman.aora',
    projectId: '67cd491e0008fa083a34',
    databaseId: '67cd55fc001fcc1ffac9',
    userCollectionId: '67cd5631001ced89805f',
    videoCollectionId: '67cd56e5001a8bbe9a66',
    storageId: '67cd5c30002ccfafefef'
}

const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = (email, password,username) => {
    try{
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )
        if(!newAccount) throw Error;
        const avatarUrl = avatars.getInitials(username);
        await signIn(email, password);
        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )
        return newUser;
    }catch(error){
        console.log(error);
        throw new Error(error);
    }
}

export async function signIn(email, password) {
    try{
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    }catch(error){
        throw new Error(error);
    }
}



