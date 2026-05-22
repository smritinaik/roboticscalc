import { View, Text, Image, StyleSheet } from 'react-native';

const COLORS = {
  darkGreen: '#194d39',
  mossGreen: '#839958',
  beige: '#F7F4D5',
  rosyBrown: '#fbd0ff',
  midnightGreen: '#105666',
};

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <Image
          source={require('../../assets/images/robo.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.title}>
          Robotics Calculator
        </Text>

        <Text style={styles.subtitle}>
          Calculate gear ratios, speed, torque and
          robotics parameters quickly with a simple
          and student-friendly interface.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.rosyBrown,
  },

  hero: {
    height: '42%',
    backgroundColor: COLORS.darkGreen,

    justifyContent: 'center',
    alignItems: 'center',

    borderBottomLeftRadius: 120,
    borderBottomRightRadius: 120,
  },

  image: {
    width: 220,
    height: 220,
  },

  content: {
    paddingHorizontal: 28,
    paddingTop: 40,
    alignItems: 'center',
  },

  title: {
    fontSize: 32,
    fontWeight: '800',
    color: COLORS.darkGreen,
    textAlign: 'center',
    marginBottom: 14,
  },

  subtitle: {
    fontSize: 16,
    lineHeight: 26,
    color: COLORS.midnightGreen,
    textAlign: 'center',
    maxWidth: 320,
  },
});