import { callbackify } from "util";

const firebase = require("firebase");

var config = {
  apiKey: null,
  authDomain: "bfc-inventory-dev.firebaseapp.com",
  databaseURL: "https://bfc-inventory-dev.firebaseio.com/",
  storageBucket: "bfc-inventory-dev.appspot.com",
};

firebase.initializeApp(config);

var database = firebase.database();

export const FirebaseHelper = {
  addCategory: function addCategory(name: string) {
    database.ref("category").push({
      name: name,
      user: "jfolk",
    });
  },
};
