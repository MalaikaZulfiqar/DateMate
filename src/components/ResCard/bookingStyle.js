import { height } from "deprecated-react-native-prop-types/DeprecatedImagePropType"
import { colors } from "../../constraints"
import { StyleSheet } from "react-native"
import { scale } from "react-native-size-matters"
const bookingStyle=StyleSheet .create({

      filledButton: {
        marginTop:7,
        backgroundColor: colors.primaryColor, 
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        width:69,
        marginLeft:122,
        height:29
      },
      buttonText:{
         color:colors.white,
         padding:5
      },
      card: {
        marginTop:2,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        marginBottom: 10,
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

          height:scale(120),
          padding:10,
         width:scale(310),
      
        
      },
      box: {
        flexDirection: 'row',
      },
    
      img: {
        height: scale(99),
        width: scale(100),
        borderRadius:5
    
      },
      title: {
        fontSize: 18,
        color: colors.black
      },
      subTitle: {
        fontSize: 14,
        color: colors.gray
      },
  
})
export default bookingStyle