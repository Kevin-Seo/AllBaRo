import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Alert } from 'react-native';
import MainCampaign from './MainCampaign';

export default function HelloWorldApp() {
  const [value, onChangeText] = React.useState('Useless Placeholder');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}> 
        <Text> 올바로 </Text>
      </View>
      <View style={styles.searchBar}>
        <TextInput
            style={styles.searchTextInput}
            inlineImageLeft='search_icon'
            value={value}
            onChangeText={text => onChangeText(text)}
            />
      </View>
      <View style={styles.tagBar}>
        <View style={styles.tagButton}>
          <Button color="#ffffff" onPress={() => Alert.alert('Simple Button1 pressed')} title="testbutton1" />
        </View>
        <View style={styles.tagButton}>
          <Button color="#ffffff" onPress={() => Alert.alert('Simple Button2345 pressed')} title="buttontest2" />
        </View>
      </View>
      <View style={styles.mainView}>
        <MainCampaign />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  header: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    flex: 0.7,
    backgroundColor: 'blue',
  },
  searchTextInput: {
    flex: 1,
    backgroundColor: 'green',
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    margin: 2,
  },
  tagBar: {
    flex: 0.7,
    backgroundColor: 'red',
    flexDirection: 'row',
  },
  tagButton: {
    backgroundColor: 'green',
    borderRadius: 5,
    paddingLeft: 5,
    paddingRight: 5,
    margin: 2,
  },
  mainView: {
    flex: 14,
    backgroundColor: 'blue',
  },
  bottomNav: {
    flex: 1,
    backgroundColor: 'red',
  },
});