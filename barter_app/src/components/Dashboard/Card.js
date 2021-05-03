import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Text } from '../theme';
import { SEGMENT, ICON_SIZE, PADDING } from '../../Constants';
import theme from '../theme';
import { menus } from './Dashboard';
import Tab from './Tab';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {styles} from './Dashboard'


function Card({ navigation }) {

  const { navigate } = navigation;
  const onSwitch = (routeNumber, routeName) => {
    const isCurrentRoute = routeNumber === 1 ? true : false;
    if (!isCurrentRoute) {
      navigate(routeName);
    }
  };


  return <Box justiftyContent="flex-end" flex={1}>
    <Box flex={1} paddingHorizontal="m" paddingVertical="m">
      <Box justiftyContent="space-between"
        alignItems="center"
        flexDirection="row"

      >
        <Box></Box>

        <TouchableOpacity>
          <Box width={120}
            borderRadius="s"
            backgroundColor="primaryLight"
            justiftyContent="center"
            paddingVertical="s"
            alignItems="center">
            <Text variant="body">New Card</Text>
          </Box>
        </TouchableOpacity>
      </Box>
      <Box marginTop="xl">
        <Box backgroundColor="barter"
          borderRadius="l"
          height={220}
          paddingVertical="l"
        >
          <Box flexDirection="row"
            alignItems="center"
            justiftyContent="space-between"
            paddingRight="l">
            <Box
              backgroundColor="barter4"
              borderTopRightRadius="l"
              borderBottomRightRadius="l"
              paddingRight="m"
              paddingLeft="m"
            >
              <Text variant="body" color="white"
                fontWeight="400"> Limited use Card</Text>
            </Box>
            <Box>
              <Text variant="title2" color="white" >
                GH456
               </Text>
            </Box>
          </Box>
          <Box marginTop="m" paddingHorizontal="l">
            <Text variant="body" fontSize={12}>
              ALFRED
            </Text>
            <Text variant="body"
              color="white"
              fontSize={25}
              marginTop="s">
              175 6789 6567 8890 </Text>
          </Box>
          <Box justiftyContent="space-between"
            flexDirection="row"
            paddingHorizontal="l"
            marginTop="m"
            alignItems="center" >
            <Box flexDirection="row" alignItems="center">
              <Box marginRight="s">
                <Text variant="body"
                  fontSize={9}
                  color="white"
                  lineHeight={19}
                >
                  Vaalid {'\n'}Till
                </Text>

              </Box>
              <Box >
                <Text color="white" variant="body">
                  07/25
                </Text>
              </Box>
            </Box>
            <Box>
              <Text variant="title1"
                fontSize={25}
                color="white"
                textTransform="uppercase">
                Visa
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>

    {/* Tap application */}
    <Box height={70} backgroundColor="danger">
      <Box style={{ ...styles.tabs }}>
        {menus.map(({ icon, text, routeName }, index) => (
          <Box {...{ ...index }} style={{ ...styles.tab }} key={index} >
            <Tab
              onPress={(index, route) => onSwitch(index, route)}
              {...{ index, text, routeName }}
            >
              {icon}
            </Tab>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>;
}

export default Card;
