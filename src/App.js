import firebase from 'firebase';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentDidMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBCTGiP_jUkxYJpLXFM3oTXIvWefTXfxwY",
            authDomain: "react-native-auth-ba411.firebaseapp.com",
            databaseURL: "https://react-native-auth-ba411.firebaseio.com",
            projectId: "react-native-auth-ba411",
            storageBucket: "",
            messagingSenderId: "487065788103",
            appId: "1:487065788103:web:d65625f85773efa6"
        });
    }
    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}

export default App;