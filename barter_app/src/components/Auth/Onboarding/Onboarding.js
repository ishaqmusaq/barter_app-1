import React, {useRef, Fragment, useEffect} from 'react';
import {Box, Text} from '../../theme';
import {Dimensions} from 'react-native';
import {Butterfly} from '../../../Icons';
import {useScrollHandler} from 'react-native-redash';
import Animated, {divide} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {StackActions} from '@react-navigation/native';

/* Components */
import Slide from './Slide';
import Dot from './Dot';

const {width, height} = Dimensions.get('window');

const slides = [
  {
    title: 'Your Better financial Half',
    body:
      'Managing Your funds should be the easiest task on your to-do-lis, so we created Barter just for you',
  },
  {
    title: 'Borderless Payment Experience',
    body:
      'Create custom virtua USD card at affordable rates for your payments and subscriptions',
  },

  {
    title: 'Take Control Over Your Money Anytime, Anywhere',
    body:
      "Always know what's going on with your money. Thanks for the instant notification",
  },
  {
    title: 'Account Protection',
    body: 'Barter is secured by Flutterwave. Your money is always safe with us',
  },
];

function Onboarding({navigation}) {
  const scroll = useRef (null);

  const onLogin =()=>{
    navigate('Login')
  }
  const onRegister = ()=>{
    navigate('Register');
  }
  return (
    <Box flex={1} backgroundColor="primary" >
      <Box height={height * 0.65}>
        <Box flexDirection='row' justifyContent="center"
          alignItems="center"
          paddingTop="m">
          <Butterfly width={40} height={40} />
          <Text variant="title1" color="black"
            fontSize={30}
            fontWeight="bold"
            textDecorationStyle="solid"
            style={{ marginLeft: 3 }}>
            HandInHand
          </Text>
        </Box>
        <Animated.ScrolView ref={scroll}
          horizontal
          snapToInterval={width}
          showsHorizontalScrollIndicator={false}
          bounces={false}
        >
          {slides.map(( title, body ), index =>(
            <Fragment key={index}>
              <Slide {...{title,body}} />
            </Fragment>
          ))}

        </Animated.ScrolView>
      </Box>
      <Box flex={1} justifyContent="center"
       alignItems="centnter"
       paddingVertical="m"
       >
        <TouchableOpacity onPress={onRegister}>
          <Box
           width={width *0.8 }
          backgroundColor="barter"
          paddingVertical="m"
          borderRadius="m"
          marginBottom="s"
          >
            <Text textAlign="center"
            variant="title"
            fontSize={18}
            >Create an account</Text>
          </Box>
        </TouchableOpacity>

        <TouchableOpacity onPress={onLogin}>
          <Box width={width *0.8 }
          backgroundColor="primaryLight"
          paddingVertical="m"
          borderRadius="m"
          marginBottom="s"
          >
            <Text textAlign="center"
            variant="title1"
            color="barter"
            fontSize={18}
            >Login</Text>
          </Box>
        </TouchableOpacity>

      </Box>
    </Box>
  );
}

export default Onboarding;
