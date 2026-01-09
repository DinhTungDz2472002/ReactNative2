import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const SkeletonItem = () => {
  const opacity = useRef(new Animated.Value(0.6)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.9,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.6,
          duration: 900,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <Animated.View style={[styles.wrapper, { opacity }]}>
      <View style={styles.image} />

      <View style={styles.textBlock}>
        <View style={styles.title} />
        <View style={styles.subtitle} />
      </View>

      <View style={styles.actions}>
        <View style={styles.icon} />
        <View style={styles.icon} />
      </View>
    </Animated.View>
  );
};

export default function LoadingView() {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <SkeletonItem key={i} />
      ))}
    </>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    width: width * 0.8,
    height: height * 0.5,
    marginVertical: 20,
    alignSelf: 'center',

    backgroundColor: '#E6E6E6',

    borderRadius: 16,

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,

    padding: 30,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
    backgroundColor: '#d0d0d0',
    alignSelf: 'center',
    marginTop: 20,
  },

  textBlock: {
    marginTop: 20,
    alignItems: 'center',
  },

  title: {
    width: 160,
    height: 18,
    borderRadius: 6,
    backgroundColor: '#cfcfcf',
  },

  subtitle: {
    width: 220,
    height: 14,
    borderRadius: 6,
    backgroundColor: '#cfcfcf',
    marginTop: 12,
  },

  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
    gap: 30,
  },

  icon: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#cfcfcf',
  },
});
