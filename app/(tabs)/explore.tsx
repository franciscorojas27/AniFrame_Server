import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
  ActivityIndicator,
  Platform,
} from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
export interface AnimeSearchEntity {
  animeId: string;
  name: string;
  url: string;
  urlImg: string;
}

export default function ExploreScreen() {
  const [animeCatalogList, setAnimeCatalogList] = useState<{ results: AnimeSearchEntity[]; numberPages: number }>({ results: [], numberPages: 0 });
  const [actualPage, setActualPage] = useState(1);
  const [querySearch, setQuerySearch] = useState('');
  const [loading, setLoading] = useState(false);

  const ITEM_WIDTH = Platform.isTV ? 200 : 150;
  const ITEM_HEIGHT = Platform.isTV ? 300 : 250;
  const NUM_COLUMNS = Platform.isTV ? 4 : 2;

  // Fetch con control de duplicados
  const fetchData = async () => {
    if (loading) return;
    if (animeCatalogList.numberPages && actualPage > animeCatalogList.numberPages) return;

    setLoading(true);
    try {
      const response = await fetch(
        `http://172.16.0.7:3000/anime/search?querySearch=${querySearch}&page=${actualPage}`
      );
      const dataNew: { results: AnimeSearchEntity[]; numberPages: number } = await response.json();

      setAnimeCatalogList((prev) => {
        const existingIds = new Set(prev.results.map((r) => r.animeId));
        const filteredNew = dataNew.results.filter((r) => !existingIds.has(r.animeId));

        return {
          results: [...prev.results, ...filteredNew],
          numberPages: dataNew.numberPages,
        };
      });

      setActualPage((prev) => prev + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Resetear lista al cambiar búsqueda
  useEffect(() => {
    setAnimeCatalogList({ results: [], numberPages: 0 });
    setActualPage(1);
    fetchData();
  }, [querySearch]);

  const renderItem = ({ item, index }: { item: AnimeSearchEntity; index: number }) => (
    <Link href={{
      pathname: '/video/[slug]/details', params: {
        slug: new URL(item.url).pathname.split('/')[2].toString(),
      }
    }} asChild>
      <TouchableOpacity
        focusable
        importantForAccessibility="yes"
        style={{ width: ITEM_WIDTH, height: ITEM_HEIGHT, margin: 5 }}
      >
        <Image source={{ uri: item.urlImg }} style={styles.itemImage} />
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    </Link>
  );


  return (
    <SafeAreaView style={styles.container}>
      {/* Header búsqueda */}
      <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
        <TextInput
          focusable
          importantForAccessibility="yes"
          placeholder="Search..."
          placeholderTextColor="#aaa"
          value={querySearch}
          onChangeText={setQuerySearch}
          style={[styles.searchInput, { flex: 1 }]}
        />
        <TouchableOpacity
          focusable
          importantForAccessibility="yes"
          onPress={() => {
            setAnimeCatalogList({ results: [], numberPages: 0 });
            setActualPage(1);
            fetchData();
          }}
          style={{ marginLeft: 10, padding: 10, backgroundColor: '#cccccc', borderRadius: 5 }}
        >
          <Text>Search</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de animes */}
      <FlashList
        data={animeCatalogList.results}
        keyExtractor={(item) => item.animeId}
        renderItem={renderItem}
        numColumns={NUM_COLUMNS}
        contentContainerStyle={{ paddingHorizontal: 5, paddingBottom: 40 }}
        onEndReachedThreshold={0.5}
        onEndReached={fetchData}
        ListFooterComponent={
          loading ? (
            <View style={{ alignItems: 'center', padding: 10 }}>
              <Text style={{ color: '#ffffffff', textAlign: 'center', marginBottom: 5 }}>Cargando...</Text>
              <ActivityIndicator size="large" color="#000dffff" />
            </View>
          ) : null
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  searchInput: {
    height: 40,
    borderColor: '#555555',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: '#ffffff',
  },
  itemImage: {
    width: '100%',
    height: '80%',
    borderRadius: 5,
    marginBottom: 5,
    resizeMode: 'cover',
  },
  itemText: {
    color: '#ffffff',
    fontSize: 12,
    textAlign: 'center',
  },
});
