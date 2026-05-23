import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// Colors sampled from the pet care schedule & activity lists
const COLORS = {
  bgSoftPink: '#FCE7F3',     // Global background
  inkBlack: '#000000',       // Bold borders and headers
  textMuted: '#4B5563',      // Subheading body text

  // Array of pastel colors from the reference layout to make cards pop individually
  cardPastels: [
    '#FCE7F3', // Soft Pink (Vet Visit)
    '#FEF08A', // Soft Yellow (Grooming)
    '#BAE6FD', // Soft Blue (Medicines)
    '#DCFCE7', // Soft Green (Vaccination)
  ],
};

export default function Learning() {
  return (
    <ScrollView
      style={styles.mainWrapper}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>Robotics Formulas</Text>
      <Text style={styles.subHeading}>
        Learn the basic formulas used in gear and motor calculations.
      </Text>

      {/* Card 1: Gear Ratio */}
      <View style={[styles.card, { backgroundColor: COLORS.cardPastels[1] }]}>
        <View style={styles.titleRow}>
          <MaterialCommunityIcons name="cog-outline" size={26} color={COLORS.inkBlack} style={styles.iconStyle} />
          <Text style={styles.cardTitle}>Gear Ratio</Text>
        </View>

        <Text style={styles.formula}>
          Gear Ratio = Teeth of Driven Gear ÷ Teeth of Driver Gear
        </Text>

        <Text style={styles.description}>
          This tells us how the gears are connected and how speed and
          torque will change between them.
        </Text>
      </View>

      {/* Card 2: Output RPM */}
      <View style={[styles.card, { backgroundColor: COLORS.cardPastels[2] }]}>
        <View style={styles.titleRow}>
          <MaterialCommunityIcons name="speedometer" size={26} color={COLORS.inkBlack} style={styles.iconStyle} />
          <Text style={styles.cardTitle}>Output RPM (Speed)</Text>
        </View>

        <Text style={styles.formula}>
          Output RPM = Input RPM ÷ Gear Ratio
        </Text>

        <Text style={styles.description}>
          This formula calculates the final rotational speed after
          passing through the gears.
        </Text>
      </View>

      {/* Card 3: Output Torque */}
      <View style={[styles.card, { backgroundColor: COLORS.cardPastels[3] }]}>
        <View style={styles.titleRow}>
          <MaterialCommunityIcons name="arm-flex-outline" size={26} color={COLORS.inkBlack} style={styles.iconStyle} />
          <Text style={styles.cardTitle}>Output Torque</Text>
        </View>

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
  mainWrapper: {
    flex: 1,
    backgroundColor: COLORS.bgSoftPink,
  },

  container: {
    padding: 20,
    paddingTop: 48,
    paddingBottom: 120, // Keeps cards safely viewable above the absolute TabBar
  },

  heading: {
    fontSize: 28,
    fontWeight: '900', // Maximum chunkiness for headers
    color: COLORS.inkBlack,
    marginBottom: 8,
  },

  subHeading: {
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 22,
    color: COLORS.textMuted,
    marginBottom: 28,
  },

  card: {
    borderRadius: 24,
    padding: 20,
    marginBottom: 20,

    // Thick Neo-Brutalist / Cartoon border styling
    borderWidth: 2.5,
    borderColor: COLORS.inkBlack,

    // Hard flat shadow styling (No feathering/blur)
    shadowColor: COLORS.inkBlack,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0, // Disables default Android blur shadow
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },

  iconStyle: {
    marginRight: 8,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: COLORS.inkBlack,
  },

  formula: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.inkBlack,
    backgroundColor: 'rgba(255, 255, 255, 0.45)', // Slight white overlay tint to highlight formula text
    padding: 10,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: COLORS.inkBlack,
    overflow: 'hidden',
    marginBottom: 12,
    lineHeight: 24,
  },

  description: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.inkBlack,
    lineHeight: 20,
    opacity: 0.85,
  },
});