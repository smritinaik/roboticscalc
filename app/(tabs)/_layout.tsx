import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const COLORS = {
  darkGreen: '#0A3323',
  mossGreen: '#839958',
  beige: '#F7F4D5',
  rosyBrown: '#ffd6d0',
  midnightGreen: '#105666',
};

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        sceneStyle: {
          backgroundColor: COLORS.rosyBrown, // Global screen background
        },

        tabBarShowLabel: true,

        tabBarActiveTintColor: COLORS.beige,
        tabBarInactiveTintColor: 'rgba(247,244,213,0.55)',

        tabBarStyle: {
          position: 'absolute',
          left: 18,
          right: 18,
          bottom: 25,
          height: 78,

          backgroundColor: COLORS.darkGreen,

          borderRadius: 28,
          borderTopWidth: 0,

          borderWidth: 1,
          borderColor: 'rgba(247,244,213,0.08)',

          shadowColor: COLORS.midnightGreen,
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.25,
          shadowRadius: 18,

          elevation: 20,
        },

        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          marginBottom: 8,
        },

        tabBarItemStyle: {
          paddingTop: 8,
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