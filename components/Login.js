import React from 'react';
import { View, Image,TextInput,Text, Pressable} from 'react-native';
import styles from './Styles';

const Login = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/women_logo.png')} />
      <View style={styles.inputsContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require('../assets/mail.png')}/>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput} onChangeText={onChangeEmail}
              value={email} placeholder="Email"
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require('../assets/padlock.png')}
            />
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              secureTextEntry={true} style={styles.textInput}
              onChangeText={onChangePassword} value={password} placeholder="Contraseña"
            />
          </View>
        </View>
      </View>
      <View style={styles.forgotPassContainer}>
        <Text style={styles.forgotPassText} onPress={() => navigation.navigate('ForgotPassw')}>
          ¿Olvidaste tu contraseña?
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Ingresar</Text>
        </Pressable>
      </View>
      <View style={styles.newAccountContainer}>
        <Text style={styles.forgotPassText} onPress={() => navigation.navigate('SignUp')}>
          Crear nueva cuenta
        </Text>
      </View>
    </View>
  );
}

export default Login;