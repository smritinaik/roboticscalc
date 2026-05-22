import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const COLORS = {
  darkGreen: '#0A3323',
  mossGreen: '#839958',
  beige: '#F7F4D5',
  rosyBrown: '#D3968C',
  midnightGreen: '#105666',
};

export default function Calculator() {
  const [driver, setDriver] = useState('');
  const [driven, setDriven] = useState('');
  const [rpm, setRpm] = useState('');
  const [torque, setTorque] = useState('');

  const [result, setResult] = useState('Result will appear here');

  const getRatio = () => {
    const d1 = Number(driver);
    const d2 = Number(driven);

    if (!d1 || !d2) {
      setResult('Enter valid teeth values');
      return null;
    }

    return d1 / d2;
  };

  const calculateRatio = () => {
    const ratio = getRatio();

    if (ratio !== null) {
      setResult(`Gear Ratio = ${ratio.toFixed(2)}`);
    }
  };

  const calculateRPM = () => {
    const ratio = getRatio();

    if (ratio !== null) {
      const output = Number(rpm) / ratio;

      setResult(`Output RPM = ${output.toFixed(2)}`);
    }
  };

  const calculateTorque = () => {
    const ratio = getRatio();

    if (ratio !== null) {
      const output = ratio * Number(torque);

      setResult(`Output Torque = ${output.toFixed(2)}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enter Teeth</Text>

      <View style={styles.row}>
        <TextInput
          style={styles.input}
          placeholder="Driver"
          keyboardType="numeric"
          value={driver}
          onChangeText={setDriver}
        />

        <TextInput
          style={styles.input}
          placeholder="Driven"
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
          keyboardType="numeric"
          value={rpm}
          onChangeText={setRpm}
        />

        <TextInput
          style={styles.input}
          placeholder="Torque"
          keyboardType="numeric"
          value={torque}
          onChangeText={setTorque}
        />
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={calculateRatio}
        >
          <Text style={styles.buttonText}>Ratio</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={calculateRPM}
        >
          <Text style={styles.buttonText}>RPM</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={calculateTorque}
        >
          <Text style={styles.buttonText}>Torque</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultBox}>
        <Text style={styles.resultText}>
          {result}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },

  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.darkGreen,
    marginBottom: 16,
    marginTop: 20,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  input: {
    width: '47%',
    backgroundColor: COLORS.beige,

    paddingVertical: 14,
    paddingHorizontal: 16,

    borderRadius: 18,

    fontSize: 16,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 4,

    elevation: 2,
  },

  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  button: {
    width: '30%',

    backgroundColor: COLORS.darkGreen,

    paddingVertical: 14,

    borderRadius: 30,

    alignItems: 'center',
  },

  buttonText: {
    color: COLORS.beige,
    fontWeight: '700',
    fontSize: 14,
  },

  resultBox: {
    marginTop: 35,

    height: 160,

    backgroundColor: COLORS.beige,

    borderRadius: 24,

    justifyContent: 'center',
    alignItems: 'center',

    padding: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,

    elevation: 4,
  },

  resultText: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.midnightGreen,
    textAlign: 'center',
  },
});