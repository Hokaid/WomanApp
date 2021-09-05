import React from 'react';
import { View, Text, Pressable, TextInput, FlatList } from 'react-native';
import screenstyles from '../styles/ScreenStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const DATA = [
    { id: '0', name: 'Maria', time: '10:31 AM', desc:'Actos contra la propiedad solamente', address: 'Jr Huiracocha 1755 - Jesus Maria'},
    { id: '1', name: 'Amelia', time: '9:46 AM', desc:'Actos contra la propiedad que entraña la dignidad', address: 'Jr Huiracocha 1755 - Jesus Maria'},
    { id: '2', name: 'Danna', time: '9:46 AM', desc:'Actos contra la propiedad solamente', address: 'Jr Huiracocha 1755 - Jesus Maria'},
    { id: '3', name: 'Alejandra', time: '9:46 AM', desc:'Actos contra la propiedad solamente', address: 'Jr Huiracocha 1755 - Jesus Maria'},
    { id: '4', name: 'Pilar', time: '9:46 AM', desc:'Actos contra la propiedad solamente', address: 'Jr Huiracocha 1755 - Jesus Maria'}
];

const Item = ({ item }) => (
    <View style={screenstyles.alertItemContainer}>
        <View style={screenstyles.alertPhotoContainer}>
            <View style={screenstyles.alertPhotoImage}></View>
        </View>
        <View style={screenstyles.alertItemInfoBox}>
            <View style={screenstyles.alertItemPrimaryInfo}>
                <Text style={screenstyles.alertItemNameText}>{item.name}</Text>
                <Text style={screenstyles.alertItemTimeText}>{item.time}</Text>
            </View>
            <Text numberOfLines={1} style={screenstyles.alertItemTimeText}>{item.desc}</Text>
            <Text numberOfLines={1} style={screenstyles.alertItemTimeText}>{item.address}</Text>
        </View>
    </View>
);

const Alerts = ({ navigation }) => {
  const renderItem = ({ item }) => (<Item item={item} />);

  return (
    <View style={screenstyles.screenContainer}>
      <View style={screenstyles.alertsHeaderBox}>
        <Text style={screenstyles.alertsHeaderText}>ALERTAS GENERADAS</Text>
        <Pressable style={screenstyles.alertsLogout} onPress={() => navigation.navigate('AdminLogin')}>
            <MaterialCommunityIcons name="logout-variant" size={40} color="#01112e" />
        </Pressable>
      </View>
      <View style={screenstyles.alertsMessageBox}>
        <Text style={screenstyles.alertsMessageText}>Alertas del día de hoy</Text>
      </View>
      <View style={screenstyles.alertsSearchContainer}>
        <View style={screenstyles.alertsSearchBox}>
            <View style={screenstyles.alertsSearchIcon}>
                <MaterialCommunityIcons name="magnify" size={20} color="#c4c4c4" />
            </View>
            <TextInput style={screenstyles.alertsSearchTextInput} 
                placeholder="Distrito" ></TextInput>
        </View>
      </View>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  );
}

export default Alerts;