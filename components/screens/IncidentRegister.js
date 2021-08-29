import React from 'react';
import { View, Text, Image, Pressable, TextInput, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import {Picker} from '@react-native-picker/picker';
import screenstyles from '../styles/ScreenStyles';
import styles from '../styles/MainStyles';

const IncidentRegister = ({ navigation }) => {
  const [selectedCategory, setSelectedCategory] = React.useState("-");
  const [selectedType, setSelectedType] = React.useState("-");
  const questionOptions = ['Sí', 'No'];
  const [isMitigated, onChangeIsMitigated] = React.useState(1);
  const [comment, onChangeComment] = React.useState('');

  return (
    <View>
      <View style={screenstyles.destinationHistoryBox}>
        <Pressable style={screenstyles.backButtonBox} onPress={() => navigation.navigate('Home')}>
          <Image style={screenstyles.backButtonImage} source={require('../../assets/left-arrow.png')} />
        </Pressable>
        <Text style={screenstyles.destinationHistoryText}>Registrar incidencia</Text>
      </View>
      <View style={screenstyles.settingOptionsContainer}>
        <View style={screenstyles.incidentPlaceContainer}>
            <View style={screenstyles.incidentPlaceIcon}>
              <Icon name="place" color="white" size={28}/>
            </View>
            <View style={screenstyles.incidentPlaceLabel}>
              <Text style={screenstyles.incidentPlaceText}>Av. Ricardo Tizón y Bueno 646, Jesús María, Perú</Text>
            </View>
        </View>
        <View style={screenstyles.incidentContextBox}>
          <Text style={screenstyles.incidentPlaceText}>Seleccione el incidente que presenció o sufrió. De manera opcional, añada un comentario respecto al suceso.</Text>
        </View>
        <View style={screenstyles.incidentCategoryBox}>
          <View style={screenstyles.incidentCategoryLabel}>
              <Image style={screenstyles.backButtonImage} source={require('../../assets/warning.png')} />
              <Text style={screenstyles.incidentCategoryText}>Seleccione la categoría: </Text>
          </View>
          <View style={screenstyles.incidentCategorySelect}>
            <Picker selectedValue={selectedCategory}
                onValueChange={(itemValue, itemIndex) => setSelectedCategory(itemValue)}>
                <Picker.Item label="-" value="" />
                <Picker.Item label="Violencia" value="Violence" />
                <Picker.Item label="Otro" value="Other" />
            </Picker>
          </View>
        </View>
        <View style={screenstyles.incidentTypeBox}>
          <View style={screenstyles.incidentTypeLabel}>
              <Text style={screenstyles.incidentTypeText}>Seleccione el delito o incidencia: </Text>
          </View>
          <View style={screenstyles.incidentCategorySelect}>
            <Picker selectedValue={selectedType}
                onValueChange={(itemValue, itemIndex) => setSelectedType(itemValue)}>
                <Picker.Item label="-" value="" />
                <Picker.Item label="Agresión" value="Attack" />
                <Picker.Item label="Violación" value="Rape" />
            </Picker>
          </View>
        </View>
        <View style={screenstyles.incidentQuestionBox}>
          <Image style={screenstyles.backButtonImage} source={require('../../assets/question.png')} />
          <Text style={screenstyles.incidentQuestionText}>¿La incidencia fue mitigada oportunamente?</Text>
        </View>
        <View style={screenstyles.questionRBContainer}>
            <View style={styles.RBContainer}>
            {questionOptions.map((data, key) => {
            return (
                <View style={styles.RBbtnContainer} key={key}>
                    {isMitigated == key ?
                        <TouchableOpacity style={styles.RBbtn}>
                            <View style={screenstyles.questionRBBox}>
                                <Image style={screenstyles.RBimg} source={require("../../assets/rb_selected.png")}/>
                            </View>
                            <Text style={screenstyles.questionRBText}>{data}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={()=>{onChangeIsMitigated(key)}} style={styles.RBbtn}>
                            <View style={screenstyles.questionRBBox}>
                                <Image style={screenstyles.RBimg} source={require("../../assets/rb_unselected.png")} />
                            </View>
                            <Text style={screenstyles.questionRBText}>{data}</Text>
                        </TouchableOpacity>
                    }
                </View>
            )
            })}
            </View>
        </View>
        <View style={screenstyles.incidentCommentBox}>
          <Image style={screenstyles.backButtonImage} source={require('../../assets/comment.png')} />
          <Text style={screenstyles.incidentCommentText}>Comentario (Opcional): </Text>
        </View>
        <View style={screenstyles.incidentInputBox}>
          <TextInput style={screenstyles.reviewTextInput} onChangeText={onChangeComment}
              value={comment} maxLength={600} multiline editable />
        </View>
        <View style={screenstyles.incidentButtonsContainer}>
            <Pressable style={screenstyles.incidentSubmitButton}>
                <Text style={screenstyles.incidentSubmitButtonText}>Ingresar</Text>
            </Pressable>
            <Pressable style={screenstyles.incidentCancelButton} onPress={() => navigation.navigate('Home')}>
                <Text style={screenstyles.incidentCancelButtonText}>Cancelar</Text>
            </Pressable>
        </View>
      </View>
    </View>
  );
}

export default IncidentRegister;