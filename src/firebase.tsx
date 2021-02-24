import * as firebase from "firebase";
import {Alert} from "react-native";

export async function register(email, password, navigation) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);

    navigation.navigate('LoginScreen');
    Alert.alert("Successfully Registered!", "You can sign in now");
  } catch (err) {
    Alert.alert("Fail to register...", err.message);
  }
}

export async function logIn(email, password, navigation) {
  try {
      console.log(email);
      console.log(password);
   await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
    
      navigation.navigate('Dashboard');
  } catch (err) {
    Alert.alert("Failed to sign in", err.message);
  }
}

export async function logOut(navigation) {
  try {
    await firebase.auth().signOut();
    navigation.navigate('LoginScreen');
  } catch (err) {
    Alert.alert('Failed to log out', err.message);
  }
}