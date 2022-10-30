import { View, Text, SafeAreaView, Pressable, Image, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import Plan from "../Data/Plan";
import { Entypo } from "@expo/vector-icons";
const PlansScreen = () => {
  const data = Plan;

  return (
    <ScrollView style={{marginTop: 50}} showsHorizontalScrollIndicator={false}>
      <View
        style={{
          padding: 10,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: "bold",
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
              fontWeight: "bold",
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
              fontWeight: "bold",
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
              fontWeight: "bold",
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
              height: 160,
              borderRadius: 7,
              borderColor: "#e50914",
              borderWidth: 1,
              padding: 15,
              margin: 10,
            }}
          >
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <View
                style={{
                  backgroundColor: "#e50914",
                  padding: 10,
                  width: 120,
                  borderRadius: 7,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  {item.name}
                </Text>
              </View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                Price: ₹{item.price}
              </Text>
            </View>

            <View
              style={{
                marginTop: 15,
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <View>
                <Text style={{ color: "gray" }}>
                  Video Quality: {item.videoQuality}
                </Text>
                <Text
                  style={{ fontSize: 16, fontWeight: "bold", marginTop: 3 }}
                >
                  Resolution {item.resolution}
                </Text>
              </View>
              <Fontisto
                style={{ marginRight: 6 }}
                name="netflix"
                size={24}
                color="black"
              />
            </View>

            <View
              style={{
                marginTop: 10,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 16 }}>Devices you csn watch On: </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                {item.devices.map((device) => (
                  <Entypo
                    style={{ marginRight: 6 }}
                    name={device.name}
                    size={27}
                    color="#e50914"
                  />
                ))}
              </View>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
};

export default PlansScreen;
