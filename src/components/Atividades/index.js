import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

class Activities extends Component {
    constructor(){
        this.state={
            list:{
                [{name:"Fulano da Silva", notify:"criou alguma coisa", img:require('../../../assets/Orc_estra_capacete_colorido.png')}]:
            }
        };
    }
    render (){
        return(
        <View>
        list.map((member)=>{
            <View style={styles.container_image}><Image source={member.img} style={styles.image} /></View>
            <Text style={styles.name}>{member.name}</Text>
        });
    </View>
    );}
};

export default Activities;