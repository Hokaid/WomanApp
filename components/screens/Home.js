import React from 'react';
import { View, Image, TextInput, Text, Pressable, SafeAreaView} from 'react-native';
import styles from '../styles/MainStyles';
import { Icon } from 'react-native-elements';

const Home = ({ navigation }) => {
  const [search, onChangeSearch] = React.useState("");
  const [isMenuVisible, setMenuVisibility] = React.useState(false);
  const showSidebarMenu = () => { setMenuVisibility(true); };
  const hideSidebarMenu = () => { setMenuVisibility(false); };

  return (
    <SafeAreaView>
        <View>
            <Image style={styles.background} source={require('../../assets/map.jpg')} />
        </View>
        <View style={styles.headerContainer}>
            <Pressable style={styles.hamburgerButton} onPress={showSidebarMenu}>
                <Image style={styles.hamburgerIcon} source={require('../../assets/menu.png')} />
            </Pressable>
        </View>
        <View style={styles.incidentsContainer}>
            <View style={styles.incidentsBox}>
                <Image style={styles.warningIcon} source={require('../../assets/warning.png')} />
                <Text style={styles.incidentsText}>Incidentes</Text>
                <View style={styles.incidentsDropIcon}>
                    <Icon name='sort-down' type='font-awesome' color='#14f7a8'  size={20} />
                </View>
            </View>
        </View>
        <View style={styles.searchContainer}>
            <View style={styles.floatingElementsBox}>
                <View style={styles.floatingLeftButtons}>
                    <View style={styles.floatingCircle}>
                        <Image style={styles.floatingIcon} source={require('../../assets/clock.png')}/>
                    </View>
                    <View style={styles.floatingCircle}>
                        <Image style={styles.floatingIcon} source={require('../../assets/gps-fixed-indicator.png')}/>
                    </View>
                </View>
                <View style={styles.floatingRightButtons}>
                    <View style={styles.auditBox}>
                        <Image style={styles.auditIcon} source={require('../../assets/protected.png')}/>
                        <Text style={styles.auditText}>Auditar Zona</Text>
                    </View>
                    <View style={styles.sosBox}>
                        <Image style={styles.sosIcon} source={require('../../assets/SOS.png')}/>
                    </View>
                </View>
            </View>
            <View style={styles.incidentBox}>
                <View style={styles.securityBox}>
                    <View style={styles.securityIconBox}>
                        <Icon name='place' color='#14f7a8' size={30} />
                    </View>
                    <View style={styles.securityContainer}>
                        <Text style={styles.securityNumber}>5.2/10</Text>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionText}>Nivel de inseguridad de la zona</Text>
                    </View>
                </View>
                <View style={styles.questionBox}>
                    <View style={styles.questionContainer}>
                        <Image style={styles.shieldIcon} source={require('../../assets/shield.png')} />
                        <Text style={styles.questionText}>¿Quieres registrar una incidencia?</Text>
                    </View>
                    <View styles={styles.infoIconBox}>
                        <Icon name='info' />
                    </View>
                </View>
                <Pressable style={styles.registerButton} onPress={() => navigation.navigate('IncidentRegister')}>
                    <Text style={styles.registerText}>REGISTRAR INCIDENCIA</Text>
                </Pressable>
            </View>
            <View style={styles.searchBox}>
                <View style={styles.iconSearch}>
                    <Icon name='search' color='#54b895' size={30} />
                </View>
                <View style={styles.textSearchContainer}>
                    <TextInput
                        style={styles.textSearch} onChangeText={onChangeSearch}
                        value={search} placeholder="¿A dónde vas?" placeholderTextColor='#54b895' 
                    />
                </View>
            </View>
        </View>
        { isMenuVisible && <View style={styles.sidenavContainer}>
            <Pressable style={styles.profileContainer}>
                <View style={styles.profileImageContainer}>
                    <Image style={styles.profileImage} source={require('../../assets/user-photo.png')} />
                </View>
                <View style={styles.profileInfoContainer}>
                    <View style={styles.profileNameContainer}>
                        <Text style={styles.profileNameText}>Renato Calla</Text>
                    </View>
                    <View style={styles.profileEmailContainer}>
                        <Text style={styles.profileEmailText} numberOfLines={1}>renatocalla97@gmail.com</Text>
                    </View>
                </View>
            </Pressable>
            <Pressable style={styles.sidenavOptionBox}>
                <View style={styles.optionIconContainer}>
                    <Image style={styles.optionIconImage} source={require('../../assets/pencil.png')} />
                </View>
                <View style={styles.optionTextContainer}>
                    <Text style={styles.optionText}>Editar Perfil</Text>
                </View>
            </Pressable>
            <Pressable style={styles.sidenavOptionBox} onPress={() => navigation.navigate('DestinationHistory')}>
                <View style={styles.optionIconContainer}>
                    <Image style={styles.optionIconImage} source={require('../../assets/history.png')} />
                </View>
                <View style={styles.optionTextContainer}>
                    <Text style={styles.optionText}>Historial de Destinos</Text>
                </View>
            </Pressable>
            <Pressable style={styles.sidenavOptionBox} onPress={() => navigation.navigate('Settings')}>
                <View style={styles.optionIconContainer}>
                    <Image style={styles.optionIconImage} source={require('../../assets/gear.png')} />
                </View>
                <View style={styles.optionTextContainer}>
                    <Text style={styles.optionText}>Configuración y Privacidad</Text>
                </View>
            </Pressable>
            <Pressable style={styles.sidenavOptionBox} onPress={() => navigation.navigate('Review')}>
                <View style={styles.optionIconContainer}>
                    <Image style={styles.optionIconImage} source={require('../../assets/star.png')} />
                </View>
                <View style={styles.optionTextContainer}>
                    <Text style={styles.optionText}>Reseña y calificación</Text>
                </View>
            </Pressable>
            <Pressable style={styles.sidenavLogOutBox} onPress={() => navigation.navigate('Login')}>
                <View style={styles.optionIconContainer}>
                    <Image style={styles.optionIconImage} source={require('../../assets/logout.png')} />
                </View>
                <View style={styles.optionTextContainer}>
                    <Text style={styles.optionText}>Cerrar Sesión</Text>
                </View>
            </Pressable>
        </View>} 
        {isMenuVisible && <Pressable onPress={hideSidebarMenu} style={styles.sidenavBackground}></Pressable>}
    </SafeAreaView>
  );
}

export default Home;
