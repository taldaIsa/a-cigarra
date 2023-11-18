import  React,{Component} from "react" ;
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
export default class Conclusao extends Component{
render(){
return(
<View style = {styles.fundo}>
<Image style = {styles.cigarra} 
source = {require("../assets/confere.png")}></Image>
<Text style = {styles.texto}
>Sua compra foi finalizada com sucesso!</Text>
<Text style = {styles.texto}
>Seu pedido será encaminhado em breve!</Text>
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

texto: {textAlign:"center",
color:"#B8C0B4",
alignItems:"center",
marginTop:10,
fontSize:30,
},
})