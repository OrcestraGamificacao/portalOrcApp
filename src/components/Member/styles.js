import {StyleSheet} from 'react-native';
import {fonts} from '~/styles';
const styles = StyleSheet.create({
    member:{
        alignItems: 'center'
    },
    imageFrame:{
        width: 50,
        height: 50,
        borderRadius: 50,
        overflow: 'hidden'
    },
    name:{
        fontSize: fonts.small,
        color: '#000'
    },
    role:{
        fontSize: fonts.tiny,
        color: '#000'
    },
    image:{
        width: 50
    }
})


export default styles;