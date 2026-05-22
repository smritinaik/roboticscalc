import { View, Text, StyleSheet, ScrollView } from 'react-native';

const COLORS = {
  darkGreen: '#0A3323',
  mossGreen: '#839958',
  beige: '#F7F4D5',
  rosyBrown: '#D3968C',
  midnightGreen: '#105666',
};

export default function Learning() {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>Robotics Formulas</Text>
      <Text style={styles.subHeading}>
        Learn the basic formulas used in gear and motor calculations.
      </Text>

      {/* Card 1 */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>⚙️ Gear Ratio</Text>

        <Text style={styles.formula}>
          Gear Ratio = Teeth of Driver Gear ÷ Teeth of Driven Gear
        </Text>

        <Text style={styles.description}>
          This tells us how the gears are connected and how speed and
          torque will change between them.
        </Text>
      </View>

      {/* Card 2 */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>🚀 Output RPM (Speed)</Text>

        <Text style={styles.formula}>
          Output RPM = Input RPM ÷ Gear Ratio
        </Text>

        <Text style={styles.description}>
          This formula calculates the final rotational speed after
          passing through the gears.
        </Text>
      </View>

      {/* Card 3 */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>💪 Output Torque</Text>

        <Text style={styles.formula}>
          Output Torque = Gear Ratio × Input Motor Torque
        </Text>

        <Text style={styles.description}>
          Torque is the turning force. A higher gear ratio increases
          the output torque of the motor.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    paddingBottom: 120, // space for bottom tab bar
  },

  heading: {
    fontSize: 30,
    fontWeight: '800',
    color: COLORS.darkGreen,
    marginBottom: 8,
  },

  subHeading: {
    fontSize: 15,
    color: COLORS.midnightGreen,
    marginBottom: 25,
  },

  card: {
    backgroundColor: COLORS.beige,
    borderRadius: 24,
    padding: 20,
    marginBottom: 18,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },

  cardTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.darkGreen,
    marginBottom: 12,
  },

  formula: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.midnightGreen,
    marginBottom: 10,
    lineHeight: 28,
  },

  description: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
  },
});