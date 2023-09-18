import { colors } from "../../constraints"
import { StyleSheet } from "react-native"
import { scale } from "react-native-size-matters"
const bookingStyle=StyleSheet .create({
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      OutlineButton: {
        borderColor: colors.green,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderRadius: 5,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:85,
        padding:4
        
        
      },
      oulineButtonText: {
        color: colors.green,
        fontSize:13

      },
  
      card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 20,
        width: '92%',
        alignSelf: 'center',
          shadowColor: '#000',
          shadowOpacity: 0.18,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowRadius: 2,
          elevation: 4,
         
    
      },
      box: {
        flexDirection: 'row',
      },
      img: {
        height: scale(130),
        width: scale(100),
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10
    
      },
      title: {
        fontSize: 15,
        color: colors.black

      },
      subTitle: {
        fontSize: 14,
        color: colors.gray
      },

})
export default bookingStyle