import { StyleSheet } from 'react-native';
export const estudoStyles = StyleSheet.create({  
    scrollContainer: {
        // paddingVertical: 20,
        // paddingHorizontal: 15,
        // backgroundColor: '#020722', 
        // width: '100%',
        // maxHeight: 'calc(100vh - 80px)',
        // overflowY: 'auto',             
        // paddingBottom: 40,          
        // flex:1,  
        
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: '#020722', 
        width: '100%',
        maxHeight: 'calc(100vh - 80px)',
        overflowY: 'auto',             
        paddingBottom: 40,          
    },
    caixaTitulo: {
    width: '96%',
    alignSelf: 'center',
    backgroundColor: '#082a97',
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: 10,
  },
  textoTitulo: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textoPrincipalSecundario: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center',
    marginTop:20,
  },

caixaImagemEstudo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 12,
},
  imagemEstudo: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
    borderRadius: 8,
  },

  textoEstudo: {
    color: '#D1D5DB',
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
    marginTop: 4,
    marginBottom:20,
  },
});