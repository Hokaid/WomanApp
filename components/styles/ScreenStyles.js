import { StyleSheet, StatusBar } from 'react-native';

const screenstyles = StyleSheet.create({
    screenContainer: {
        paddingBottom: 50
    },
    destinationHistoryBox: {
        backgroundColor: '#01112e',
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 17,
        marginTop: 30
    },
    destinationHistoryText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    backButtonBox: {
        paddingLeft: 8,
        paddingRight: 12,
        paddingTop: 3
    },
    backButtonImage: {
        width: 22,
        height: 22
    },
    historyItemBox: {
        width: '100%',
        backgroundColor: 'black',
        paddingBottom: 12
    },
    historyInfoBox: {
        height: 75
    },
    historyDateBox: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingHorizontal: 10
    },
    historyDateText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },
    historyAddressBox: {
        flexDirection: 'row',
        paddingTop: 1,
        paddingHorizontal: 10
    },
    historyAddressText: {
        color: 'white',
        fontSize: 15,
        paddingHorizontal: 10
    },
    historyMapBox: {
        width: '100%',
        height: 150,
    },
    historyMap: {
        width: '100%',
        height: '100%'
    },
    settingOptionsContainer: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%'
    },
    settingPrivacyBox: {
        marginTop: 20,
        marginLeft: 14
    },
    settingPrivacyTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    settingPrivacyContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    settingPrivacyLabel: {
        paddingLeft: 32,
        paddingTop: 10
    },
    settingPrivacyText: {
        color: '#2ae8ac',
        fontSize: 15
    },
    settingSwitchContainer: {
        paddingTop: 7,
        paddingRight: 21
    },
    settingLanguageBox: {
        marginTop: 42,
        marginLeft: 14
    },
    settingLanguageTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    settingLanguageSelect: {
        width: 170,
        height: 36,
        backgroundColor: '#2ae8ac',
        marginLeft: 32,
        marginTop: 14,
        textAlign: 'center',
        justifyContent: 'center',
        paddingLeft: 45,
        paddingBottom: 3,
        fontSize: 12
    },
    starsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 12
    },
    starsMessageBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 5,
        marginBottom: 40
    },
    starsMessageText: {
        color: 'white',
        fontSize: 12
    },
    reviewMessageBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 4,
        paddingLeft: 15
    },
    reviewInputBox: {
        height: 210,
        width: '92%',
        borderWidth: 1,
        borderColor: '#2ae8ac',
        marginLeft: 10,
        marginTop: 8,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 6
    },
    reviewTextInput: {
        color: '#2ae8ac'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        paddingVertical: 8,
        paddingHorizontal: 40,
        marginTop: 70,
        backgroundColor: '#2ae8ac',
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
    incidentPlaceContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderBottomColor: 'white',
        marginTop: 16,
        marginHorizontal: 20
    },
    incidentPlaceIcon: {
        marginBottom: 8,
        marginRight: 6
    },
    incidentPlaceLabel: {
        marginTop: 8
    },
    incidentPlaceText: {
        color: 'white'
    },
    incidentContextBox: {
        marginTop: 12,
        marginHorizontal: 23
    },
    incidentCategoryBox: {
        marginTop: 32,
        marginHorizontal: 20
    },
    incidentCategoryLabel: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    incidentCategoryText: {
        color: '#2ae8ac',
        marginLeft: 10,
        marginTop: 3,
        fontSize: 14
    },
    incidentCategorySelect: {
        backgroundColor: 'white',
        marginTop: 15,
        height: 34,
        textAlign: 'center',
        justifyContent: 'center',
        paddingLeft: '10%'
    },
    incidentTypeBox: {
        marginTop: 40,
        marginHorizontal: 20
    },
    incidentTypeLabel: {
        marginLeft: 28
    },
    incidentTypeText: {
        color: '#2ae8ac',
    },
    incidentQuestionBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 36,
        marginLeft: 20
    },
    incidentQuestionText: {
        color: '#2ae8ac',
        marginLeft: 10
    },
    questionRBText: {
        color: 'white'
    },
    questionRBBox: {
        backgroundColor: 'white',
        borderRadius: 100,
        marginRight: 6
    },
    RBimg:{
        height:20,
        width: 20,
    },
    questionRBContainer: {
        paddingHorizontal: 106,
        paddingTop: 10
    },
    incidentCommentBox: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 14,
        marginHorizontal: 20
    },
    incidentCommentText: {
        color: '#2ae8ac',
        marginLeft: 10
    },
    incidentInputBox: {
        height: 95,
        width: '90%',
        borderWidth: 1,
        borderColor: '#2ae8ac',
        marginHorizontal: 20,
        marginTop: 3,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 6
    },
    incidentButtonsContainer: {
        marginTop: 20,
        marginHorizontal: 100
    },
    incidentSubmitButton: {
        backgroundColor: '#2ae8ac',
        height: 32,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 5,
        marginBottom: 10
    },
    incidentSubmitButtonText: {
        color: 'white',
        fontSize: 15
    },
    incidentCancelButton: {
        height: 32,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingTop: 5
    },
    incidentCancelButtonText: {
        color: '#2ae8ac',
        fontSize: 15
    }
});

export default screenstyles;

