import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
	const [alcool, setAlcool] = useState("20");
	const [gasolina, setGasolina] = useState("3");
	const [resultado,setResultado] =useState("");
	function dividir (){
		let r= parseFloat(alcool) / parseFloat(gasolina);
		setResultado(r);
		
		if(r>=0.7){
			setResultado("Gasolina "+r);
		}else{
			setResultado("Alcool "+ r);
		}

	}

  return (
    <View style={styles.container}>
		<View style={styles.bloco}>
		  <Text style={styles.titulo}>COMBUSTÍVEL</Text> 
		</View>
    
	  	<View style={styles.bloco}>
		  <Text>Alcool</Text>
			  <TextInput style={styles.input}
				  value={alcool}
				  onChangeText = {(valor)=>setAlcool(valor)}
				  keyboardType="numeric"
				/>
		  </View>
		  <View style={styles.bloco}>
		  <Text>Gasolina</Text>
			  <TextInput style={styles.input}
				  value={gasolina}
				  onChangeText = {(valor)=>setGasolina(valor)}
				  keyboardType="numeric"
				  />
		  </View>
		  <View style={styles.bloco}>
		  <TouchableOpacity 
			  style={styles.botao}
			  onPress={dividir}
			  >
			  <Text style={styles.textoBotao}>DIVIDIR</Text>
			  </TouchableOpacity>
		  </View>
		  <View style={styles.bloco}>
		  <Text style={styles.titulo}>
			  RESULTADO: {resultado}
			  </Text>
		  </View>
	</View>				
	 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	  backgroundColor: '#FF5733'
  },
	bloco:{
		marginTop:20,
		width:'80%',
		marginLeft:'10%'
	},
	titulo:{
		fontSize:30,
		textAlign:'center'
	},
	input:{
		borderWidth:2,
		fontSize:20,
		borderRadius:10
	},
	botao:{
		backgroundColor:'blue',
		borderRadius:10
	},
	textoBotao:{
		color: '#fff',
		textAlign:'center',
		fontSize:20
	}
});
