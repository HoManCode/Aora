import { Alert, Image, Text, View} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Link, router } from 'expo-router';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { createUser } from '../../lib/appwrite';
import { useGlobalContext } from "../../context/GlobalProvider";

const SignUp = () => {
  const [form, setForm] = useState({
    username:'',
    email:'',
    password:''
  })
  const { setUser, setIsLogged } = useGlobalContext();
  const[isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if(!form.email || !form.password || !form.username){
      Alert.alert('Error', 'Please fill in all the fields')
    }
    setIsSubmitting(true);
    try{
      const result = await createUser(form.email, form.password,form.username);
      setUser(result);
      setIsLogged(true);
      router.replace('/home');
    }catch(error:any){
      Alert.alert('Error', error.message)
    }finally{
      setIsSubmitting(false);
    }
  }

  return (
    <GestureHandlerRootView>
      <SafeAreaView className='bg-primary h-full'>
        <ScrollView>
          <View className='w-full justify-center min-h-[50vh] px-4 my-6'>
          <Image source={images.logo}
          resizeMode='contain'
          className='w-[115px] h-[35px]'
          />
          <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>Sign Up to Aora</Text>
          <FormField 
            title="Username"
            vaule={form.username}
            handleChangeText={(e:string) => setForm({...form,username:e})}
            otherStyles="mt-10"
          />
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
          <CustomButton 
            title="Sign Up"
            handlePress={submit}
            isLoading={isSubmitting}
            containerStyles="mt-7"
          />
          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Sign in
            </Link>
            </View>
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default SignUp
