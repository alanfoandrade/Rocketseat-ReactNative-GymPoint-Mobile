import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import SignIn from './pages/SignIn';
import CheckIn from './pages/CheckIn';
import HelpOrders from './pages/Help/HelpOrders';
import CheckAnswer from './pages/Help/CheckAnswer';
import AddHelpOrder from './pages/Help/AddHelpOrder';

const HelpIcon = ({ tintColor }) => (
  <Icon name="live-help" size={22} color={tintColor} />
);

export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
        }),
        App: createBottomTabNavigator(
          {
            CheckIn,
            Help: {
              screen: createStackNavigator(
                {
                  HelpOrders,
                  CheckAnswer,
                  AddHelpOrder,
                },
                {
                  headerLayoutPreset: 'center',
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#444',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                    headerStyle: {
                      borderBottomWidth: 1,
                      borderBottomColor: '#ddd',
                      height: 45,
                    },
                  },
                }
              ),
              resetOnBlur: true,
              navigationOptions: {
                tabBarLabel: 'Pedir ajuda',
                tabBarIcon: HelpIcon,
              },
            },
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              labelStyle: {
                marginTop: 4,
                fontSize: 14,
              },
              style: {
                height: 70,
                padding: 15,
                borderTopWidth: 1,
                borderTopColor: '#ddd',
              },
              keyboardHidesTabBar: true,
              activeTintColor: '#ee4e62',
              inactiveTintColor: '#999',
            },
          }
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      }
    )
  );

HelpIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};
