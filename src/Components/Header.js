import React from 'react';
import {
    Text,
    View
} from 'react-native';
import {
    Constants
} from 'expo';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.textShown}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20,
    },
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        height: 60,
        paddingTop: Constants.statusBarHeight,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    }
};

export {Header};

