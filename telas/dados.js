import  React,{Component} from "react" ;
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
export default class Dados extends Component{
render(){
return(
<View style = {styles.fundo}>
<View style = {styles.posiçao}>
<Text style ={styles.pedido}>
Confirmação de pedido</Text>
<Image style = {styles.cartao} 
source = {require("../assets/entrega.png")}></Image>
</View>
<Text style = {styles.pedido2}
>Método de envio</Text> 
<View style = {styles.posiçao}>
<TextInput style = {styles.cep}
placeholder = "CEP" 
placeholderTextColor = {"#B8C0B4"}></TextInput>
<TextInput style = {styles.cep}
placeholder = "BAIRRO" 
placeholderTextColor = {"#B8C0B4"}></TextInput>
</View>
<TextInput style = {styles.textInput}
placeholder = "Endereço"
placeholderTextColor = {"#B8C0B4"}
></TextInput>
<View style = {styles.posiçao}>
<TextInput style = {styles.cep}
placeholder = "Número"
placeholderTextColor = {"#B8C0B4"}
></TextInput>
<TextInput style = {styles.cep}
placeholder = "Complemento"
placeholderTextColor = {"#B8C0B4"}
></TextInput>
</View>
<View style = {styles.posiçao}>
<TextInput style = {styles.cep}
placeholder = "Cidade"
placeholderTextColor = {"#B8C0B4"}
></TextInput>
<TextInput style = {styles.cep}
placeholder = "Estado"
placeholderTextColor = {"#B8C0B4"}
></TextInput>
</View>
<TextInput style = {styles.textInput}
placeholder = "Destinatário"
placeholderTextColor = {"#B8C0B4"}
></TextInput>
<TouchableOpacity style = {styles.entrar}
onPress = {()=> {this.props.navigation.navigate("pagamento")}}>
<Text style = {styles.texto}
>Ir para o pagamento</Text>
</TouchableOpacity>
</View>
)
}
}
const styles = StyleSheet.create({
fundo: {flex:1,
backgroundColor:"#3F493E"
},
cartao: {width:50,
height:50,
alignSelf:"center",
marginTop:14,
marginLeft:10
},
textInput: {borderWidth:4,
width:"28%",
height:"6%",
borderColor:"#B8C0B4",
alignSelf:"center",
borderRadius:30,
textAlign:"center",
marginBottom:20,
marginLeft: 21
},
entrar: {backgroundColor:"#B8C0B4",
width:"28%",
height:"6%",
alignSelf:"center",
borderRadius:30,
marginLeft:21
},
texto: {textAlign:"center",
color:"#3F493E",
alignItems:"center",
marginTop:5
},
novaconta: {textAlign:"center",
color:"white",
fontWeight:"bold",
textDecorationLine:"underline",
marginTop:7},

posiçao: {flexDirection: "row",
alignSelf:"center"},

pedido: {color:"#B8C0B4",
fontSize:20,
marginTop:35,
fontWeight:"bold",},

pedido2: {color:"#B8C0B4",
fontSize:20,
marginTop:35,
fontWeight:"bold",
marginLeft:210,
marginBottom:10},

cep: {width: 170,
height: 40,
borderWidth: 4,
borderColor: "#B8C0B4",
borderRadius: 30,
textAlign: "center",
marginBottom: 15,
marginLeft:25}


})