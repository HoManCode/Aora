import { View, Text, TouchableOpacity, Image, TextInput, TextInputProps } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

// Define props using TypeScript
interface SearchInputProps extends TextInputProps {
  title: string;
  value: string;
  placeholder: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string; // Tailwind classes or additional styles
}

const SearchInput: React.FC<SearchInputProps> = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles = "",
  ...props
}) => {


  return (
    
      <View className="flex flex-row items-center space-x-4 w-full h-16 px-4 bg-black-100 rounded-2xl border-2 border-black-200 focus:border-secondary">
        <TextInput
          className="text-base mt-0.5 text-white flex-1 font-pregular"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          {...props} 
        />
        <TouchableOpacity>
            <Image
                source={icons.search}
                className="w-5 h-5"
                resizeMode="contain"
            />
        </TouchableOpacity>
        
      </View>
  );
};

export default SearchInput;
