import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType"
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
        padding: 5,
        marginRight:-8,
        borderRadius: 5,
        
      },
      greenButtonText: {
        color: colors.green,
      },
      buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      filledButton: {
        marginTop:10,
        backgroundColor: colors.primaryColor, 
        marginLeft: 120,
        alignItems:'center',
        justifyContent:'center'
      },
      outlineButton: {
        borderColor: colors.primaryColor, 
        borderWidth: 1,
        
    
      },
      redOutlineButton: {
        borderColor: colors.red,
        backgroundColor: 'transparent',
        borderWidth: 2,
        margin: 12,
        padding: 5,
        marginRight:-8,
        borderRadius: 5,
    
      },
      redButtonText: {
        color: 'red',
      },
      card: {
        marginTop:2,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 20,
        width: '100%',
        alignSelf: 'center',
          shadowColor: '#000',
          shadowOpacity: 0.18,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowRadius: 2,
          elevation: 4,
          marginRight:6,
          height:scale(100)
      },
      box: {
        flexDirection: 'row',
      },
    
      button: {
        backgroundColor: colors.primaryColor,
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 5,
       
    
      },
      img: {
        height: scale(98),
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
        borderColor: 'orange',
        backgroundColor: 'transparent',
        borderWidth: 2,
        margin: 12,
        padding: 5,
        marginRight:-8,
        borderRadius: 5,
    
      },
      appText: {
        color: 'orange',
      },
      tabBox: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderRadius: 18,
        margin:5,
        borderColor:colors.primaryColor,
        borderWidth: 1,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:5,
        paddingBottom:5,
        
      },
})
export default bookingStyle