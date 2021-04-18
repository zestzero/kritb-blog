import firebase from 'firebase-admin';
import serviceAccount from 'credentials/service-account.json';
/**
 * Firebase service to initialize.
 * @return {class}.
 */
export class FirebaseService {
  /**
   * Constructor to initialize the service;
   * @return {App} firebase app
   */
  static App: firebase.app.App = firebase.apps.length === 0 ?
  firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount as any),
    databaseURL: process.env.databaseURL,
  }, process.env.projectId) : firebase.app(process.env.projectId);
}
