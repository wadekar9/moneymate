import { Client, Functions, Account, Databases, ID, Query } from 'appwrite';
import Config from 'react-native-config';

const APP_WRITE_CLIENT = new Client();

APP_WRITE_CLIENT.setEndpoint(Config.API_ENDPOINT).setProject(Config.APP_WRITE_PROJECT_ID);

export const APP_WRITE_ACCOUNT = new Account(APP_WRITE_CLIENT);
export const APP_WRITE_DATABASE = new Databases(APP_WRITE_CLIENT);
export const APP_WRITE_QUERY = Query;