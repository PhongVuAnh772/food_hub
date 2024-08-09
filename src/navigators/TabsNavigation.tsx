import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useEffect, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon, {Icons} from 'assets/icons/tabs/TabsIcon';
import * as Animatable from 'react-native-animatable';
import HomeScreen from 'features/home/screens/HomeScreen';
import { useTheme } from 'hooks/useTheme';

const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    type: Icons.Feather,
    icon: 'home',
    component: HomeScreen,
  },
  {
    route: 'Cart',
    label: 'Search',
    type: Icons.Feather,
    icon: 'search',
    component: HomeScreen,
  },
  {
    route: 'Favorite',
    label: 'Add New',
    type: Icons.Feather,
    icon: 'plus-square',
    component: HomeScreen,
  },
  {
    route: 'Settings',
    label: 'Account',
    type: Icons.FontAwesome,
    icon: 'user-circle-o',
    component: HomeScreen,
  },

  {
    route: 'Notifications',
    label: 'Account',
    type: Icons.FontAwesome,
    icon: 'user-circle-o',
    component: HomeScreen,
  },
];

const Tab = createBottomTabNavigator();

const TabButton = (props: any) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef<Animatable.View & View>(null) as any;
  const textViewRef = useRef<Animatable.View & View>(null) as any;
  const {colors} = useTheme();

  useEffect(() => {
    if (focused) {
      viewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
      textViewRef.current.animate({0: {scale: 0}, 1: {scale: 1}});
    } else {
      viewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
      textViewRef.current.animate({0: {scale: 1}, 1: {scale: 0}});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={[styles.container, {flex: focused ? 1 : 0.65}]}>
      <View>
        <Animatable.View
          ref={viewRef}
          style={[
            StyleSheet.absoluteFillObject,
            {backgroundColor: item.color, borderRadius: 16},
          ]}
        />
        <View style={[styles.btn]}>
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? colors.primary : colors.outlineVariant}
          />
          <Animatable.View ref={textViewRef}>
            {focused && (
              <Text
                style={{
                  paddingHorizontal: 8,
                  color: focused ? colors.primary : colors.outlineVariant,
                }}>
                {item.label}
              </Text>
            )}
          </Animatable.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default function AnimTab3() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {TabArr.map((item, index) => {
          return (
            <Tab.Screen
              key={index}
              name={item.route}
              component={item.component}
              options={{
                tabBarShowLabel: false,
                tabBarButton: props => <TabButton {...props} item={item} />,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    borderRadius: 16,
  },
});
