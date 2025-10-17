import {
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  Dimensions,
  Platform,
  TouchableOpacity,
  StyleSheet,
  View,
  Animated,
} from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function HomeScreen() {
  const [animeList, setAnimeList] = useState<
    { animeId: string; cap: string; name: string; url: string; urlImg: string }[]
  >([]);

  useEffect(() => {
    fetch("http://172.16.0.7:3000/anime/home")
      .then((res) => res.json())
      .then((data) => setAnimeList(data));
  }, []);
  const [layout, setLayout] = useState({ width: 0, height: 0, x: 0, y: 0 });
  const renderItem = ({ item, index }: { item: any; index: number }) => {
    const width = layout.width / (Platform.isTV ? 4 : 1) - 20;
    const slug = new URL(item.url).pathname.split('/')[2].toString();
    return (
      <TouchableOpacity
        focusable={true}
        accessibilityShowsLargeContentViewer={false}
        hasTVPreferredFocus={index === 0}
        nextFocusDown={index + 1 < animeList.length ? index + 1 : 0}
        style={[styles.itemContainer, { width }]}
      >
        <Link href={{ pathname: '/video/[slug]/[id]', params: { slug, id: item.cap } }} style={styles.linkContainer}>
          <Image source={{ uri: item.urlImg }} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.cap}>{item.cap}</Text>
        </Link>
      </TouchableOpacity >
    );
  };

  return (
    <SafeAreaView onLayout={(event) => {
      const { x, y, width, height } = event.nativeEvent.layout;
      setLayout({ x, y, width, height });
    }} style={styles.container} >
      {animeList.length > 0 ? (
        <FlatList
          style={{ width: "100%" }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          data={animeList}
          numColumns={Platform.isTV ? 4 : 1}
          contentContainerStyle={[
            styles.flatListContent,
            { paddingBottom: Platform.isTV ? 0 : 100 },
          ]}
          keyExtractor={(item) => item.animeId}
          renderItem={renderItem}
          removeClippedSubviews={false}
          ListHeaderComponent={
            <Text style={styles.header}>Explore</Text>
          }
        />
      ) : (
        <View style={styles.placeholder}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#121212",
  },
  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  header: {
    textAlign: "center",
    fontSize: 28,
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "800",
    color: "#ffffff",
  },
  flatListContent: {
    paddingHorizontal: 12,
  },
  itemContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: Platform.isTV ? 6 : 0,
    marginBottom: 10,
    borderRadius: 16,
    backgroundColor: "#1f1f1f",
    padding: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 0,
    overflow: "hidden",
  },
  linkContainer: {
    alignItems: "center",
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 12,
    marginBottom: 8,
  },
  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#ffffff",
    textAlign: "center",
  },
  cap: {
    fontSize: 14,
    color: "#b0b0b0",
    textAlign: "center",
    marginTop: 2,
  },
});
