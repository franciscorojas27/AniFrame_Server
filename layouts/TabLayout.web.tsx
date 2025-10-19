import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import { Platform, Text, Pressable, StyleSheet } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useTextStyles } from '@/hooks/useTextStyles';

/**
 * This layout is required for the web platform.
 */
export default function TabLayout() {
  const [focusedTab, setFocusedTab] = useState<string | null>(null);
  const textStyles = useTextStyles();
  const tabBarButton = (props: any) => {
    const style: any = props.style ?? {};
    return (
      <Pressable
        {...props}
        onFocus={() => { setFocusedTab(props.accessibilityLargeContentTitle); }}
        onBlur={() => { setFocusedTab(null); }}
        style={({ pressed, focused }) => [
          style,
          {
            backgroundColor:
              props["aria-selected"] ? '#000000ff' : (focused ? '#ffffffff' : '#000000'),
          },
        ]}
      />
    );
  };

  return (
    <Tabs
      screenOptions={{
        freezeOnBlur: true,           // ⚡ bloquea interacción sin desmontar
        lazy: true,                   // carga solo cuando se enfoca
        headerShown: false,
        tabBarActiveTintColor: '#ff0000ff',
        tabBarActiveBackgroundColor: '#000000ff',
        tabBarBackground() {
          return (
            <Text
              style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: '#000000ff',
              }}
            />
          );
        },
        animation: 'shift',
        tabBarItemStyle: {
          backgroundColor: '#fff1f1ff',
        },
        tabBarStyle: {
          width: '100%',
        },
        tabBarPosition: 'top',
        tabBarIconStyle: {
          height: textStyles.title.lineHeight,
          width: 0,
        },
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
          tabBarLabel: ({ children, focused, color, position }) => {
            const labelColor = focused
              ? color
              : focusedTab === children
                ? '#000000ff'
                : '#ffffff';

            return (
              <Text style={{ ...textStyles.default, color: labelColor }}>
                {children}
              </Text>
            );
          },
          tabBarLabelStyle: textStyles.default,
          tabBarIcon: ({ color, size }: any) => null,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarButton,
          tabBarLabel: ({ children, focused, color, position }) => {
            const labelColor = focused
              ? color
              : focusedTab === children
                ? '#000000ff'
                : '#ffffff';

            return (
              <Text style={{ ...textStyles.default, color: labelColor }}>
                {children}
              </Text>
            );
          },
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
              tabBarLabel: ({ children, focused, color, position }) => {
                const labelColor = focused
                  ? color
                  : focusedTab === children
                    ? '#000000ff'
                    : '#ffffff';

                return (
                  <Text style={{ ...textStyles.default, color: labelColor }}>
                    {children}
                  </Text>
                );
              },
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
  },
  tab: {
    padding: 10,
    backgroundColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
  },
  tabFocused: {
    backgroundColor: 'white',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
  textFocused: {
    color: 'black',
  },
})
