import React from 'react'
import { StyleSheet, View, Text, ScrollView, Image } from 'react-native';
import CamList from './CamList';

const MainCampaign = () => {
  return (
    <ScrollView>
      <CamList reverse={false} />
      <CamList reverse={true} />
      <CamList reverse={false} />
      {/* <View style={styles.first}>
        <View style={styles.f1}>
          <View style={styles.f11}>
            <Image style={{resizeMode: 'cover', width: '100%', height: '100%'}} source={require('./resources/reactimg.png')} />
          </View>
        </View>
        <View style={styles.f2}>
          <View style={styles.f21}>
            <Image style={{resizeMode: 'cover', width: '100%', height: '100%'}} source={require('./resources/reactimg.png')} />
          </View>
          <View style={styles.f22}>
            <Image style={{resizeMode: 'cover', width: '100%', height: '100%'}} source={require('./resources/reactimg.png')} />
          </View>
        </View>
      </View>
      <View style={styles.second}>
        <View style={styles.f2}>
          <View style={styles.f21}>
            <Image style={{resizeMode: 'cover', width: '100%', height: '100%'}} source={require('./resources/reactimg.png')} />
          </View>
          <View style={styles.f22}>
            <Image style={{resizeMode: 'cover', width: '100%', height: '100%'}} source={require('./resources/reactimg.png')} />
          </View>
        </View>
        <View style={styles.f1}>
          <View style={styles.f11}>
            <Image style={{resizeMode: 'cover', width: '100%', height: '100%'}} source={require('./resources/reactimg.png')} />
          </View>
        </View>
      </View>
      <View style={styles.first}>
        <View style={styles.f1}>
          <View style={styles.f11}>
            <Image style={{resizeMode: 'cover', width: '100%', height: '100%'}} source={require('./resources/reactimg.png')} />
          </View>
        </View>
        <View style={styles.f2}>
          <View style={styles.f21}>
            <Image style={{resizeMode: 'cover', width: '100%', height: '100%'}} source={require('./resources/reactimg.png')} />
          </View>
          <View style={styles.f22}>
            <Image style={{resizeMode: 'cover', width: '100%', height: '100%'}} source={require('./resources/reactimg.png')} />
          </View>
        </View>
      </View> */}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  first: {
    flex: 1,
    flexDirection: 'row',
    height: 300,
  },
  f1: {
    flex: 2,
  },
  f11: {
    flex: 1,
  },
  f2: {
    flex: 1,
    flexDirection: 'column',
  },
  f21: {
    flex: 1,
  },
  f22: {
    flex: 1,
  },
  second: {
    flex: 1,
    flexDirection: 'row',
    height: 300,
  },
});

export default MainCampaign
