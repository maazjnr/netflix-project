import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
  Pressable,
} from "react-native";
import { Input } from "react-native-elements";
import Logo from "../assets/580b57fcd9996e24bc43c529.png";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#000",
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center", justifyContent: "space-between" }}>
         <Image  source={require("../assets/580b57fcd9996e24bc43c529.png")}
          style={{ width: 150, height: 50, marginTop: 40 }} />
        </View>

        <View style={{ width: 320, marginTop: 45 }}>
          <Input
            placeholderTextColor={"white"}
            type="email"
            placeholder="email"
            value={input}
            onChangeText={(text) => setInput(text)}
            style={{
              width: 330,
              padding: 15,
              borderRadius: 5,
              color: "white",
              backgroundColor: "gray",
            }}
          />

          <Input
            placeholderTextColor={"white"}
            type="password"
            placeholder="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={{
              width: 330,
              padding: 15,
              borderRadius: 5,
              color: "white",
              backgroundColor: "gray",
              marginTop: 10,
            }}
          />
        </View>

        <Pressable
          onPress={() =>
            navigation.navigate("Plans", {
              input: input,
              password: password,
            })
          }
          style={
            password.length > 4
              ? {
                  width: 300,
                  backgroundColor: "red",
                  marginLeft: "auto",
                  marginRight: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 14,
                  marginTop: 10,
                }
              : {
                  width: 300,
                  marginLeft: "auto",
                  marginRight: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#fff",
                  borderWidth: 2,
                  padding: 14,
                  marginTop: 10,
                }
          }
        >
          <Text
            style={{
              alignItems: "center",
              fontSize: 19,
              fontWeight: "700",
              color: "#fff",
            }}
          >
            Register
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
