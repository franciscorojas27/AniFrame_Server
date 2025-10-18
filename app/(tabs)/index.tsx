import {
  Text,
  Image,
  View,
  ActivityIndicator,
  Platform,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useEffect, useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { FlashList } from "@shopify/flash-list";

export default function HomeScreen() {
  const [animeList, setAnimeList] = useState<
    { animeId: string; cap: string; name: string; url: string; urlImg: string }[]
  >([]);

  useEffect(() => {
    fetch("http://172.16.0.7:3000/anime/home")
      .then((res) => res.json())
      .then((data) => setAnimeList(data));
  }, []);

  const sortedAnimeList = useMemo(() => {
    const list = [...animeList];
    list.sort((a, b) => {
      const aCap = parseFloat(a.cap);
      const bCap = parseFloat(b.cap);
      if (!Number.isNaN(aCap) && !Number.isNaN(bCap)) {
        const byCap = bCap - aCap;
        if (byCap !== 0) return byCap;
      }
      return a.name.localeCompare(b.name);
    });
    return list;
  }, [animeList]);

  const columns = Platform.isTV ? 4 : 2;

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    const slug = new URL(item.url).pathname.split("/")[2].toString();

    return (
      <Link
        href={{ pathname: "/video/[slug]/[id]", params: { slug, id: item.cap } }}
        asChild
     >
        <TouchableOpacity
          focusable={true}
          hasTVPreferredFocus={index === 0}
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.urlImg }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.name} numberOfLines={2}>
              {item.name}
            </Text>
            <Text style={styles.cap}>{`Episode ${item.cap}`}</Text>
          </View>
        </TouchableOpacity>
      </Link>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {animeList.length > 0 ? (
        <FlashList
          style={styles.flatlistContainer}
          data={sortedAnimeList}
          renderItem={renderItem}
          keyExtractor={(item) => item.animeId}
          numColumns={columns}
          contentContainerStyle={styles.flatListContent}
          ListHeaderComponent={
            <View style={styles.headerView}>
              <Text style={styles.headerText}>Mi Header</Text>
            </View>
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
  flatlistContainer: {
    flex: 1,
    marginBottom: Platform.isTV ? 0 : 85,
  },
  headerView: {
    alignItems: "center",
    marginVertical: 10
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff0000ff",
    padding: 12,
  },
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  placeholder: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatListContent: {
  },
  itemContainer: {
    flex: 1,
    margin: 6,
    borderRadius: 12,
    backgroundColor: "#141414",
    overflow: "hidden",
    alignItems: "center",
    padding: 8,
  },
  linkContainer: {
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    aspectRatio: 16 / 9, 
    borderRadius: 8,
    marginBottom: 8,
  },
  textContainer: {
    width: "100%",
    paddingHorizontal: 6,
  },
  name: {
    fontSize: 16,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 4,
  },
  cap: {
    fontSize: 13,
    color: "#bdbdbd",
  },
});
