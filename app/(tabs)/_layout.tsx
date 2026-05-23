import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Colors strictly sampled from your new pet care inspiration image
const COLORS = {
  bgSoftPink: '#FCE7F3',     // The soft pastel pink background from the image
  inkBlack: '#000000',       // Deep solid black for active items, borders, and buttons
  mutedGray: '#A1A1AA',      // Soft gray for unselected states
  white: '#FFFFFF',
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        sceneStyle: {
          backgroundColor: COLORS.bgSoftPink, // Global screen background matching the image
        },

        tabBarShowLabel: true,
        tabBarActiveTintColor: COLORS.inkBlack,
        tabBarInactiveTintColor: COLORS.mutedGray,

        tabBarStyle: {
          position: 'absolute',
          left: 18,
          right: 18,
          bottom: 25,
          height: 76,

          backgroundColor: COLORS.white,
          borderRadius: 24, // Clean, rounded design matching the cards

          // Thick high-contrast borders
          borderWidth: 2.5,
          borderColor: COLORS.inkBlack,
          borderTopWidth: 2.5,
          borderTopColor: COLORS.inkBlack,

          // Crisp, solid offset shadow
          shadowColor: COLORS.inkBlack,
          shadowOffset: { width: 4, height: 4 },
          shadowOpacity: 1,
          shadowRadius: 0,
          elevation: 0,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
          marginBottom: 10,
        },

        tabBarItemStyle: {
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="learning"
        options={{
          title: 'Learning',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'book' : 'book-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="calc"
        options={{
          title: 'Calculator',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'calculator' : 'calculator-outline'}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}