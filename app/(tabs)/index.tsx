import { Image, StyleSheet, Platform, Text, View, TextInput } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <View style={styles.geral}>
      <View style={styles.aba}>
        <Text>E-mail:</Text>
        <TextInput style={styles.input}
          placeholder='Coloque seu e-mail aqui'
          placeholderTextColor={'gray'}
        />
        <Text>Senha:</Text>
        <TextInput style={styles.input}
          placeholder='Coloque sua senha aqui'
          placeholderTextColor={'gray'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  geral: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  aba: {
    backgroundColor: 'white',
    height: '45%',
    width: '40%',
    borderRadius: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center'
  },
  input: {
    borderWidth: 0.5,
    borderRadius: 5,
    paddingLeft: 6
  }
});
