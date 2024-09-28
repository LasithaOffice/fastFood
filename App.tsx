/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const s: string[] = ["Apple", "Banana", "Cherry", "Durian", "Eggfruit"];

  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 100 }}>Welcome to react native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#ff0000"
  }
});

export default App;
