import React from 'react';
import { Box, Text } from '../theme';
import { menus, styles } from './Dashboard';
import Tab from './Tab';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

function More({ navigation }) {

  const { navigate } = navigation;

  //user
  const { account_number } = useSelector((state) => state.auth)


  const onSwitch = (routeNumber, routeName) => {
    const isCurrentRoute = routeNumber === 1 ? true : false;
    if (!isCurrentRoute) {
      navigate(routeName);
    }
  };

  return (<Box flex={1} backgroundColor="white" justifyContent="flex-end">
    <Box flex={1} padding="m">
      <Text variant="title1" color="black" fontSize={30}>
        More thing  you can do
      </Text>
      <Text variant="title2"
        marginTop="m"
        fontSize={25}
        fontWeight="600"
        marginBottom="m">
        Receive Money
      </Text>



      <Box
        backgroundColor="barter3"
        paddingVertical="m"
        paddingHorizontal="m"
        borderRadius="m">
        <Box flexDirection="row" alignItems="center">
          <Text variant="body" color="black"> Barter Account Number</Text>
          <Text
            variant="title1"
            color="black"
            fontSize={18}
            fontWeight="700"
            marginLeft="s">
            {account_number}
          </Text>
        </Box>

        <Box flexDirection="row" alignItems="center" >
          <Text variant="body" color="black"> Bank Name:</Text>
          <Text variant="titlei" color="black" fontSize={18} marginLeft="s" fontWeight="700">
            AGRICULTURAL DEVELOPMENT BANK
           </Text>
        </Box>
      </Box>

      <Box paddingVertical="l" >
        <TouchableOpacity>
          <Box flexDirection="row"
            justifyContent="space-between"
            borderBottomWidth={1}
            paddingBottom="m"
            borderBottomColor="primaryLight">
            <Box>
              <Text variant="title2" fontSize={17}>
                Invite friends
            </Text>
              <Text variant="body" fontSize={14}>
                Get paid for every friend that signup and uses the App
            </Text>
            </Box>
          </Box>
        </TouchableOpacity>

        <Box flexDirection="column" marginTop="m" paddingHorizontal="m" >
          <Text variant="title1" color="black" fontSize={20} fontWeight="bold">
            Make a payment
        </Text>

          <TouchableOpacity>
            <Box marginTop="m"
              flexDirection="row"
              justifyContent="space-between"
              borderBottomWidth={1}
              borderBottomColor="primaryLight"
              paddingBottom="m"
            >
              <Box>
                <Text variant="title2" fontSize={17}>
                  Pay wiyh QR code
              </Text>
                <Text variant="body" fontSize={14}>
                  Make payment with Visa
              </Text>
              </Box>

            </Box>
          </TouchableOpacity>



        </Box>

        <Box flexDirection="column" marginTop="m" paddingHorizontal="m" >
          <Text variant="title1" color="black" fontSize={20} fontWeight="bold">
            Send Money
        </Text>

          <TouchableOpacity>
            <Box marginTop="m"
              flexDirection="row"
              justifyContent="space-between"
              borderBottomWidth={1}
              borderBottomColor="primaryLight"
              paddingBottom="m"
            >
              <Box>
                <Text variant="title2" fontSize={17}>
                  Sen Money to MoMo
              </Text>
                <Text variant="body" fontSize={14}>
                  Make payment with MoMo
              </Text>
              </Box>

            </Box>
          </TouchableOpacity>



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

  </Box>

  )
}

export default More;
