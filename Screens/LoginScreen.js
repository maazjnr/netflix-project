import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
  Pressable,
  StyleSheet,
  TextInput,
} from "react-native";
import { Input } from "react-native-elements";
import Logo from "../assets/580b57fcd9996e24bc43c529.png";

const LoginScreen = () => {
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
          <Image
            style={styles.image}
            source={require("../assets/580b57fcd9996e24bc43c529.png")}
          />
        </View>

        <View style={{ width: 320, marginTop: 45 }}>
          <TextInput
            placeholderTextColor={"white"}
            type="email"
            placeholder="email"
            value={input}
            onChangeText={(text) => setInput(text)}
            style={{
              width: 330,
              padding: 20,
              borderRadius: 5,
              color: "white",
              backgroundColor: "gray",
            }}
          />

          <TextInput
            placeholderTextColor={"white"}
            type="password"
            placeholder="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={{
              width: 330,
              padding: 20,
              borderRadius: 5,
              color: "white",
              backgroundColor: "gray",
              marginTop: 10,
            }}
          />
        </View>

        <Pressable
          style={
            password.length > 4
              ? {
                  width: 330,
                  backgroundColor: "red",
                  marginLeft: "auto",
                  marginRight: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 14,
                  marginTop: 15,
                }
              : {
                  width: 330,
                  marginLeft: "auto",
                  marginRight: "auto",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#fff",
                  borderWidth: 2,
                  padding: 14,
                  marginTop: 15,
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
            Sign In
          </Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Register")}>
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontSize: 19,
              fontWeight: "bold",
              marginTop: 14,
            }}
          >
            New to Netflix? Sign Up now
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 50,
    marginTop: 40,
  },
});

export default LoginScreen;
