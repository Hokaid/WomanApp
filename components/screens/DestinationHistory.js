import React from 'react';
import { View, Text, Image, Pressable, FlatList } from 'react-native';
import screenstyles from '../styles/ScreenStyles';

const DATA = [
  {id: '1', date:'18/05/21', time:'05:42 p.m.', jr:'Jr. Tizón y bueno', av:'Av. Salaverry'},
  {id: '2', date:'15/05/21', time:'03:21 p.m.', jr:'Jr. Comandante Espinar', av:'Av. Brasil'},
  {id: '3', date:'13/05/21', time:'10:12 a.m.', jr:'Jr. Tizón y bueno', av:'Av. Ejercito'},
  {id: '4', date:'18/05/21', time:'05:42 p.m.', jr:'Jr. Tizón y bueno', av:'Av. Salaverry'},
  {id: '5', date:'15/05/21', time:'03:21 p.m.', jr:'Jr. Comandante Espinar', av:'Av. Brasil'},
  {id: '6', date:'13/05/21', time:'10:12 a.m.', jr:'Jr. Tizón y bueno', av:'Av. Ejercito'}
];

const Item = ({ item }) => (
  <View style={screenstyles.historyItemBox}>
    <View style={screenstyles.historyInfoBox}>
      <View style={screenstyles.historyDateBox}>
        <Text style={screenstyles.historyDateText}>{item.date}</Text>
        <Text style={screenstyles.historyDateText}>{item.time}</Text>
      </View>
      <View style={screenstyles.historyAddressBox}>
        <Text style={screenstyles.historyAddressText}>{item.jr}</Text>
        <Text style={screenstyles.historyAddressText}>-</Text>
        <Text style={screenstyles.historyAddressText}>{item.av}</Text>
      </View>
    </View>
    <View style={screenstyles.historyMapBox}>
      <Image style={screenstyles.historyMap} source={require('../../assets/maphistory.jpg')} />
    </View>
  </View>
);

const DestinationHistory = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Item item={item} />
  );

  return (
    <View style={screenstyles.screenContainer}>
      <View style={screenstyles.destinationHistoryBox}>
        <Pressable style={screenstyles.backButtonBox} onPress={() => navigation.navigate('Home')}>
          <Image style={screenstyles.backButtonImage} source={require('../../assets/left-arrow.png')} />
        </Pressable>
        <Text style={screenstyles.destinationHistoryText}>Historial de destinos</Text>
      </View>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  );
}

export default DestinationHistory;