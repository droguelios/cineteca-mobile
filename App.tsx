import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import  Onboarding  from './src/presentation/app/(onbording)/index';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#f6f9fe' }}>
      <Onboarding />

      <StatusBar style="auto" />
    </View>
  );
}
