import { StyleSheet } from 'react-native';

export const desenvolvedoresStyles = StyleSheet.create({

    container: {
        flex: 1,
        height: '100%',
        backgroundColor: '#020722',
        // Flex:1;
        // overflowY: 'auto',
        maxHeight:'100%',
        PaddingBottom:40,
    },


    scrollView: {
        minHeight: 0,
        backgroundColor: '#020722',
        overflowY: 'auto',
        PaddingBottom:40,
    },

    scrollContainer: {
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: '#020722', 
        width: '100%',
        maxHeight: 'calc(100vh - 80px)',
        overflowY: 'auto',             
        paddingBottom: 40,          
    },


    caixaTitulo: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#082a97',
        paddingVertical: 15,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginBottom: 20,
    },

    textoTitulo: {
        color: '#FFFFFF',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    cardDescricao: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#152158',
        borderRadius: 15,
        paddingVertical: 18,
        paddingHorizontal: 18,
        marginBottom: 20,
    },

    tituloDescricao: {
        color: '#38BDF8',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 12,
    },

    textoDescricao: {
        color: '#D1D5DB',
        fontSize: 15,
        lineHeight: 22,
        textAlign: 'center',
        marginBottom: 10,
    },

    cardDev: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#152158',
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 15,
        alignItems: 'center',
        marginBottom: 20,
    },

    imagemDev: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 3,
        borderColor: '#38BDF8',
        marginBottom: 12,
    },

    nomeDev: {
        color: '#FFFFFF',
        fontSize: 21,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },

    idadeDev: {
        color: '#38BDF8',
        fontSize: 17,
        textAlign: 'center',
        marginBottom: 10,
    },

    funcaoDev: {
        color: '#D1D5DB',
        fontSize: 15,
        lineHeight: 22,
        textAlign: 'center',
        paddingHorizontal: 10,
    },

    caixaFinal: {
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#082a97',
        borderRadius: 10,
        paddingVertical: 12,
        marginTop: 5,
        marginBottom: 10,
    },

    textoFinal: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },

});