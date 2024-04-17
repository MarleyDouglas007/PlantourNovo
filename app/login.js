import React, { useState } from 'react';
import {Image, Pressable, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aqui você pode adicionar a lógica para autenticar o usuário
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
     
   
      <View style={styles.inputContainer}>

        <Image
        source={require('./img/logo.png')} // Caminho da sua imagem de logo
        style={styles.logo}
        />
        <View style={styles.inputs}>
        <Text style={styles.label}>Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail ou número de celular"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        </View>
  
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

            <View style={styles.logins}>  

                  <Pressable style={styles.loginsb} onPress={() => console.log('Botão pressionado')}>
                    <Image
                      source={require('./img/google.png')} // Caminho da sua imagem de logo
                      style={styles.imglogin}
                    />
                    <Text style={styles.text}>Entrar com Google</Text>
                  </Pressable>
                  <Pressable style={styles.loginsb} onPress={() => console.log('Botão pressionado')}>
                  <Image
                      source={require('./img/facebook.png')} // Caminho da sua imagem de logo
                      style={styles.imglogin}
                    />
                    <Text style={styles.text}>Entrar com o Facebook</Text>
                  </Pressable>
            </View>
            <View style={styles.entrada}>

                <Text style={styles.input2}>Esqueceu a senha</Text>
                <Text style={styles.input2}> Primeiro acesso</Text>
            
            </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#37A6F5'
      },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },

  inputs: {
    paddingBottom: 125,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    bottom : 35,
  },

  inputContainer: {
    height : '85%',
    justifyContent : 'center',
    alignItems: 'center',
    display:'flex',
    flexDirection: 'space-around',
    paddingTop: 70,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 20,
  },
  label: {
    left : 10,
    marginBottom: 5,
    color: '#000',
    textAlign:'justify',
  },
  input: {
    width: '95%',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1, // Apenas a borda inferior
    borderColor: '#999', // Cor da borda inferior
  },
  
  button: {
    width: '65%',
    height: 40,
    backgroundColor: '#37A6F5',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    bottom : 130
  },
  buttonText: {
    color: '#fff',

    fontWeight: 'bold',
  },

logo: {
  margin:0,
  padding : 0,
  width: 100, // Ajuste conforme necessário
  height: 100, // Ajuste conforme necessário
  resizeMode: 'contain', // Garante que a imagem seja dimensionada corretamente
  bottom: 50, // Adiciona espaço abaixo da imagem  
},
input2: {
  width: '45%',
  height: 22,
  marginBottom: 2,
  paddingHorizontal: 9,
  borderBottomWidth: 1, // Apenas a borda inferior
  borderColor: '#000000', // Cor da borda inferior
  color: '#000000',
  fontWeight: 'bold',
  padding:0
},

logins:{
  textAlign: 'left',
  bottom: 75,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  padding: 10,

},
loginsb:{
  margin: 10,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start', // Alinha o conteúdo ao início
  alignItems: 'center', // Alinha o conteúdo verticalmente
  width: '100%',
  padding: 10,
  borderWidth: 1, // Adiciona uma borda fina
  borderColor: '#000', // Cor da borda
  borderRadius: 25,
  backgroundColor: '#fff',
},
imglogin:{
  width: 25,
  height: 25,
  marginBottom :0,
  marginTop :0,
  marginRight :14,
  resizeMode: 'contain', // Garante que a imagem seja dimensionada corretamente
},

entrada:{
  margin: 0,
  height : 70,
}


});

