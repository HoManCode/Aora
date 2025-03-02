import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import { Link } from 'expo-router'
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { images } from '../constants';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%'}}>
        <View className="w-full justify-center items-center px-4">
          <Image source={images.logo}
          className="w-[130px] h-[84px]"
          resizeMode="contain"
          />
          <Image source={images.cards}
          className="w-[380px] w-full h-[300px]"
          resizeMode="contain"
          />
        </View>
        <View className="relative mt-5">
          <Text className="test-3xl text-white font-bold text-center">
            Discover Endless Possiblities with {' '}
            <Text className="text-secondary-200">
              Aora
            </Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
    </GestureHandlerRootView>
    
  )
}


