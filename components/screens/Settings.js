import React from 'react';
import { View, Text, Image, Pressable, Switch } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import screenstyles from '../styles/ScreenStyles';

const Settings = ({ navigation }) => {
  const [isPrivate, setIsPrivate] = React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState();
  const toggleSwitch = () => setIsPrivate(previousState => !previousState);

  return (
    <View>
      <View style={screenstyles.destinationHistoryBox}>
        <Pressable style={screenstyles.backButtonBox} onPress={() => navigation.navigate('Home')}>
          <Image style={screenstyles.backButtonImage} source={require('../../assets/left-arrow.png')} />
        </Pressable>
        <Text style={screenstyles.destinationHistoryText}>Configuración y privacidad</Text>
      </View>
      <View style={screenstyles.settingOptionsContainer}>
        <View style={screenstyles.settingPrivacyBox}>
            <Text style={screenstyles.settingPrivacyTitle}>Privacidad</Text>
        </View>
        <View style={screenstyles.settingPrivacyContainer}>
            <View style={screenstyles.settingPrivacyLabel}>
                <Text style={screenstyles.settingPrivacyText}>¿Mantener foto visible?</Text>
            </View>
            <View style={screenstyles.settingSwitchContainer}>
                <Switch trackColor={{ false: "#767577", true: "#2ae8ac" }}
                    thumbColor={isPrivate ? "#19cf95" : "#f4f3f4"} ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch} value={isPrivate}
                />
            </View>
        </View>
        <View style={screenstyles.settingLanguageBox}>
            <Text style={screenstyles.settingLanguageTitle}>Idioma</Text>
        </View>
        <View style={screenstyles.settingLanguageSelect}>
            <Picker selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}>
                <Picker.Item label="Español" value="Spanish" />
                <Picker.Item label="English" value="English" />
            </Picker>
        </View>
      </View>
    </View>
  );
}

export default Settings;