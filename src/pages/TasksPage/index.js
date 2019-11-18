import React, { Component } from 'react';
import {
  Image, ScrollView, Text, StyleSheet, TouchableOpacity, View, TextInput,
} from 'react-native';
// import Dialog from 'react-native-dialog';
import Dialog, {
  DialogContent, DialogTitle, DialogButton, DialogFooter,
} from 'react-native-popup-dialog';
import { colors } from '~/styles';
import TasksNavBar from '~/components/tasksNavBar';
import TasksVencidas from '~/components/tasksVencidas';
import TasksHoje from '~/components/tasksHoje';
import TasksAmanha from '~/components/tasksAmanha';
import TasksProximos from '~/components/tasksProximos';
import styles from './styles';

export default class Main extends Component {
  static navigationOptions = ({ navigation }) => ({
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

        onPress={navigation.getParam('visible')}
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
  });

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      text: 'Escreva Aqui sua Tarefa',
    };
  }

  componentDidMount() {
    this.props.navigation.setParams({ visible: this.handleOnPress });
  }

  handleOnPress = () => this.setState({ visible: true })

  render() {
    return (
      <ScrollView>
        <Dialog
          visible={this.state.visible}
          dialogStyle={{ marginTop: -400 }}
          dialogTitle={<DialogTitle title="Criar Nova Tarefa" />}
          footer={(
            <DialogFooter>
              <DialogButton text="Detalhar" />
              <DialogButton text="Criar" color="colors.greenOrc" />
            </DialogFooter>
          )}
          onTouchOutside={() => {
            this.setState({ visible: false });
          }}
        >
          <DialogContent
            style={{ height: 200, width: 410 }}
          >
            <TextInput
              style={{
                height: 150, width: 350, borderColor: 'grey', borderWidth: 1, justifyContent: 'center',
              }}
              placeholder="Escreva sua Tarefa Aqui"
              onFocus={() => this.setState({ text: '' })}
            />
            {/* onChangeText={(text) => this.setState({text})} */}
            {/* value={this.state.text} */}
          </DialogContent>
        </Dialog>

        <TasksNavBar />
        <TasksVencidas />
        <TasksHoje />
        <TasksAmanha />
        <TasksProximos />
      </ScrollView>
    );
  }
}
