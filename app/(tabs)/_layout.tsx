import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarStyle: { display: 'none' },
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          tabBarStyle: { display: 'none' },
        }}
      />
    </Tabs>
  );
}