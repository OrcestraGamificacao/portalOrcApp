import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Member = props => (
        <View style={styles.member}>
            <View style={styles.imageFrame}>
                <Image style={styles.image} source={}/>
            </View>
            <Text style={styles.name}>{props.name}</Text>
            <Text style={styles.role}>{props.role}</Text>
        </View>
    )

export default Member;