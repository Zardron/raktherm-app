import React from "react";
import Header from "../components/Header";
import { NewsfeedData } from "../assets/data/Newsfeed";
import { Image, View, Text, Box, HStack, Center, Stack } from "native-base";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

const FeedDetails = ({ route }) => {
  const feedId = route.params?._id;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#e5e7ebd1",
        borderBottomWidth: 50,
        borderColor: "#008053",
      }}
    >
      <Header headerTitle={"Feed Details"} mainScreen={false} />

      <ScrollView>
        <View
          style={{
            marginHorizontal: 20,
            marginBottom: 50,
          }}
        >
          {NewsfeedData.filter((item) => item.id === feedId).map(
            (data, key) => (
              <Box alignItems="center" marginTop={3} key={key}>
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
                    <Image
                      source={data.imgSrc}
                      alt="img"
                      style={{
                        width: "100%",
                        height: undefined,
                        aspectRatio: 1,
                      }}
                      resizeMode={"fill"}
                    />
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
                      <SimpleLineIcons name="options" size={24} color="white" />
                    </Center>
                    <Stack space={2}>{data.details}</Stack>
                  </Stack>
                </Box>
              </Box>
            )
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default FeedDetails;
