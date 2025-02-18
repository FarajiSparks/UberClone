import { Redirect } from "expo-router";
import { View, Text } from "react-native";


const Home = () => {
  return (
    <Redirect href="/welcome" />
  )
}

export default Home;
