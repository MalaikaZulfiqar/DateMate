import { colors } from "../../constraints"
import { StyleSheet } from "react-native"
import { scale } from "react-native-size-matters"
const bookingStyle=StyleSheet .create({
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
      greenOutlineButton: {
        borderColor: colors.green,
        backgroundColor: 'transparent',
        borderWidth: 2,
        margin: 12,
        borderRadius: 5,
        flexDirection:'row',
        marginLeft:scale(110),
        justifyContent: 'center',
        alignItems: 'center',
        width:90,
        marginTop:scale(-10),
        paddingLeft:2,
        paddingRight:2

        
      },
      greenButtonText: {
        color: colors.green,
      },
      buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      filledButton: {
        backgroundColor: colors.primaryColor, 
        padding:2
      },
      outlineButton: {
        borderColor: colors.primaryColor, 
        borderWidth: 1,
        margin: 12,
        borderRadius: 5,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:140,
        width:90,
        marginTop:-10,
        paddingLeft:2,
        paddingRight:2
        
    
      },
      redOutlineButton: {
        borderColor: colors.red,
        backgroundColor: 'transparent',
        borderWidth: 2,
        margin: 12,
        borderRadius: 5,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:scale(110),
        width:90,
        marginTop:scale(-10),
        paddingLeft:2,
        paddingRight:2,
       
      },
      redButtonText: {
        color: 'red',
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
    
      button: {
        backgroundColor: colors.primaryColor,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
         marginLeft:scale(40),
         width:90,
        marginTop:scale(-20),
        paddingLeft:2,
        paddingRight:2,
        marginRight:2
    
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
     appButton: {
        borderColor: colors.orange,
        backgroundColor: 'transparent',
        borderWidth: 2,
        margin: 12,
        borderRadius: 5,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft:130,
        width:90,
        marginTop:-10,
        paddingLeft:2,
        paddingRight:2
        
      },
      appText: {
        color: colors.orange,
      },
  
})
export default bookingStyle