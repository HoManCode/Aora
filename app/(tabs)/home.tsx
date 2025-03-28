import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { images } from '../../constants';
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import EmptyState from "../../components/EmptyState";
import useAppwrite from "../../lib/useAppwrite";

interface DataItem {
  $id: string; // Ensure it's a string, as keyExtractor requires a string key
  id: number;
}

const data: DataItem[] = [{ $id: "1", id: 1 }];

const Home = () => {
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const { data: latestPosts } = useAppwrite(getLatestPosts);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = async () => {
    setRefreshing(true);
    //recall videos -> if any new videos appeard
    setRefreshing(false);
  };
  return (
    <GestureHandlerRootView>
      <SafeAreaView className='bg-primary h-full'>
        <FlatList
          data={[{id:1}, {id:2},{id:3}]}
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
              <Trending posts={[{id:1},{id:2},{id:3}] ?? []}/>
            </View>
            </View>
          )}
          ListEmptyComponent={() => (
            <EmptyState
              title="No Videos Found"
              subtitle="Be the first one to upload a video"
            />
          )}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default Home;

