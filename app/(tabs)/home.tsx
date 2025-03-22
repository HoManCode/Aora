import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { images } from '../../constants';
import SearchInput from "../../components/SearchInput";

interface DataItem {
  $id: string; // Ensure it's a string, as keyExtractor requires a string key
  id: number;
}

const data: DataItem[] = [{ $id: "1", id: 1 }];

const Home = () => {
  return (
    <GestureHandlerRootView>
      <SafeAreaView className='bg-primary'>
        <FlatList
          data={data}
          keyExtractor={(item) => item.$id} 
          renderItem={({ item }) => (
              <Text className="text-3xl text-white">{item.id}</Text>
          )}
          ListHeaderComponent={() => (
            <View className="my-6 px-4 space-y-6">
              <View className="justify-between items-start flex-row mb-6">
                <View>
                  <Text className="font-pmedium text-sm text-gray-100">
                    Welcome Back
                  </Text>
                  <Text className="text-2xl font-psemibold text-white">
                    Hooman
                  </Text>
                </View>
                <View className="mt-1.5">
                  <Image
                    source={images.logoSmall}
                    className="w-9 h-10"
                    resizeMode="contain"
                  />
                </View>
              </View>
              <SearchInput placeholder="Search for a video topic"/>
              <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-100 mb-3">
                Latest Videos
              </Text>
            </View>
            </View>
          )}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;