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
import FeedDetails from "../stack/FeedDetails";

const HomeScreen = () => {
  const navigation = useNavigation();

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
            <View
              style={{ marginTop: 10, marginBottom: 20, marginHorizontal: 10 }}
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
                          params: { post: "aw" },
                        })
                      }
                    >
                      <AspectRatio w="100%" ratio={16 / 9}>
                        <Image
                          source={{
                            uri: "https://scontent.ffjr1-5.fna.fbcdn.net/v/t39.30808-6/348944016_199371739690444_7009267042549418846_n.jpg?stp=dst-jpg_p180x540&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=V22bpqXk3MgAX-foz1P&_nc_ht=scontent.ffjr1-5.fna&oh=00_AfAYQnN5Pn49ErhTBSnVvIZp83dNqK0ak9jazGBKrhZm8A&oe=647CEC6F",
                          }}
                          alt="image"
                        />
                      </AspectRatio>
                    </TouchableOpacity>

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
                      bottom="0"
                      right="0"
                      px="3"
                      py="1.5"
                    >
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate({
                            name: "FeedDetails",
                            params: { post: "aw" },
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
                  </Box>
                  <Stack p="4" space={3}>
                    <Stack space={2}>
                      <Heading size="md" ml="-1">
                        The Garden City
                      </Heading>
                      <Text
                        fontSize="xs"
                        _light={{
                          color: "violet.500",
                        }}
                        _dark={{
                          color: "violet.400",
                        }}
                        fontWeight="500"
                        ml="-0.5"
                        mt="-1"
                      >
                        The Silicon Valley of India.
                      </Text>
                    </Stack>
                    <Text fontWeight="400">
                      Bengaluru (also called Bangalore) is the center of India's
                      high-tech industry. The city is also known for its parks
                      and nightlife.
                    </Text>
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
                          6 mins ago
                        </Text>
                      </HStack>
                    </HStack>
                  </Stack>
                </Box>
              </Box>
            </View>

            <View
              style={{ marginTop: 10, marginBottom: 20, marginHorizontal: 10 }}
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
                          params: { post: "aw" },
                        })
                      }
                    >
                      <AspectRatio w="100%" ratio={16 / 9}>
                        <Image
                          source={{
                            uri: "https://scontent.ffjr1-4.fna.fbcdn.net/v/t39.30808-6/348580093_167604279606629_7184730877885423111_n.jpg?stp=dst-jpg_p526x296&_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=K9WBD8ek27gAX9SlV2e&_nc_ht=scontent.ffjr1-4.fna&oh=00_AfCpZles6xpEQWpkSxENaENodujxBvPIh8CqdLlTrviiKA&oe=647CA6CB",
                          }}
                          alt="image"
                        />
                      </AspectRatio>
                    </TouchableOpacity>

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
                      bottom="0"
                      right="0"
                      px="3"
                      py="1.5"
                    >
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate({
                            name: "FeedDetails",
                            params: { post: "aw" },
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
                  </Box>
                  <Stack p="4" space={3}>
                    <Stack space={2}>
                      <Heading size="md" ml="-1">
                        The Garden City
                      </Heading>
                      <Text
                        fontSize="xs"
                        _light={{
                          color: "violet.500",
                        }}
                        _dark={{
                          color: "violet.400",
                        }}
                        fontWeight="500"
                        ml="-0.5"
                        mt="-1"
                      >
                        The Silicon Valley of India.
                      </Text>
                    </Stack>
                    <Text fontWeight="400">
                      Bengaluru (also called Bangalore) is the center of India's
                      high-tech industry. The city is also known for its parks
                      and nightlife.
                    </Text>
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
                          6 mins ago
                        </Text>
                      </HStack>
                    </HStack>
                  </Stack>
                </Box>
              </Box>
            </View>

            <View
              style={{ marginTop: 10, marginBottom: 20, marginHorizontal: 10 }}
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
                          params: { post: "aw" },
                        })
                      }
                    >
                      <AspectRatio w="100%" ratio={16 / 9}>
                        <Image
                          source={{
                            uri: "https://scontent.ffjr1-5.fna.fbcdn.net/v/t39.30808-6/347798699_637130127880213_7173867806126672962_n.jpg?stp=dst-jpg_s720x720&_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=of9ToImSP9wAX-Y8NkX&_nc_ht=scontent.ffjr1-5.fna&oh=00_AfBMPjyHN_uBI9bdHdSwOzBSdNUy_2aDnGDn2cYJJaRmhQ&oe=647E6B8D",
                          }}
                          alt="image"
                        />
                      </AspectRatio>
                    </TouchableOpacity>

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
                      bottom="0"
                      right="0"
                      px="3"
                      py="1.5"
                    >
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate({
                            name: "FeedDetails",
                            params: { post: "aw" },
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
                  </Box>
                  <Stack p="4" space={3}>
                    <Stack space={2}>
                      <Heading size="md" ml="-1">
                        The Garden City
                      </Heading>
                      <Text
                        fontSize="xs"
                        _light={{
                          color: "violet.500",
                        }}
                        _dark={{
                          color: "violet.400",
                        }}
                        fontWeight="500"
                        ml="-0.5"
                        mt="-1"
                      >
                        The Silicon Valley of India.
                      </Text>
                    </Stack>
                    <Text fontWeight="400">
                      Bengaluru (also called Bangalore) is the center of India's
                      high-tech industry. The city is also known for its parks
                      and nightlife.
                    </Text>
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
                          6 mins ago
                        </Text>
                      </HStack>
                    </HStack>
                  </Stack>
                </Box>
              </Box>
            </View>

            <View
              style={{ marginTop: 10, marginBottom: 20, marginHorizontal: 10 }}
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
                          params: { post: "aw" },
                        })
                      }
                    >
                      <AspectRatio w="100%" ratio={16 / 9}>
                        <Image
                          source={{
                            uri: "https://scontent.ffjr1-3.fna.fbcdn.net/v/t39.30808-6/346791666_1678255509301789_2631671426503199279_n.jpg?stp=dst-jpg_p526x296&_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=ga2vzoe11rkAX-DrEtg&_nc_ht=scontent.ffjr1-3.fna&oh=00_AfDx1RHAzWl1OVH4XNqZyMl9wuqWJ8JtWEyqvxCkwUVaNA&oe=647E353A",
                          }}
                          alt="image"
                        />
                      </AspectRatio>
                    </TouchableOpacity>

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
                      bottom="0"
                      right="0"
                      px="3"
                      py="1.5"
                    >
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate({
                            name: "FeedDetails",
                            params: { post: "aw" },
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
                  </Box>
                  <Stack p="4" space={3}>
                    <Stack space={2}>
                      <Heading size="md" ml="-1">
                        The Garden City
                      </Heading>
                      <Text
                        fontSize="xs"
                        _light={{
                          color: "violet.500",
                        }}
                        _dark={{
                          color: "violet.400",
                        }}
                        fontWeight="500"
                        ml="-0.5"
                        mt="-1"
                      >
                        The Silicon Valley of India.
                      </Text>
                    </Stack>
                    <Text fontWeight="400">
                      Bengaluru (also called Bangalore) is the center of India's
                      high-tech industry. The city is also known for its parks
                      and nightlife.
                    </Text>
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
                          6 mins ago
                        </Text>
                      </HStack>
                    </HStack>
                  </Stack>
                </Box>
              </Box>
            </View>

            <View
              style={{ marginTop: 10, marginBottom: 20, marginHorizontal: 10 }}
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
                          params: { post: "aw" },
                        })
                      }
                    >
                      <AspectRatio w="100%" ratio={16 / 9}>
                        <Image
                          source={{
                            uri: "https://scontent.ffjr1-6.fna.fbcdn.net/v/t39.30808-6/346037464_1458377748301656_4932599062710613218_n.jpg?stp=dst-jpg_p552x414&_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_ohc=sZULp3Md_pAAX-rjIoJ&_nc_ht=scontent.ffjr1-6.fna&oh=00_AfBJlS8f-ARlc5vU4HKo8soeAgDfHq7DaBOT7fdCzu9ENA&oe=647CB577",
                          }}
                          alt="image"
                        />
                      </AspectRatio>
                    </TouchableOpacity>

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
                      bottom="0"
                      right="0"
                      px="3"
                      py="1.5"
                    >
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate({
                            name: "FeedDetails",
                            params: { post: "aw" },
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
                  </Box>
                  <Stack p="4" space={3}>
                    <Stack space={2}>
                      <Heading size="md" ml="-1">
                        The Garden City
                      </Heading>
                      <Text
                        fontSize="xs"
                        _light={{
                          color: "violet.500",
                        }}
                        _dark={{
                          color: "violet.400",
                        }}
                        fontWeight="500"
                        ml="-0.5"
                        mt="-1"
                      >
                        The Silicon Valley of India.
                      </Text>
                    </Stack>
                    <Text fontWeight="400">
                      Bengaluru (also called Bangalore) is the center of India's
                      high-tech industry. The city is also known for its parks
                      and nightlife.
                    </Text>
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
                          6 mins ago
                        </Text>
                      </HStack>
                    </HStack>
                  </Stack>
                </Box>
              </Box>
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default HomeScreen;
