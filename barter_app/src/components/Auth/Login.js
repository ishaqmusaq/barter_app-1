import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import theme, {Box, Text} from '../theme';
import {Input, Form, Item, Button} from 'native-base';


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

  },
})
function Login({navigation}) {
  const {navigate}=navigation
  const [email, setEmail] = useState("");
  

  const onLogin = () => {
    navigate('password', { data: { email }, type: 'LOGIN' })


    return <Box flex={1} backgroundColor="white">
      <Box paddingHorizontal="m" paddingVertical="m">
        <Text>Weaather you're creating account or signing back in
  let start with your email & password </Text>
        <Box marginTop="m">
          <Form>
            <Item style={{...styles.itemStyle}}>
              <Input
                placeholder="Email address "
                keyboardType="email-address"
                defaultValue={email}
                onChangeText={(text) => setEmail(text)}
              ></Input>
            </Item>

            <Item style={{...styles.itemStyle}}>
              <Button style={{ ...styles.btntyle }} onPress={onLogin}>
                <Text variant="title1" fontSize={18} fontWeight="700" >continue</Text>
              </Button>
            </Item>
          </Form>
        </Box>
      </Box>
    </Box>
  }
}

export default Login;
