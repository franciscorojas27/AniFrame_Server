import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, Text, Pressable, StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useTextStyles } from '@/hooks/useTextStyles';

/**
 * This layout is required for the web platform.
 */
export default function TabLayout() {
  const colorScheme = useColorScheme();
  const textStyles = useTextStyles();

  const tabBarButton = (props: any) => {
    const style: any = props.style ?? {};
    return (
      <Pressable
        {...props}
        style={({ pressed, focused }) => [
          style,
          {
            opacity: pressed || focused ? 0.6 : 1.0,
          },
        ]}
      />
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ff0000ff',
        tabBarActiveBackgroundColor: '#000000',
        tabBarStyle: {
          width: '100%',
        },
        tabBarPosition: 'top',
        tabBarIconStyle: {
          height: textStyles.title.lineHeight,
          width: 0,
        },
        headerShown: false,
        tabBarIcon({ focused, color, size }) {
          return true;
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarButton,
          tabBarLabelStyle: textStyles.default,
          tabBarIcon: ({ color, size }: any) => null,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarButton,
          tabBarLabelStyle: textStyles.default,
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="tv_focus"
        options={
          Platform.OS === 'web'
            ? {
              href: null,
            }
            : {
              title: 'TV demo',
              tabBarButton,
              tabBarLabelStyle: styles.default,
              tabBarIcon: () => null,
            }
        }
      />
    </Tabs>
  );
}


const styles = StyleSheet.create({
  default: {
    fontFamily: 'System',
    fontSize: 16,
  }
})