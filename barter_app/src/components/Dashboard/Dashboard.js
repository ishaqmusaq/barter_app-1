import React, { useEffect } from 'react';
import { Dimensions, ImageBackground, StyleSheet } from 'react-native';
import theme, { Box, Text } from '../theme';
import { Container, Content } from 'native-base';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {
  Butterfly,
  Phone,
  Bills,
  Nigeria,
  Usa,
  Home,
  Transactions,
  More,
  Cards,
} from '../../Icons';
import Animated from 'react-native-reanimated';
import { pattern } from '../../../assets/images';
import { SEGMENT, ICON_SIZE, PADDING } from '../../Constants';
import Tab from './Tab';
import {
  TapGestureHandler,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { socket, roomID, receiver } from '../../store/actions/transactionAction';
import { useDispatch, useSelector } from 'react-redux';

const { width, height } = Dimensions.get('window');

const actions = [
  {
    title: 'Request Money',
    icon: <Butterfly width={20} height={20} />,
    color: '#FDD1FF',
    cta: 'Request',
  },
  {
    title: 'Send Money',
    icon: <Butterfly width={20} height={20} />,
    color: '#F9F9D6',
    cta: 'Send',
  },
  {
    title: 'Buy Airtime',
    icon: <Phone width={20} height={20} />,
    color: '#DCF5FF',
    cta: 'Buy',
  },
  {
    title: 'Pay Bills',
    icon: <Bills width={20} height={20} />,
    color: '#C6E1DD',
    cta: 'Pay',
  },
];

export const menus = [
  { text: 'Home', icon: <Home width={30} height={30} />, routeName: 'Home' },
  { text: 'Cards', icon: <Cards width={30} height={30} />, routeName: 'Card' },
  {
    text: 'Transactions',
    icon: <Transactions width={30} height={30} />,
    routeName: 'Transactions',
  },
  { text: 'More', icon: <More width={30} height={30} />, routeName: 'More' },
];

function Dashboard({ navigation }) {

  const { navigate } = navigation;
  //user account balance
  const { account_balance } = useSelector((state) => state.auth);
  const onSwitch = (routeNumber, routeName) => {
    const isCurrentRoute = routeNumber === 0 ? true : false;
    if (!isCurrentRoute) {
      navigate(routeName);
    }
  };

  const onCTA = (route) => {
    if (route == 'Send') return navigate('Send')
  };


  return <Box flex={1} backgroundColor="white"
    justifyContent="flex-end">
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
        showsVerticalScrollIndicator={false}>
        <Box flexDirection="row" flexWrap="wrap" justifyContent="center">
          {actions.map(({ title, icon, color, cta }) => (
            <Box style={{ backgroundColor: color }}
              key={title}
              padding="m"
              width={width / 2.3}
              height={120}
              margin="s"
              borderRadius="m">
              <TouchableOpacity onPress={() => onCTA(cta)}>
                <Box style={{ borderRadius: 100 }}
                  paddingHorizontal="m"
                  paddingVertical="s"
                  backgroundColor="white"
                  width={50}
                  justifyContent="center"
                  alignItems="center"
                  marginVertical="s">
                  {icon}
                </Box>
                <Text variant="title1" fontSize={13} fontWeight="700">
                  {title}</Text>
              </TouchableOpacity>
            </Box>
          ))}
        </Box>
        <TapGestureHandler>
          <Box paddingHorizontal="m" marginBottom="1">
            <Box marginTop="1"
              backgroundColor="barter3"
              paddingVertical="1"
              borderRadius="m"
              height={150}
              justifyContent="center"
              alignItems="center"
              paddingHorizontal="1"
            >
              <Entypo
                name="circle-with-plus"
                size={15}
                color={theme.colors.barter} />
              <Text variant="body" textAlign="center"
                paddingHorizontal="1"
                marginTop="s"
              >
                Tap here to create your Dollar Card now
                </Text>

            </Box>
          </Box>
        </TapGestureHandler>
        <Box paddingHorizontal="m" marginBottom="xl">
          <ImageBackground
            source={pattern}
            style={{ height: 180, width: '100%', paddingTop: 50 }}
          >
            <Box
              justifyContent="center"
              alignItems="center"
              paddingLeft="l"
              paddingRight="xl"
              borderRadius="l"
            >
              <Text
                variant="title2"
                color="white"
                fontWeight="700"
              >
                Send a redeemable gift card to family & friends anywhere inthe world
</Text>
            </Box>

          </ImageBackground>
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
  </Box>;
}
export const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    backgroundColor: '#1D336E',
    justifyContent: 'flex-end'

  },
  tabs: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primaryLight,
  },
  tab: {
    width: SEGMENT,
    height: ICON_SIZE + PADDING * 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Dashboard;
