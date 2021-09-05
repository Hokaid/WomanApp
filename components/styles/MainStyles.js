import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      justifyContent: 'center',
      alignItems: 'center'
    },
    logo: {
      width: 180,
      height: 180,
    },
    inputsContainer: {
      paddingTop: 100,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    emailContainer : {
      paddingTop: 40,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    signUpInputsContainer: {
      paddingTop: 35,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    textInput: {
      fontSize: 15,
      color: 'black',
      width: '100%'
    },
    inputContainer: {
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      width: '70%'
    },
    iconContainer: {
      width: '20%',
      paddingBottom: 10,
    },
    textInputContainer: {
      width: '80%',
      paddingTop: 6
    },
    dateInputContainer: {
      width: '80%',
      paddingTop: 6,
      paddingLeft: 50
    },
    icon: {
      width: 30,
      height: 30,
    },
    dateIcon: {
      width: 28,
      height: 28,
    },
    forgotPassContainer: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      width: '70%'
    },
    forgotPassText: {
      color: '#34d9b2',
      fontSize: 16,
      fontWeight: "500",
      textDecorationLine: 'underline'
    },
    buttonContainer: {
      marginTop: 60,
      width: '70%'
    },
    createContainer: {
      marginTop: 20,
      width: '70%'
    },
    button: {
      width: '100%',
      paddingVertical: 15,
      backgroundColor: '#34d9b2',
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 6 },
      shadowOpacity: 0.3,
      shadowRadius: 5
    },
    buttonText: {
      color: 'white',
      fontSize: 16
    },
    newAccountContainer: {
      marginTop: 50,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 60,
    },
    dateButton: {
      backgroundColor: '#34d9b2',
      paddingHorizontal: 8,
      paddingVertical: 8,
      marginLeft: 6
    },
    RBimg:{
      height:20,
      width: 20,
      marginRight: 6
    },
    RBbtn:{
      flexDirection: 'row',
    },
    RBbtnContainer: {
      marginHorizontal: 12
    },
    RBContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    textContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%'
    },
    titleContainer: {
      marginBottom: 20,
      marginTop: 5,
      justifyContent: 'center',
      alignItems: 'center'
    },
    longText: {
      textAlign: 'center',
      color: '#84878a',
      fontSize: 15
    },
    titleText: {
      color: '#84878a',
      fontSize: 15,
      fontWeight: 'bold'
    },
    background: {
      height: '100%',
      width: '100%'
    },
    searchContainer: {
      width: '100%',
      position: 'absolute',
      bottom: 0,
      justifyContent: 'center',
      alignItems: 'center'
    },
    searchBox: {
      width: '95%',
      height: 60,
      backgroundColor: 'white',
      borderRadius: 10,
      marginBottom: 20,
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 6 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      flexDirection: 'row'
    },
    incidentBox: {
      width: '95%',
      height: 120,
      backgroundColor: 'white',
      borderRadius: 10,
      marginBottom: 10,
      elevation: 10,
      shadowColor: '#000',
      shadowOffset: { width: 1, height: 6 },
      shadowOpacity: 0.3,
      shadowRadius: 5,
      justifyContent: 'center',
      alignItems: 'center'
    },
    iconSearch: {
      paddingLeft: 26,
      paddingTop: 15
    },
    textSearchContainer: {
      paddingLeft: 22,
      paddingTop: 15,
      color: '#54b895'
    },
    textSearch: {
      paddingTop: 4,
      fontSize: 14,
      color: '#54b895'
    },
    securityBox: {
      width: '90%',
      height: 35,
      backgroundColor: 'black',
      borderRadius: 10,
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },
    securityIconBox: {
      marginLeft: 5,
      marginTop: 2
    },
    securityContainer: {
      marginLeft: 14,
      marginTop: 6
    },
    descriptionContainer: {
      marginLeft: 12,
      marginTop: 7
    },
    securityNumber: {
      color: '#14f7a8',
      fontWeight: 'bold',
      fontSize: 16
    },
    descriptionText: {
      color: '#14f7a8',
      fontSize: 14
    },
    shieldIcon: {
      width: 20,
      height: 20
    },
    questionBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '90%',
      paddingTop: 5
    },
    questionContainer: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: 5,
      marginLeft: 3
    },
    questionText: {
      color: '#54b895',
      marginLeft: 5
    },
    infoIconBox: {
      marginRight: 2
    },
    registerButton: {
      height: 32,
      width: '50%',
      backgroundColor: '#14f7a8',
      borderRadius: 6,
      marginTop: 6
    },
    registerText: {
      color: 'black',
      textAlign: 'center',
      marginTop: 6,
      fontWeight: 'bold'
    },
    floatingElementsBox: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
    },
    floatingLeftButtons: {
      marginLeft: 12,
      paddingBottom: 12
    },
    floatingRightButtons: {
      paddingBottom: 8
    },
    floatingCircle: {
      borderRadius: 100,
      width: 60,
      height: 60,
      backgroundColor: 'hsla(187, 0%, 0%, 0.32)',
      marginTop: 7,
      marginBottom: 6
    },
    floatingIcon: {
      width: 36,
      height: 36,
      marginLeft: 12,
      marginTop: 12
    },
    sosBox: {
      marginTop: 12,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingRight: 12,
      paddingTop: 6
    },
    sosIcon: {
      width: 85,
      height: 85,
    },
    auditBox: {
      backgroundColor: 'black',
      flexDirection: 'row',
      width: 110,
      borderTopLeftRadius: 20,
      borderBottomLeftRadius: 20
    },
    auditIcon: {
      width: 22,
      height: 22,
      marginHorizontal: 10,
      marginTop: 6
    },
    auditText: {
      color: '#14f7a8',
      width: 50,
      fontSize: 13,
      marginVertical: 2
    },
    incidentsContainer: {
      position: 'absolute',
      left: 0,
      top: 160
    },
    incidentsBox: {
      flexDirection: 'row',
      backgroundColor: 'black',
      borderBottomRightRadius: 20,
      borderTopRightRadius: 20,
      paddingHorizontal: 10,
    },
    warningIcon: {
      width: 22,
      height: 22,
      marginRight: 10,
      marginVertical: 6
    },
    incidentsText: {
      color: '#14f7a8',
      marginTop: 8,
      marginRight: 10
    },
    incidentsDropIcon: {
      marginRight: 5,
      marginTop: 2
    },
    headerContainer: {
      position: 'absolute',
      left: 0,
      top: 0,
      height: 80,
      width: '100%',
      backgroundColor: 'black'
    },
    hamburgerButton: {
      marginTop: 45,
      marginLeft: 18,
      width: 40, 
      height: 40
    },
    hamburgerIcon: {
      width: 26,
      height: 26
    },
    sidenavContainer: {
      position: 'absolute',
      height: '100%',
      width: '70%',
      top: 0,
      left: 0,
      backgroundColor: '#01112e',
      elevation: 20,
    },
    profileContainer: {
      marginTop: 66,
      paddingHorizontal: 8,
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderBottomColor: '#838584',
      paddingBottom: 25,
      marginHorizontal: 14,
      marginBottom: 18
    },
    profileImageContainer: {
      marginRight: 20
    },
    profileImage: {
      width: 45,
      height: 45
    },
    profileInfoContainer: {
      width: 140,
      marginTop: 6
    },
    profileNameContainer: {
      width: 130
    },
    profileNameText: {
      color: '#14f7a8',
      lineHeight: 15,
      fontWeight: 'bold'
    },
    profileEmailContainer: {
      width: 120,
    },
    profileEmailText: {
      color: '#14f7a8',
      lineHeight: 16
    },
    sidenavOptionBox: {
      flexDirection: 'row',
      marginTop: 22,
      marginHorizontal: 15
    },
    sidenavLogOutBox: {
      marginTop: 140,
      flexDirection: 'row',
      marginHorizontal: 15
    },
    optionIconContainer: {
      marginRight: 20,
      marginLeft: 6
    },
    optionIconImage: {
      width: 25,
      height: 25
    },
    optionTextContainer: {
      marginTop: 3,
      paddingHorizontal: 6
    },
    optionText: {
      color: '#14f7a8',
      fontSize: 13
    },
    sidenavBackground: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: '50%',
      backgroundColor: 'hsla(187, 0%, 0%, 0.50)',
      elevation: 15,
    }
  });

  export default styles;