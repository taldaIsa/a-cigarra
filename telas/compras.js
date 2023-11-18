import  React,{Component} from "react" ;
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
export default class Compras extends Component{
render(){
return(
<View style = {styles.fundo}>
<TouchableOpacity onPress = {()=> {this.props.navigation.navigate("dados")}}>
<Image style = {styles.sacola}
source = {require("../sacola.png")}></Image>
</TouchableOpacity>
<Image style = {styles.cigarra} 
source = {require("../cigarra.png")}></Image>
<View style = {styles.fila}>
<View style = {styles.orgcm}>
<Text style = {styles.text2}>
Casaco marrom</Text>
<Image style = {styles.casaco}
source = {require("../assets/casaco.webp")}
></Image>
<Text style = {styles.text2}>
R$89,90</Text>
</View>
<View style = {styles.orgcb}>
<Text style = {styles.text2}>
Calça branca</Text>
<Image style = {styles.calça}
source = {require("../assets/calça.webp")}
></Image>
<Text style = {styles.text2}>
R$130,00</Text>
</View>
<View style = {styles.orgcc}>
<Text style = {styles.text}>
Cropped cinza com manga</Text>
<Image style = {styles.cropped}
source = {require("../assets/cropped.webp")}
></Image>
<Text style = {styles.text}>
R$39,90</Text>
</View>
</View>
<View style = {styles.fila2}>
<View style = {styles.orgmp}>
<Text style = {styles.text2}> 
Mocassim preto</Text>
<Image style = {styles.mocassim}
source = {require("../assets/mocassim.jpeg")}
></Image>
<Text style = {styles.text2}>
R$119,00</Text>
</View>
<View style = {styles.orgsl}>
<Text style = {styles.text2}>
Saia longa</Text>
<Image style = {styles.saia}
source = {require("../assets/saia.webp")}
></Image>
<Text style = {styles.text2}>
R$90,00</Text>
</View>
<View style = {styles.orgvp}>
<Text style = {styles.text}>
Vestido preto</Text>
<Image style = {styles.vestido}
source = {require("../assets/vestido.jpg")}
></Image>
<Text style = {styles.text}>
R$79,90</Text>
</View>
</View>
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
casaco: {width:300,
height:320,
marginRight:100,
borderWidth:15,
borderColor:"gray",
},
calça: {width:300,
height:320,
borderWidth:15,
borderColor:"gray",
},
cropped: {width:300,
height:320,
marginLeft:100,
borderWidth:15,
borderColor:"gray",
},
mocassim: {width:300,
height:320,
marginRight:100,
borderWidth:15,
borderColor:"gray",
},
saia: {width:300,
height:320,
borderWidth:15,
borderColor:"gray",
},
vestido: {width:300,
height:320,
marginLeft:100,
borderWidth:15,
borderColor:"gray",
},
fila: {flexDirection:"row",
alignSelf:"center", 
marginBottom:100},

fila2: {flexDirection:"row", alignSelf:"center"},

orgcm:{flexDirection:"column"},
orgcb:{flexDirection:"column"},
orgcc:{flexDirection:"column"},
orgmp:{flexDirection:"column"},
orgsl:{flexDirection:"column"},
orgvp:{flexDirection:"column"},

text: {paddingLeft:100, 
fontSize:18,
color:"white"},

text2: {fontSize:18,
color:"white"},

sacola: {width:50,
height:70,
marginLeft:1250}







})