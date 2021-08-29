import React from 'react';
import { View, Image, Text, TextInput, Pressable} from 'react-native';
import styles from '../styles/MainStyles';

const ForgotPassw = ({ navigation }) => {
  const [email, onChangeEmail] = React.useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/women_logo.png')} />
      <View style={styles.signUpInputsContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>RESTABLECER CONTRASEÑA</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.longText}>Ingrese su dirección de correo electronico para solicitar un restablecimiento de contraseña</Text>
          </View>
      </View>
      <View style={styles.emailContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require('../../assets/mail.png')}/>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput 
              onChangeText={onChangeEmail} value={email}
              style={styles.textInput} placeholder="Email"
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Restablecer Contraseña</Text>
        </Pressable>
      </View>
      <View style={styles.newAccountContainer}>
        <Text style={styles.forgotPassText} onPress={() => navigation.navigate('Login')}>
          Regresar al Login
        </Text>
      </View>
    </View>
  );
}

export default ForgotPassw;