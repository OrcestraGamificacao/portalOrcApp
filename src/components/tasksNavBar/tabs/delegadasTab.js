import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';
import TasksVencidas from '~/components/tasksVencidas';
import TasksHoje from '~/components/tasksHoje';
import TasksAmanha from '~/components/tasksAmanha';
import TasksProximos from '~/components/tasksProximos';

export default class Delegadas extends Component {
  render() {
    return (
      <ScrollView>
        <TasksVencidas />
        <TasksHoje />
        <TasksAmanha />
        <TasksProximos />
      </ScrollView>
    );
  }
}
