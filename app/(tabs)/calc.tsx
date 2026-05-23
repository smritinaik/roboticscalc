import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const COLORS = {
  bgSoftPink: '#FCE7F3',     // Main background color
  inkBlack: '#000000',       // Bold lines, text, and primary actions
  white: '#FFFFFF',          // High contrast clean input surface
  cardYellow: '#FEF08A',     // High energy background for the calculation output
  textMuted: '#4B5563',      // Subheading tints
};

export default function Calculator() {
  const [driver, setDriver] = useState('');
  const [driven, setDriven] = useState('');
  const [rpm, setRpm] = useState('');
  const [torque, setTorque] = useState('');

  const [result, setResult] = useState('Result will appear here');

  const getRatio = () => {
    const driverTeeth = Number(driver);
    const drivenTeeth = Number(driven);

    if (!driverTeeth || !drivenTeeth) {
      setResult('Enter valid teeth values ⚙️');
      return null;
    }

    return drivenTeeth / driverTeeth;
  };

  const calculateRatio = () => {
    const ratio = getRatio();
    if (ratio !== null) {
      setResult(`Gear Ratio = ${ratio.toFixed(2)}`);
    }
  };

  const calculateRPM = () => {
    const ratio = getRatio();
    if (ratio === null) return;

    const motorRPM = Number(rpm);
    if (!motorRPM) {
      setResult('Enter Motor RPM 🚀');
      return;
    }

    const outputRPM = motorRPM / ratio;
    setResult(`Output RPM = ${outputRPM.toFixed(2)} RPM`);
  };

  const calculateTorque = () => {
    const ratio = getRatio();
    if (ratio === null) return;

    const motorTorque = Number(torque);
    if (!motorTorque) {
      setResult('Enter Motor Torque 💪');
      return;
    }

    const outputTorque = ratio * motorTorque;
    setResult(`Output Torque = ${outputTorque.toFixed(2)}`);
  };

  return (
    <ScrollView 
      style={styles.mainWrapper} 
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>Enter Teeth</Text>

      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Driver"
          placeholderTextColor="#71717A"
          keyboardType="numeric"
          value={driver}
          onChangeText={setDriver}
        />

        <TextInput
          style={styles.input}
          placeholder="Driven"
          placeholderTextColor="#71717A"
          keyboardType="numeric"
          value={driven}
          onChangeText={setDriven}
        />
      </View>

      <Text style={styles.heading}>Motor Details</Text>

      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="RPM"
          placeholderTextColor="#71717A"
          keyboardType="numeric"
          value={rpm}
          onChangeText={setRpm}
        />

        <TextInput
          style={styles.input}
          placeholder="Torque"
          placeholderTextColor="#71717A"
          keyboardType="numeric"
          value={torque}
          onChangeText={setTorque}
        />
      </View>

      {/* Chunky Action Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={calculateRatio}>
          <Text style={styles.buttonText}>Ratio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={calculateRPM}>
          <Text style={styles.buttonText}>RPM</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={calculateTorque}>
          <Text style={styles.buttonText}>Torque</Text>
        </TouchableOpacity>
      </View>

      {/* Result Display Pane */}
      <View style={styles.resultBox}>
        <Text style={styles.resultText}>{result}</Text>
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
    padding: 24,
    paddingTop: 48,
    paddingBottom: 120, // Prevents content clipping behind absolute navbar
  },

  heading: {
    fontSize: 22,
    fontWeight: '900',
    color: COLORS.inkBlack,
    marginBottom: 12,
    marginTop: 10,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  input: {
    width: '47%',
    backgroundColor: COLORS.white,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 16,
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.inkBlack,

    // Thick Neo-brutalist border
    borderWidth: 2.5,
    borderColor: COLORS.inkBlack,

    // Subtle flat offset shadow so typing fields feel tactile
    shadowColor: COLORS.inkBlack,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 14,
  },

  button: {
    width: '30%',
    backgroundColor: COLORS.inkBlack, // Solid black button pill matching reference
    paddingVertical: 14,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',

    borderWidth: 1,
    borderColor: COLORS.inkBlack,

    // Pop shadow styling
    shadowColor: COLORS.inkBlack,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.3, // Softened offset opacity slightly for actions so it's less jarring to view in groups
    shadowRadius: 0,
  },

  buttonText: {
    color: COLORS.white,
    fontWeight: '800',
    fontSize: 14,
  },

  resultBox: {
    marginTop: 32,
    height: 140,
    backgroundColor: COLORS.cardYellow, // High prominence accent color panel
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,

    borderWidth: 2.5,
    borderColor: COLORS.inkBlack,

    shadowColor: COLORS.inkBlack,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
  },

  resultText: {
    fontSize: 20,
    fontWeight: '900',
    color: COLORS.inkBlack,
    textAlign: 'center',
    lineHeight: 28,
  },
});