import React from 'react';
import {View , StyleSheet , Text} from 'react-native';

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>Read your story</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container :{
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})