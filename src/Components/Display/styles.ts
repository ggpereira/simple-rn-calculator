import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#363636',
        minHeight: 100,
        height: '28%',
        marginHorizontal: 15,
        marginTop: 10,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#010101',
        flexDirection: 'row'
    },
    memoryContainer: {
        height: '100%',
        width: '30%',
        borderRightWidth: 1,
        borderRightColor: '#141313',
        alignItems: 'center',
        paddingTop: 5
    },
    memoryContainerHeader: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#FFF'
    },
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '70%'
    },
    mainText: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold'
    }
})