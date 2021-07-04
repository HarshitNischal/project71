import React, {Component} from "react" ;
import {StyleSheet, Text, View, TouchableOpacity, TextInput, Image, KeyboardAvoidingView, ToastAndroid} from "react-native"
import * as firebase from 'firebase'

export default class loginScreen extends Component{
    constructor(){
        super()
        this.state={
            eMailID:'',
            password:''
        }
    }
    login=async(eMail,password)=>{
if(email&password){
    try{
        const response=await firebase.auth().signInWithEmailAndPassword(email,password)
        if(response){
            this.props.navigation.navigate('Transaction')
        }
    }
    catch(error){
        switch(error.code){
            case 'auth/user-not-found':alert('User Does Not Exist')
            break
            case 'auth/invalid-email':alert('Incorrect Email or Password')
            break
        }
    }
}
else{
    alert('Enter Email and Password (noob)')
}
    }
render(){
    return(
        <KeyboardAvoidingView behavior='padding'enabled style={styles.container}>
             <View>
             <Image
        source={require('../assets/booklogo.jpg')}
        style={{width:200,
        height:200}}
        />  
        <Text style={{textAlign:'center',
    fontSize:30}}>
            WillyApp
        </Text>
             </View>
             <View style={styles.inputView}>
          <TextInput
          style={styles.inputBox}
          placeHolder='abc@example.com'
         keyboardType='email-address'
          onChangeText={(Text)=>{
              this.setState({
                  eMailID:Text
              })
          }}
          />
           <TextInput
          style={styles.inputBox}
          placeHolder='Enter Password'
          secureTextEntry={true}
          onChangeText={(Text)=>{
              this.setState({
                  password:Text
              })
          }}
          />
          
        
           <TouchableOpacity onPress={()=>{this.login(this.state.eMailID,this.state.password)}} style={styles.scanButton}>
                 <Text style={styles.buttonText}>
                     Login :)
                 </Text>
             </TouchableOpacity>
             </View>
            
            
         
         </KeyboardAvoidingView>  
    )
}

}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    textStyle:{
        color:"black",
        fontSize:20,
   textDecorationLine:'underline'
    },
    buttonText:{fontSize:20},
    scanButton:{backgroundColor:"cyan",
   width:50,
   borderWidth:1.5,
   borderLeftWidth:0,
   },
   inputView:{
       flexDirection:"row",
       margin:20
   },
   inputBox:{
       width:200,
       hieght:40,
       borderWidth:1.5,
       borderRightWidth:0,
       fontSize:20
   }
   })