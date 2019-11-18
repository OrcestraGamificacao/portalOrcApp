import React, { Component } from 'react';
import {
  ScrollView,
} from 'react-native';

import TaskDelegada from '~/components/tasksDelegada';

export default class Delegadas extends Component {
  render() {
    return (
      <ScrollView>
        <TaskDelegada />
        <TaskDelegada />
        <TaskDelegada />
      </ScrollView>
    );
  }
}
