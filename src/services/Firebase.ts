import firebase from 'firebase/app';
import 'firebase/auth';

import FirebaseKeys from '~/config/FirebaseKeys';

class Firebase {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(FirebaseKeys);
    }
  }

  async signIn() {
    firebase.auth().signInAnonymously();
  }
}

export default new Firebase();
