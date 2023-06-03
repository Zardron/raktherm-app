import React from "react";
import {
  Image,
  View,
  Text,
  Box,
  AspectRatio,
  HStack,
  Center,
  Stack,
  Heading,
} from "native-base";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { SimpleLineIcons } from "@expo/vector-icons";
import { NewsfeedData } from "../assets/data/Newsfeed";
import { Dimensions } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";

const HomeScreen = () => {
  const navigation = useNavigation();
  const deviceWidth = Dimensions.get("window").width;

  var lastPost = NewsfeedData[NewsfeedData.length - 1].id;

  return (
    <>
      <Header headerTitle={"Home"} mainScreen={true} />
      <View
        style={{
          flex: 1,
          backgroundColor: "#e5e7ebd1",
          borderBottomWidth: 50,
          borderColor: "#008053",
        }}
      >
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#404041",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Image
            source={require("../assets/logo_agt.png")}
            style={{
              width: "60%",
              height: 100,
              marginTop: 10,
            }}
            alt="banner"
          />
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: "#404041",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Text style={{ fontSize: 30, paddingTop: 20, paddingBottom: 10 }}>
            Newsfeed
          </Text>
        </View>
        <ScrollView>
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 30,
            }}
          >
            {/* POST */}
            {NewsfeedData.map((data, key) => (
              <View
                style={{
                  marginTop: 10,
                  marginBottom: data.id === lastPost ? 20 : 0,
                  paddingHorizontal: 20,
                }}
                key={key}
              >
                <Box alignItems="center">
                  <Box
                    rounded="lg"
                    overflow="hidden"
                    borderColor="coolGray.200"
                    borderWidth="1"
                    _dark={{
                      borderColor: "coolGray.600",
                      backgroundColor: "gray.700",
                    }}
                    _web={{
                      shadow: 2,
                      borderWidth: 0,
                    }}
                    _light={{
                      backgroundColor: "gray.50",
                    }}
                  >
                    <Box>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate({
                            name: "FeedDetails",
                            params: { _id: data.id },
                          })
                        }
                      >
                        <AutoHeightImage
                          key={key}
                          source={data.imgSrc}
                          alt="img"
                          width={400}
                        />
                      </TouchableOpacity>
                    </Box>
                    <Stack p="4" space={3}>
                      <HStack
                        alignItems="center"
                        space={4}
                        justifyContent="space-between"
                      >
                        <HStack alignItems="center">
                          <Text
                            color="coolGray.600"
                            _dark={{
                              color: "warmGray.200",
                            }}
                            fontWeight="400"
                          >
                            {data.datePosted}
                          </Text>
                        </HStack>
                      </HStack>
                      <Center
                        bg="#008053"
                        _dark={{
                          bg: "violet.400",
                        }}
                        _text={{
                          color: "warmGray.50",
                          fontWeight: "700",
                          fontSize: "xs",
                        }}
                        position="absolute"
                        top="0"
                        right="0"
                        px="3"
                        py="1.5"
                      >
                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate({
                              name: "FeedDetails",
                              params: { _id: data.id },
                            })
                          }
                        >
                          <SimpleLineIcons
                            name="options"
                            size={24}
                            color="white"
                          />
                        </TouchableOpacity>
                      </Center>
                      <Stack space={2}>{data.details}</Stack>
                    </Stack>
                  </Box>
                </Box>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
