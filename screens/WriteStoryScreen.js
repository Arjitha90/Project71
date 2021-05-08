import React from 'react';
import {View , Text , StyleSheet , TextInput, TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements'
import * as firebase from 'firebase'
import db from '../config.js'

export default class WriteStoryScreen extends React.Component{
    constructor(props){
        super(props)
        this.state={
            title : '',
            author : '',
            Story : ''
        }
    }
    sumbitStory = async() => {
        db.collection()
    }
    render(){
        return(
            <View style = {styles.container}>
            <Header
            backgroundColor = {'orange'}
            centerComponent ={{
                text : 'Story Hub',
                style : {color : 'white' , fontSize : 20 , padding :20 }
            }}/>
            <View style = {styles.inputBox}>
                <TextInput
                style = {styles.inputText}
                placeholder = "Title"
                value = {this.state.title}
                />
            </View>
            <View style = {styles.inputBox}>
                <TextInput
                style = {styles.inputText}
                placeholder = "Author"
                value = {this.state.author}
                />
            </View>
            <View style = {styles.inputBox}>
                <TextInput 
                multiline = {true}
                style = {styles.inputText}
                placeholder = "writeStory"
                value = {this.state.title}
                />
            </View>
            <View>
                <TouchableOpacity style = {styles.submitButton}
                onPress = {async()=>{this.sumbitStory()}}>
                    <Text style = {styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
           </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems : 'center'
    },
    inputText:{
        width:200,
        height:40,
        borderWidth:3,
        borderRightWidth:0,
        fontSize:20,
        textAlign:'center'
    },
    inputBox:{
        flexDirection:'row',
        margin:20,
        justifyContent:'center',
        alignItems:'center'
    },
    submitButton:{
        backgroundColor:'yellow',
        width:100,
        height:50
    },
    submitText:{
        padding:10,
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    }
})