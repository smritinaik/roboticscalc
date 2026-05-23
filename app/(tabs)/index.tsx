import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const COLORS = {
  bgCream: '#FDFBF7',         // Warm retro cream overall background
  inkBlack: '#000000',        // Bold outlines and text
  cardMint: '#A7F3D0',        // Vibrant pastel green for hero card
  cardYellow: '#FEF08A',      // Pastel yellow for functions card
  cardCoral: '#FCA5A5',       // Coral pink/red for the CTA block
  white: '#FFFFFF',
};

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      
      {/* 1. HERO PACKED CARD */}
      <View style={styles.heroCard}>
        {/* Decorative Badge */}
        <View style={styles.badge}>
          <Text style={styles.badgeText}>🤖 WELCOME BACK!</Text>
        </View>

        <View style={styles.heroMainRow}>
          <View style={styles.heroTextLeft}>
            <Text style={styles.mainTitle}>ROBOTICS</Text>
            <Text style={styles.mainTitle}>CALCULATOR</Text>
            <Text style={styles.heroTagline}>Quickly master robotics formulas and calculations.</Text>
          </View>
          
          <Image
            source={require('../../assets/images/robo.png')}
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>

        {/* Mini Stats Banner */}
        <View style={styles.statsRow}>
          <Text style={styles.statsText}>Formulas: <Text style={{fontWeight: '900'}}>3</Text></Text>
          <View style={styles.statsDivider} />
          <Text style={styles.statsText}>Status: <Text style={{fontWeight: '900'}}>Ready</Text></Text>
        </View>
      </View>

      {/* 2. KEY FUNCTIONS LIST CARD */}
      <View style={styles.functionsCard}>
        <Text style={styles.sectionTitle}>Key Functions</Text>
        
        <View style={styles.listItem}>
          <Text style={styles.listEmoji}>⚙️</Text>
          <View style={styles.listTextContainer}>
            <Text style={styles.listTitle}>GEAR RATIOS</Text>
            <Text style={styles.listSub}>Calculate speed & torque differences.</Text>
          </View>
        </View>

        <View style={styles.listItem}>
          <Text style={styles.listEmoji}>🚀</Text>
          <View style={styles.listTextContainer}>
            <Text style={styles.listTitle}>OUTPUT RPM</Text>
            <Text style={styles.listSub}>Find rotational limits easily.</Text>
          </View>
        </View>

        <View style={styles.listItem}>
          <Text style={styles.listEmoji}>💪</Text>
          <View style={styles.listTextContainer}>
            <Text style={styles.listTitle}>MOTOR TORQUE</Text>
            <Text style={styles.listSub}>Measure rotational turning force.</Text>
          </View>
        </View>
      </View>

      {/* 3. GET STARTED ACTION BOX */}
      <View style={styles.ctaCard}>
        <TouchableOpacity 
          style={styles.calcButton}
          onPress={() => router.push('/calc')} // Direct layout route navigation logic
          activeOpacity={0.8}
        >
          <Text style={styles.calcButtonText}>CALCULATE NOW!</Text>
        </TouchableOpacity>
        <Text style={styles.ctaSubtext}>Ready to calculate? Tap to start.</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgCream,
  },
  
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 44,
    paddingBottom: 130, // Keeps scrollable space clear of floating TabBar
  },

  /* Hero Card Layout styles */
  heroCard: {
    backgroundColor: COLORS.cardMint,
    borderRadius: 24,
    borderWidth: 2.5,
    borderColor: COLORS.inkBlack,
    padding: 18,
    marginBottom: 18,
    shadowColor: COLORS.inkBlack,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
  },

  badge: {
    backgroundColor: COLORS.white,
    borderWidth: 1.5,
    borderColor: COLORS.inkBlack,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignSelf: 'flex-start',
    marginBottom: 14,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: '900',
    color: COLORS.inkBlack,
  },

  heroMainRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  heroTextLeft: {
    flex: 1,
    paddingRight: 8,
  },

  mainTitle: {
    fontSize: 26,
    fontWeight: '900',
    color: COLORS.inkBlack,
    lineHeight: 30,
  },

  heroTagline: {
    fontSize: 13,
    fontWeight: '600',
    color: COLORS.inkBlack,
    marginTop: 8,
    lineHeight: 18,
    opacity: 0.8,
  },

  heroImage: {
    width: 110,
    height: 110,
  },

  statsRow: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderWidth: 2,
    borderColor: COLORS.inkBlack,
    borderRadius: 12,
    padding: 10,
    marginTop: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  statsText: {
    fontSize: 13,
    fontWeight: '700',
    color: COLORS.inkBlack,
  },

  statsDivider: {
    width: 2,
    height: 14,
    backgroundColor: COLORS.inkBlack,
    marginHorizontal: 20,
  },

  /* Functions Card list styles */
  functionsCard: {
    backgroundColor: COLORS.cardYellow,
    borderRadius: 24,
    borderWidth: 2.5,
    borderColor: COLORS.inkBlack,
    padding: 20,
    marginBottom: 18,
    shadowColor: COLORS.inkBlack,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: COLORS.inkBlack,
    marginBottom: 16,
  },

  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },

  listEmoji: {
    fontSize: 24,
    marginRight: 12,
  },

  listTextContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    paddingBottom: 8,
  },

  listTitle: {
    fontSize: 14,
    fontWeight: '900',
    color: COLORS.inkBlack,
  },

  listSub: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.inkBlack,
    opacity: 0.7,
    marginTop: 2,
  },

  /* CTA Button Layout styles */
  ctaCard: {
    backgroundColor: COLORS.cardCoral,
    borderRadius: 24,
    borderWidth: 2.5,
    borderColor: COLORS.inkBlack,
    padding: 20,
    alignItems: 'center',
    shadowColor: COLORS.inkBlack,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 0,
  },

  calcButton: {
    backgroundColor: COLORS.inkBlack,
    borderRadius: 50,
    width: '100%',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.inkBlack,
    shadowColor: COLORS.inkBlack,
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 0,
  },

  calcButtonText: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: '900',
    letterSpacing: 0.5,
  },

  ctaSubtext: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.inkBlack,
    marginTop: 10,
    opacity: 0.8,
  },
});