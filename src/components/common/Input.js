import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput style={inputStyle}
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            autoCorrect={false}
            value={value}
            onChangeText={onChangeText}
            />
        </View>
    );
};
//secureTextEntry = true
const styles = {
    inputStyle: {
        //backgroundColor: '#E0E0E0',
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop: 0,
        paddingBottom: 0,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    labelStyle: {
        //backgroundColor: '#E0E0E0',
        fontSize: 18,
        paddingLeft: 20,
        paddingTop: 0,
        paddingBottom: 0,
        flex: 1
    },
    containerStyle: {
        //backgroundColor: '#F0F0F0',
        //height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
}

export { Input };