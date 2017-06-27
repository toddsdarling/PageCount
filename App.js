import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PageSwipe from './components/PageSwipe';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <PageSwipe></PageSwipe>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
