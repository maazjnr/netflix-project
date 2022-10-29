import { View, Text, SafeAreaView, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import Plan from "../Data/Plan";

const PlansScreen = () => {
  const data = Plan;

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: 600,
          }}
        >
          Choose the plan that is right for you
        </Text>

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}
        >
          <Feather name="check" size={24} color="#e50914" />
          <Text
            style={{
              marginLeft: 6,
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Recommendations just for you
          </Text>
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}
        >
          <Feather name="check" size={24} color="#e50914" />
          <Text
            style={{
              marginLeft: 6,
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Cancel your plan anytime
          </Text>
        </View>

        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 3 }}
        >
          <Feather name="check" size={24} color="#e50914" />
          <Text
            style={{
              marginLeft: 6,
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Watch all you want Ad free
          </Text>
        </View>
        <View style={{ marginTop: 20 }} />
        {data.map((item, index) => (
          <Pressable
            key={index}
            style={{
              height: 150,
              borderRadius: 7,
              borderColor: "#e50914",
              borderWidth: 0.5,
              padding: 15
            }}
          >
            <View>
              <Text>{item.name}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default PlansScreen;
