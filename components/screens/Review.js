import React from 'react';
import { View, Text, Image, Pressable, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';
import screenstyles from '../styles/ScreenStyles';

const Review = ({ navigation }) => {
  const [stars, setStars] = React.useState(0);
  const [review, onChangeReview] = React.useState('');

  return (
    <View>
      <View style={screenstyles.destinationHistoryBox}>
        <Pressable style={screenstyles.backButtonBox} onPress={() => navigation.navigate('Home')}>
          <Image style={screenstyles.backButtonImage} source={require('../../assets/left-arrow.png')} />
        </Pressable>
        <Text style={screenstyles.destinationHistoryText}>Reseña y calificación</Text>
      </View>
      <View style={screenstyles.settingOptionsContainer}>
          <View style={screenstyles.settingPrivacyBox}>
              <Text style={screenstyles.settingPrivacyTitle}>Califica esta app</Text>
          </View>
          <View style={screenstyles.starsContainer}>
              <Pressable onPress={() => setStars(1)}>
                {stars<1 && <Icon name='star' color='#b3b3b3' size={50}/>}
                {stars>=1 && <Icon name='star' color='#2ae8ac' size={50}/>}
              </Pressable>
              <Pressable onPress={() => setStars(2)}>
                {stars<2 && <Icon name='star' color='#b3b3b3' size={50}/>}
                {stars>=2 && <Icon name='star' color='#2ae8ac' size={50}/>}
              </Pressable>
              <Pressable onPress={() => setStars(3)}>
                {stars<3 && <Icon name='star' color='#b3b3b3' size={50}/>}
                {stars>=3 && <Icon name='star' color='#2ae8ac' size={50}/>}
              </Pressable>
              <Pressable onPress={() => setStars(4)}>
                {stars<4 && <Icon name='star' color='#b3b3b3' size={50}/>}
                {stars>=4 && <Icon name='star' color='#2ae8ac' size={50}/>}
              </Pressable>
              <Pressable onPress={() => setStars(5)}>
                {stars<5 && <Icon name='star' color='#b3b3b3' size={50}/>}
                {stars>=5 && <Icon name='star' color='#2ae8ac' size={50}/>}
              </Pressable>
          </View>
          <View style={screenstyles.starsMessageBox}>
              <Text style={screenstyles.starsMessageText}>Elige tu calificación entre 1 a 5 estrellas.</Text>
          </View>
          <View style={screenstyles.settingPrivacyBox}>
              <Text style={screenstyles.settingPrivacyTitle}>Escribe una reseña</Text>
          </View>
          <View style={screenstyles.reviewMessageBox}>
            <Text style={screenstyles.starsMessageText}>Comparte tu opinión acerca de la app.</Text>
          </View>
          <View style={screenstyles.reviewInputBox}>
            <TextInput style={screenstyles.reviewTextInput} onChangeText={onChangeReview}
                value={review} maxLength={600} multiline editable />
          </View>
          <View style={screenstyles.buttonContainer}>
            <Pressable style={screenstyles.button}>
                <Text style={screenstyles.buttonText}>Calificar</Text>
            </Pressable>
          </View>
      </View>
    </View>
  );
}

export default Review;