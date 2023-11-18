import  React,{Component} from "react" ;
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
export default class Login extends Component{
render(){
return(
<View style = {styles.fundo}>
<Image style = {styles.cigarra} 
source = {require("../cigarra.png")}></Image>
<TextInput style = {styles.textInput}
placeholder = "NOME" 
placeholderTextColor = {"#B8C0B4"}></TextInput>
<TextInput style = {styles.textInput}
placeholder = "SOBRENOME" 
placeholderTextColor = {"#B8C0B4"}></TextInput>
<TextInput style = {styles.textInput}
placeholder = "E-MAIL"
placeholderTextColor = {"#B8C0B4"}
></TextInput>
<TextInput style = {styles.textInput}
placeholder = "SENHA"
placeholderTextColor = {"#B8C0B4"}
></TextInput>
<TouchableOpacity style = {styles.entrar}
>
<Text style = {styles.texto}
>CADASTRAR</Text>
</TouchableOpacity>
</View>
)
}
}
const styles = StyleSheet.create({
fundo: {flex:1,
backgroundColor:"#3F493E"
},
cigarra: {width:300,
height:300,
alignSelf:"center"
},
textInput: {borderWidth:4,
width:"70%",
height:"6%",
borderColor:"#B8C0B4",
alignSelf:"center",
borderRadius:30,
textAlign:"center",
marginBottom:20,
},
entrar: {backgroundColor:"#B8C0B4",
width:"40%",
height:"5%",
alignSelf:"center",
borderRadius:30,
},
texto: {textAlign:"center",
color:"#3F493E",
alignItems:"center",
marginTop:10
},
novaconta: {textAlign:"center",
color:"white",
fontWeight:"bold",
textDecorationLine:"underline",
marginTop:7}


})