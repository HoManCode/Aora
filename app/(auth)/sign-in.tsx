import { Image, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { images } from '../../constants';
import FormField from '../../components/FormField';

const SignIn = () => {
  const [form, setForm] = useState({
    email:'',
    password:''
  })
  return (
    <GestureHandlerRootView>
      <SafeAreaView className='bg-primary h-full'>
        <ScrollView>
          <View className='w-full justify-center h-full px-4 my-6'>
          <Image source={images.logo}
          resizeMode='contain'
          className='w-[115px] h-[35px]'
          />
          <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>Log in to Aora</Text>
          <FormField 
            title="Email"
            vaule={form.email}
            handleChangeText={(e:string) => setForm({...form,email:e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField 
            title="Password"
            vaule={form.password}
            handleChangeText={(e:string) => setForm({...form,password:e})}
            otherStyles="mt-7"
          />
          </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default SignIn
