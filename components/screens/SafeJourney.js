import React from 'react';
import { View, Text, Pressable, Image, TextInput } from 'react-native';
import screenstyles from '../styles/ScreenStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Icon } from 'react-native-elements';

const SafeJourney = () => {
  const [destiny, onChangeDestiny] = React.useState("");
  const [isWalking, onChangeIsWalking] = React.useState(false);
  const [isBiking, onChangeIsBiking] = React.useState(false);
  const eraseDestiny = () => { onChangeDestiny(""); };
  const chooseWalk = () => { onChangeIsWalking(true); onChangeIsBiking(false); };
  const chooseBike = () => { onChangeIsBiking(true); onChangeIsWalking(false); };

  return (
    <View>
      <View style={screenstyles.destinationHistoryBox}>
        <Pressable style={screenstyles.backButtonBox} onPress={() => navigation.navigate('Home')}>
          <Image style={screenstyles.backButtonImage} source={require('../../assets/left-arrow.png')} />
        </Pressable>
        <Text style={screenstyles.destinationHistoryText}>Viaje seguro</Text>
      </View>
      <View style={screenstyles.inputsContainer}>
        <View style={screenstyles.safeJourneyInput}>
          <TextInput style={screenstyles.safeJourneyTextInput} onChangeText={onChangeDestiny}
            value={destiny} placeholder="¿A dónde vas?" placeholderTextColor="#a7aba8"/>
          <Pressable style={screenstyles.safeJourneyCancelButton} onPress={eraseDestiny}>
            <Image style={screenstyles.safeJourneyCancelInput} source={require('../../assets/letter-x.png')} />
          </Pressable>
        </View>
        <View style={screenstyles.chooseWayContainer}>
          {isWalking ? <Pressable style={screenstyles.chooseWayClickedButton}>
            <View style={screenstyles.chooseWayIconContainer}>
              <MaterialCommunityIcons name="walk" size={30} color="#14f7a8" />
            </View>
            <Text style={screenstyles.chooseWayClickedText}>A pie</Text>
          </Pressable> : <Pressable style={screenstyles.chooseWayButton} onPress={chooseWalk}>
            <View style={screenstyles.chooseWayIconContainer}>
              <MaterialCommunityIcons name="walk" size={30} color="white" />
            </View>
            <Text style={screenstyles.chooseWayText}>A pie</Text>
          </Pressable>}
          {isBiking ? <Pressable style={screenstyles.chooseWayClickedButton}>
            <View style={screenstyles.chooseWayIconContainer}>
              <MaterialCommunityIcons name="bicycle" size={30} color="#14f7a8" />
            </View>
            <Text style={screenstyles.chooseWayClickedText}>Bicicleta</Text>
          </Pressable> : <Pressable style={screenstyles.chooseWayButton} onPress={chooseBike}>
            <View style={screenstyles.chooseWayIconContainer}>
              <MaterialCommunityIcons name="bicycle" size={30} color="white" />
            </View>
            <Text style={screenstyles.chooseWayText}>Bicicleta</Text>
          </Pressable>}
        </View>
      </View>
      <View style={screenstyles.safeJourneyMapContainer}>
        <Image style={screenstyles.safeJourneyMapImage} source={require('../../assets/map.jpg')} />
      </View>
      {(isWalking || isBiking) && <View style={screenstyles.safeRouteContainer}>
        <View style={screenstyles.safeRouteCard}>
          <View style={screenstyles.safeRouteTitleBox}>
            <Text style={screenstyles.safeRouteTitleText}>Ruta segura identificada</Text>
          </View>
          <View style={screenstyles.safeRouteLevelBox}>
            <Icon name='place' color='#14f7a8' size={28} />
            <Text style={screenstyles.safeRouteLevelText}>2.4/10</Text>
            <Text style={screenstyles.safeRouteLevelLabel}>Nivel de inseguridad de la ruta</Text>
          </View>
          <View style={screenstyles.safeRouteOptionsBox}>
            <Text style={screenstyles.safeRouteTimeInfo}>32 mins (2.1 Km)</Text>
            <Pressable style={screenstyles.safeRouteStartButton}>
              <Text style={screenstyles.safeRouteStartText}>Iniciar Viaje</Text>
            </Pressable>
          </View>
        </View>
      </View>}
    </View>
  );
}

export default SafeJourney;