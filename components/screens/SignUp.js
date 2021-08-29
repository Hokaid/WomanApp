import React from 'react';
import { TouchableOpacity , TextInput, View, Image, Pressable, Text } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from '../styles/MainStyles';

const SignUp = ({ navigation }) => {
    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
    const [email, onChangeEmail] = React.useState("");
    const [password, onChangePassword] = React.useState("");
    const [confirmPassword, onChangeConfirmPassword] = React.useState("");
    const [username, onChangeUsername] = React.useState("");
    const [birthDate, onChangeBirthDate] = React.useState("");
    const showDatePicker = () => { setDatePickerVisibility(true); };
    const hideDatePicker = () => { setDatePickerVisibility(false); };
    const handleConfirm = (date) => {
      date = date.toISOString().substring(0, 10).replace(/-/g, "/");
      var datearray = date.split("/");
      var newdate = datearray[2] + '/' + datearray[1] + '/' + datearray[0];
      onChangeBirthDate(newdate);
      hideDatePicker();
    };
    const genders = ['Mujer', 'Hombre', 'Otro'];
    const [genderCode, onChangeGenderCode] = React.useState(0);

    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../../assets/women_logo.png')} />
        <View style={styles.signUpInputsContainer}>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require('../../assets/mail.png')}/>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput} placeholder="Email"
              onChangeText={onChangeEmail} value={email}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require('../../assets/padlock.png')}/>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              secureTextEntry={true} style={styles.textInput} placeholder="Contraseña"
              onChangeText={onChangePassword} value={password}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require('../../assets/padlock.png')}/>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              secureTextEntry={true} style={styles.textInput} placeholder="Confirmar Contraseña"
              onChangeText={onChangeConfirmPassword} value={confirmPassword}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.iconContainer}>
            <Image style={styles.icon} source={require('../../assets/profile-user.png')}/>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInput} placeholder="Username *"
              onChangeText={onChangeUsername} value={username}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.dateInputContainer}>
            <TextInput
              style={styles.textInput} placeholder="Fecha de nacimiento"
              editable={false} onChangeText={onChangeBirthDate} value={birthDate}
            />
          </View>
          <Pressable style={styles.dateButton} onPress={showDatePicker}>
            <Image style={styles.dateIcon} source={require('../../assets/calendar.jpg')}/>
          </Pressable>
        </View>
        <View style={styles.RBContainer}>
        {genders.map((data, key) => {
            return (
                <View style={styles.RBbtnContainer} key={key}>
                    {genderCode == key ?
                        <TouchableOpacity style={styles.RBbtn}>
                            <Image style={styles.RBimg} source={require("../../assets/rb_selected.png")}/>
                            <Text>{data}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={()=>{onChangeGenderCode(key)}} style={styles.RBbtn}>
                            <Image style={styles.RBimg} source={require("../../assets/rb_unselected.png")} />
                            <Text>{data}</Text>
                        </TouchableOpacity>
                    }
                </View>
            )
        })}
        </View>
        </View>
        <View style={styles.createContainer}>
            <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Crear Cuenta</Text>
            </Pressable>
        </View>
        <View style={styles.newAccountContainer}>
            <Text style={styles.forgotPassText} onPress={() => navigation.navigate('Login')}>
                Ya tengo una cuenta
            </Text>
        </View>
        <View>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
           />
        </View>
      </View>
    );
}
  
export default SignUp;