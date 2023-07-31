const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Onboarding01 from "./screens/Onboarding01";
import Transactions from "./screens/Transactions";
import History1 from "./screens/History1";
import TotalBalanceGraph from "./screens/TotalBalanceGraph";
import AccountDetails from "./screens/AccountDetails";
import Bank from "./screens/Bank";
import TransactionDetails from "./screens/TransactionDetails";
import Convert from "./screens/Convert";
import Balances from "./screens/Balances";
import Transferred from "./screens/Transferred";
import AddNewCard from "./screens/AddNewCard";
import ErrorStateLocationAccess from "./screens/ErrorStateLocationAccess";
import IdentityVerification from "./screens/IdentityVerification";
import CreateAccountEmpty from "./screens/CreateAccountEmpty";
import RectangleScreen from "./screens/RectangleScreen";
import RectangleScreen1 from "./screens/RectangleScreen1";
import RectangleScreen2 from "./screens/RectangleScreen2";
import RectangleScreen3 from "./screens/RectangleScreen3";
import Sale from "./screens/Sale";
import ErrorStateNoNewActivity from "./screens/ErrorStateNoNewActivity";
import ErrorStatePaymentFailed from "./screens/ErrorStatePaymentFailed";
import SideManu from "./screens/SideManu";
import EditProfile from "./screens/EditProfile";
import SendMoney from "./screens/SendMoney";
import MainScreen from "./screens/MainScreen";
import SelectRecipients from "./screens/SelectRecipients";
import Recipients from "./screens/Recipients";
import PaymentSuccessful from "./screens/PaymentSuccessful";
import InviteFriends from "./screens/InviteFriends";
import ForgotPassword from "./screens/ForgotPassword";
import ForgotPasswordEmpty from "./screens/ForgotPasswordEmpty";
import SignInInfo from "./screens/SignInInfo";
import SignInEmpty from "./screens/SignInEmpty";
import Verified from "./screens/Verified";
import VerifyCode from "./screens/VerifyCode";
import VerifyCodeEmpty from "./screens/VerifyCodeEmpty";
import CreateAccountEnterPhoneN from "./screens/CreateAccountEnterPhoneN";
import CreateAccountEnterPhoneN1 from "./screens/CreateAccountEnterPhoneN1";
import CreateAccountINFO from "./screens/CreateAccountINFO";
import Welcome from "./screens/Welcome";
import Onboarding03 from "./screens/Onboarding03";
import Onboarding02 from "./screens/Onboarding02";
import Splash from "./screens/Splash";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded, error] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "NotoSerif-Regular": require("./assets/fonts/NotoSerif-Regular.ttf"),
    "NotoSerif-SemiBold": require("./assets/fonts/NotoSerif-SemiBold.ttf"),
    "Nunito-SemiBold": require("./assets/fonts/Nunito-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Roboto-Black": require("./assets/fonts/Roboto-Black.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Onboarding01"
              component={Onboarding01}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Transactions"
              component={Transactions}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="History"
              component={History1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TotalBalanceGraph"
              component={TotalBalanceGraph}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AccountDetails"
              component={AccountDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Bank"
              component={Bank}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TransactionDetails"
              component={TransactionDetails}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Convert"
              component={Convert}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Balances"
              component={Balances}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Transferred"
              component={Transferred}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddNewCard"
              component={AddNewCard}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ErrorStateLocationAccess"
              component={ErrorStateLocationAccess}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="IdentityVerification"
              component={IdentityVerification}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAccountEmpty"
              component={CreateAccountEmpty}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle127"
              component={RectangleScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle126"
              component={RectangleScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle125"
              component={RectangleScreen2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rectangle124"
              component={RectangleScreen3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sale"
              component={Sale}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ErrorStateNoNewActivity"
              component={ErrorStateNoNewActivity}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ErrorStatePaymentFailed"
              component={ErrorStatePaymentFailed}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SideManu"
              component={SideManu}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SendMoney"
              component={SendMoney}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MainScreen"
              component={MainScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SelectRecipients"
              component={SelectRecipients}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Recipients"
              component={Recipients}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PaymentSuccessful"
              component={PaymentSuccessful}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="InviteFriends"
              component={InviteFriends}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPasswordEmpty"
              component={ForgotPasswordEmpty}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignInInfo"
              component={SignInInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignInEmpty"
              component={SignInEmpty}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Verified"
              component={Verified}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerifyCode"
              component={VerifyCode}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="VerifyCodeEmpty"
              component={VerifyCodeEmpty}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAccountEnterPhoneNumberEmptyState"
              component={CreateAccountEnterPhoneN}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAccountEnterPhoneNumber"
              component={CreateAccountEnterPhoneN1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAccountINFO"
              component={CreateAccountINFO}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding03"
              component={Onboarding03}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Onboarding02"
              component={Onboarding02}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
