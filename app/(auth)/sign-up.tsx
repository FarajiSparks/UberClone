import { ScrollView, Text, View, Image } from "react-native";
import {images} from "@/constants";

const SignUp = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View className="relative w-full h-[250px]">
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
          <Text className="absolute bottom-5 left-5 text-black text-2xl font-['Jakarta-SemiBold']">Create Your Account</Text>
        </View>
        <View className="p-5"></View>
      </View>
    </ScrollView>
  )
}

export default SignUp;
