import conf from '../conf/conf.js'
import { Client, Account, ID } from 'appwrite'

export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectid);
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){  //In frontend frameworks like React or Vue, form data is almost always stored as an object
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if( userAccount){
                return this.login({email, password})
            }else{
                return userAccount
            }
        }catch(error){
            console.error(error)
            throw error
        }
    }

    async login({email, password}){
        try{
            return await this.account.createEmailPasswordSession({email, password})
        }catch(error){
            console.error("login: ", error)
            throw error
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get()
        }catch(error){
            console.log("getCurrentUser: ", error)
        
        }
        return null;
    }

    async logout(){
        try{
            return await this.account.deleteSessions()
        }catch(error){
            console.error("logout: ", error)
        }
    }
}

const authService = new AuthService() //authService is an instance of AuthService class

export default authService