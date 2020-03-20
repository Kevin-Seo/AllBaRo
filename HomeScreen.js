import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, Alert } from 'react-native';
import MainCampaign from './MainCampaign';

export default function HelloWorldApp() {
  const [value, setValue] = React.useState('검색할 태그를 입력하세요.');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}> 
        <Text style={styles.title}> 올  바  로 </Text>
      </View>
      <View style={styles.searchBar}>
        <TextInput
            style={styles.searchTextInput}
            inlineImageLeft='search_icon'
            value={value}
            onChangeText={text => setValue(text)}
            />
      </View>
      <View style={styles.tagBar}>
        <View style={styles.tagButton}>
          <Text style={styles.tagText} onPress={() => Alert.alert('Simple Button 111 pressed')}> 투표 </Text>
        </View>
        <View style={styles.tagButton}>
          <Text style={styles.tagText} onPress={() => Alert.alert('Simple Button 222 pressed')}> 동물보호 </Text>
        </View>
        <View style={styles.tagButton}>
          <Text style={styles.tagText} onPress={() => Alert.alert('Simple Button 333 pressed')}> 코로나 </Text>
        </View>
      </View>
      <View style={styles.mainView}>
        <MainCampaign />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'BlackHanSans-Regular',
    fontSize: 35,
  },
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    fontFamily: 'BlackHanSans-Regular',
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
    fontFamily: 'DoHyeon-Regular',
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
    paddingTop: 3,
    margin: 2,
  },
  tagText: {
    fontFamily: 'DoHyeon-Regular',
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