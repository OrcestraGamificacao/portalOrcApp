import React from 'react';
import {
  Image, ScrollView, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
<<<<<<< HEAD
=======
// import Dialog from 'react-native-dialog';
import Dialog, {
 DialogContent, DialogTitle, DialogButton, DialogFooter 
} from 'react-native-popup-dialog';
>>>>>>> 0d44591918a0d3206ffaf8cafe01cd4cf4e7796f
import { colors } from '~/styles';
import TasksNavBar from '~/components/tasksNavBar';
import TasksVencidas from '~/components/tasksVencidas';
import TasksHoje from '~/components/tasksHoje';
import TasksAmanha from '~/components/tasksAmanha';
import TasksProximos from '~/components/tasksProximos';
import styles from './styles';

const Main = () => (
  <ScrollView>
    <TasksNavBar />
    <TasksVencidas />
    <TasksHoje />
    <TasksAmanha />
    <TasksProximos />
  </ScrollView>
);

Main.navigationOptions = {
  title: 'Tarefas',
  headerLeft: (
    <Image
        style={styles.logoOrcStyle}
        source={{
          uri:
            'https://user-images.githubusercontent.com/54643355/67619110-d119dc00-f7cd-11e9-9377-40b7c21424fe.png',
        }}
      />
  ),
  headerRight: (
    <TouchableOpacity
        style={styles.addButtonStyle}
      >
        <Text style={styles.addButtonTextStyle}>+</Text>
      </TouchableOpacity>
  ),
  headerBackTitleVisible: false,
  headerTintColor: '#FFF',
  headerBackground: (
    <Image
        style={StyleSheet.absoluteFill}
        source={{
          uri: 'https://i.imgur.com/oPgigXi.jpg',
        }}
      />
  ),
  headerStyle: {
    backgroundColor: colors.greenOrcLight,
    textAlign: 'center',
  },
  headerTitleStyle: {
    fontFamily: 'monospace',
    fontSize: 30,
  },
};

<<<<<<< HEAD
export default Main;
=======
  render() {
    return (
      <ScrollView>
        <Dialog
          visible={this.state.visible}
          dialogTitle={<DialogTitle title="Criar Nova Tarefa" />}
          footer={
<DialogFooter>
  <DialogButton text="Detalhar" />       
  <DialogButton text="Criar" color="colors.greenOrc" />
</DialogFooter>
          }
          onTouchOutside={() => {
            this.setState({ visible: false });
          }}
        >
          <DialogContent>        
            <Text>testando </Text>             
          </DialogContent>
        </Dialog>
>>>>>>> 0d44591918a0d3206ffaf8cafe01cd4cf4e7796f

// lol
