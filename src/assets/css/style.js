import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../constraints';
export default StyleSheet.create({
  justify: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  alignCenter: {
    justifyContent: 'center',
  },
  justifyRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  justifySpaBtwRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  justifySpaBtw: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  justifySpaEvenRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  justifySpaEven: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: colors.black,
    fontFamily: fonts.regular,
    textAlign: 'center',
    fontWeight:'600'
  },
  subTitle: {
    fontSize: 18,
    color: colors.black,
    fontFamily: fonts.regular,
    fontWeight:'700'
   
  },
  buttonStyle: {
    flex: 1,
    marginLeft: 10,
    marginRight: 13,
    marginBottom: 10,
    
  },
  font14: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.black,
    lineHeight: 18,
    fontWeight:'700'
  },
  font12:{
    fontFamily: fonts.regular,
    color: colors.black,
    fontSize:14,
    fontWeight:'600'
  },
  font16:{
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.black,
    lineHeight: 18,
    fontWeight:'900'
  },
  box:{
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 10,
  },
  lableStyle:{
    color: colors.black,
    fontFamily: fonts.regular,
    margin: 10, 
    fontSize: 16,
    marginTop:-10,
    fontWeight:'600'
  },
  font16R: {
    fontSize: 16,
    fontFamily: fonts.regular,
    color: colors.black,
  },
  table_titel:{
   fontFamily: fonts.regular,
   color: colors.black,
   fontSize:14,
   fontWeight:'700',
    lineHeight:21
  },
  table_subtitle:{
    fontFamily: fonts.regular,
    color: '#878787',
    fontSize:12,
    fontWeight:'500',
     lineHeight:18
  }
});
