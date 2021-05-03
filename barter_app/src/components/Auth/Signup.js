import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import theme, { Box, Text } from '../theme';
import { Input, Form, Item, Button } from 'native-base';
import {useDispatch} from 'react-redux';

const styles = StyleSheet.create({
  itemStyle: {
    marginTop: 20,
  },
  btntyle: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.barter,
    borderRadius: 5

  }
})


function Signup({ navigation }) {

  const { navigate } = navigation;
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userRef, setuserRef] = useState("");
  const [password, setPassword] = useState("")

  const onSubmit = () => {
    if (!email || !phone) return alert('please set all fied');
    const newUser = {
      name,
      email,
      phone,
      userRef,

    };
    navigate('password', { data: newUser, type: 'R' })

  }
  return <Box flex={1} backgroundColor="white">
    <Box paddingHorizontal="m" paddingVertical="s" >
      <Box marginTop="m">
        <Form>
          <Item style={{ ...styles.itemStyle }}>
            <Input placeholder="Name & surname"
              defaultValue={name}
              onChangeText={(text) => setName(text)}
            ></Input>
          </Item>

          <Item style={{ ...styles.itemStyle }}>
            <Input
              placeholder="Email address "
              keyboardType="email-address"
              defaultValue={email}
              onChangeText={(text) => setEmail(text)}
            ></Input>
          </Item>

          <Item style={{ ...styles.itemStyle }}>
            <Input
              placeholder="password "
              keyboardType="email-address"
              defaultValue={password}
              onChangeText={(text) => setPassword(text)}
            ></Input>
          </Item>



          <Item style={{ ...styles.itemStyle }}>
            <Input
              placeholder="phone number"
              keyboardType="phone-pad"
              defaultValue={phone}
              onChangeText={(text) => setPhone(text)}
            ></Input>
          </Item>

          <Item style={{ ...styles.itemStyle }}>
            <Input
              placeholder="Refferal Code(option) "
              defaultValue={userRef}
              onChangeText={(text) => setuserRef(text)}
            ></Input>
          </Item>

          <Item style={{ ...styles.itemStyle }}>
            <Button style={{ ...styles.btntyle }} onPress={onSubmit}>
              <Text variant="title1" fontSize={18}
                fontWeight={700}> continue</Text>
            </Button>
          </Item>
        </Form>
      </Box>
    </Box>
  </Box>;
}

export default Signup;
