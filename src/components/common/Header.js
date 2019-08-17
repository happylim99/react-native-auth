// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        //paddingTop: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 100 },
        shadowOpacity: 10,
        //elevation for android
        elevation: 10
    },
    textStyle: {
        fontSize: 30
    }
};
//justifyContent: 'flex-end' //left bottom
//justifyContent: 'center' //left center
//justifyContent: 'flex-start' //left top
//justifyContent: 'space-between'
//justifyContent: 'space-around' //there are space on top and bottom

//alignItems: 'flex-start' //left-top
//alignItems: 'center' //center-top
//alignItems: 'flex-end' //right-top

// Make the component available to other parts of the app
export { Header };
