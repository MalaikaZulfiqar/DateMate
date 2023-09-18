import { colors } from "../../constraints"
import { StyleSheet } from "react-native"
import { scale } from "react-native-size-matters"
const bookingStyle=StyleSheet .create({
  
      buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
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
        fontSize: 18,
        color: colors.black
      },
      subTitle: {
        fontSize: 14,
        color: colors.gray
      },
      OutlineButton: {
        borderColor: colors.red,
        backgroundColor: 'transparent',
        borderWidth: 1,
        margin: 12,
        borderRadius: 5,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:scale(110),
        width:85,
        marginTop:scale(-23),
        padding:4
       
      },
      oulineButtonText: {
        color: 'red',
        fontSize:13
      },
      FilledButton: {
        borderRadius: 5,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        width:70,
        padding:5,
        backgroundColor:colors.primaryColor,
        marginTop:scale(-32),
        marginLeft:58,
        marginRight:3
      },
      FilledButtonText: {
        color: 'white',
        fontSize:13
      },
  
})
export default bookingStyle