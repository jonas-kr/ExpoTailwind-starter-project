import { FlatList, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { offers } from "@/constants";

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-slate-200">
      <FlatList data={offers} renderItem={({ item }) => (
        <View>
          <Pressable className="bg-white-200 my-3 h-48 rounded-xl">
            <Text className="p-2">
              {item.title}
            </Text>
          </Pressable>
        </View>
      )} keyExtractor={(item) => item.id.toString()} />

    </SafeAreaView>
  );
}