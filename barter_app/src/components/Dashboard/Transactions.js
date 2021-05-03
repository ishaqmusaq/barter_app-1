import React from 'react';
import { Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MaterialIcon from 'react-native-vector-icons/dist/MaterialIcons';
import theme, { Box, Text } from '../theme';
import { Container, Content } from 'native-base';
import { menus, styles } from './Dashboard';
import Tab from './Tab';

const { width, height } = Dimensions.get('window');

const transactions = [
  { type: 'send', name: 'Samuel', price: 200, purpose: 'I paid money to Victor' },
  {
    type: 'received',
    name: 'Cynthia',
    price: 200,
    purpose: 'Refund from mama Deborah',
    date: 'Mar 3 2021',
  },
  {
    type: 'send',
    name: 'Samuel',
    price: 200,
    purpose: 'I bought an apple',
    date: 'Mar 3 2021',
  },
  {
    type: 'received',
    name: 'Nengi',
    price: 200,
    purpose: 'Office Payment',
    date: 'Mar 3 2021',
  },
  {
    type: 'send',
    name: 'Samuel',
    price: 200,
    purpose: 'I bought a shoe',
    date: 'Mar 3 2021',
  },
  {
    type: 'received',
    name: 'Nnanna',
    price: 200,
    purpose: 'Transfer from Emeka',
    date: 'Mar 3 2021',
  },
];

function Transactions({ navigation }) {
  const { navigate } = navigation


  const onSwitch = (routeNumber, routeName) => {
    const isCurrentRoute = routeNumber === 1 ? true : false;
    if (!isCurrentRoute) {
      navigate(routeName);
    }
  };


  return (
    <Box flex={1} backgroundColor="white" justifyContent="flex-start">
      <Box height={height * 0.3}
        backgroundColor="white"
        paddingHorizontal="m"
      >
        <Box flexDirection="row"
          justifyContent="flex-end"
          alignItems="center"
          paddingTop="s">
          <Ionicons name="settings" size={28} color={theme.colors.darkGrey} />
          <Text variant="title1"
            color="darkGrey"
            fontSize={28}
            marginHorizontal="m">|</Text>
          <TouchableOpacity>
            <Ionicons name="notification"
              size={28}
              color={theme.colors.darkGrey} />
          </TouchableOpacity>
        </Box>
        <Box backgroundColor="barter"
          paddingHorizontal="m"
          paddingVertical="m"
          marginTop="s"
          borderRadius="m">
          <Box>
            <Box flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text
                variant="title1"
                color="black"
                fontSize={30}
              >
                GHC{account_balance}.
          <Text fontSize={12}
                  marginRight="m">00</Text>
              </Text>
              <Box backgroundColor="darkGrey"
                style={{ paddingHorizontal: 10, paddingVertical: 4 }}
                borderRadius="s"
                justifyContent="center"
                alignItems="center"
              >
                <Text textAlign="center"
                  variant="title1"
                  fontSize={15}
                  color="black"
                >GH</Text>
                <Box justifyContent="center" alignItems="center">

                  <MaterialIcon name="arrow-drop-down"
                    size={18}
                    color={theme.colors.black} />

                </Box>
              </Box>
            </Box>
          </Box>
          <Box marginTop="m" marginBottom="m">
            <Box width={90} backgroundColor="darkGrey"
              style={{ paddingVertical: 7, paddingHorizontal: 5 }}
              borderRadius="s"
              alignItems="center"
              justifyContent="center"
              marginTop="s">
              <Text textAlign="center" variant="title1" fontSize={15} color="black">
                Add Money
        </Text>

            </Box>
          </Box>
        </Box>
      </Box>

      <Container>
        <Content style={{ paddingBottom: theme.spacing.xl }}
          showVerticalScrollIndicator={false}>
          <Box paddingHorizontal="m">
            <Box
              flexDirection="row"
              justifyContent="space-between"
              alignItems=" center">
              <Text>Last 8 days </Text>
            </Box>
          </Box>
          <Box flexDirection="row"
            paddingHorizontal="m"
            justifyContent="space-between">
            <Box> Text Graph</Box>
          </Box>

          <Box paddingRight="xl">
            <Box marginBottom="m">
              <Text variant="body" fontSize={12} >Total Spending</Text>
              <Text variant="title1" color="danger" fontSize={25}>GH0.00</Text>
            </Box>

            <Box marginBottom="m">
              <Text variant="body" fontSize={12} >Total Money received</Text>
              <Text variant="title1" color="danger" fontSize={25}>GH0.00</Text>
            </Box>
          </Box>
          <Box paddingVertical="m">
            {!transactions.length > 0 ? (
              <Text variant="body" textAlign="center">
                No Transactions  for last 8 days
              </Text>
            ) : (
              <Box>
                {transactions.map(
                  ({ name, type, price, purpose, date }, index) => (
                    <Box key={index}
                      paddingHorizontal="m"
                      flexDirection="row"
                      justifyContent="space-between"
                      marginBottom="m"
                      alignItems=" center"
                      paddingVertical="m"
                      marginBottomWidth={1}

                    >
                      <Box>
                        <Text variant="body">{name}</Text>
                        <Text variant="body" fontSize={5} marginTop="s">{date}</Text>
                      </Box>
                      <Box> <Text variant="body" fontWeight="600" color={type == 'received' ? 'primary' : 'danger'}>
                        {type == 'send' ? `- GH${price}` : `GH${price}`}</Text></Box>
                    </Box>
                  ),
                )}
              </Box>
            )}
          </Box>
        </Content>
      </Container>

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

export default Transactions;
