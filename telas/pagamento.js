import  React,{Component} from "react" ;
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
export default class Pagamento extends Component{
render(){
return(
<View style = {styles.fundo}>
<Image style = {styles.cigarra} 
source = {require("../cigarra.png")}></Image>
<TextInput style = {styles.textInput}
placeholder = "Número do cartão" 
placeholderTextColor = {"#B8C0B4"}></TextInput>
<TextInput style = {styles.textInput}
placeholder = "Nome do titular" 
placeholderTextColor = {"#B8C0B4"}></TextInput>
<TextInput style = {styles.textInput}
placeholder = "Validade"
placeholderTextColor = {"#B8C0B4"}
></TextInput>
<TextInput style = {styles.textInput}
placeholder = "Código de sergurança"
placeholderTextColor = {"#B8C0B4"}
></TextInput>
<TextInput style = {styles.textInput}
placeholder = "CPF"
placeholderTextColor = {"#B8C0B4"}
></TextInput>
<TouchableOpacity style = {styles.finalizarcompra}
onPress = {()=> {this.props.navigation.navigate("conclusao")}}>
<View style = {styles.posiçao}> 
<Image style = {styles.cadeado}
source = {require("../assets/cadeado.png")}
></Image>
<Text style = {styles.texto}
>Finalizar compra</Text>
</View>
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
width:"28%",
height:"6%",
borderColor:"#B8C0B4",
alignSelf:"center",
borderRadius:30,
textAlign:"center",
marginBottom:20,
},
finalizarcompra: {backgroundColor:"#B8C0B4",
width:"28%",
height:"5%",
alignSelf:"center",
borderRadius:30,
},
texto: {textAlign:"center",
color:"#3F493E",
alignItems:"center",
marginTop:10
},
posiçao: {flexDirection:"row",
},
cadeado: {width:40,
height:40,
marginLeft:100,
},


})