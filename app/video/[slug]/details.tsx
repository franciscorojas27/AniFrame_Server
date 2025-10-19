import { FlashList } from '@shopify/flash-list';
import { useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Image, ScrollView, StyleSheet, Text, View, Pressable, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AnimeDetailsScreen() {
    const { slug } = useLocalSearchParams();
    const router = useRouter();

    const [data, setData] = useState<{
        idAnime: string | undefined;
        name: string;
        urlImg: string | null;
        description: string | null;
        status: string;
        date: string;
        genres: string[];
        caps: number;
    } | null>(null);

    const [focusedEpisode, setFocusedEpisode] = useState<number | null>(null);
    const [focusedGenreIndex, setFocusedGenreIndex] = useState<number | null>(null);

    useEffect(() => {
        if (!slug) return;
        const fetchData = async () => {
            try {
                const response = await fetch(`http://172.16.0.7:3000/anime/details/${slug}`);
                const json = await response.json();
                setData(json);
            } catch (error) {
                console.error("Error fetching anime details:", error);
            }
        };
        fetchData();
    }, [slug]);

    return (
        <SafeAreaView style={styles.container}>
            {data ? (
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    {/* Back button - TV/remote friendly */}
                    <View style={styles.topRow}>
                        <Pressable
                            style={({ focused }) => [
                                styles.backButton,
                                focused && styles.backButtonFocused,
                            ]}
                            onPress={() => router.back()}
                            focusable={true}
                            hasTVPreferredFocus={true}
                            android_disableSound={true}
                        >
                            <Text style={styles.backText}>◀ Back</Text>
                        </Pressable>
                    </View>

                    <View style={styles.header}>
                        {data.urlImg && (
                            <Image
                                source={{ uri: data.urlImg }}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        )}
                        <Text style={styles.title}>{data.name}</Text>
                    </View>

                    <Text style={styles.description}>{data.description || "No description available."}</Text>
                    <Text style={styles.status}>Status: {data.status}</Text>
                    <Text style={styles.date}>Release Date: {data.date}</Text>

                    <View style={styles.genresContainer}>
                        <Text style={styles.sectionTitle}>Genres:</Text>
                        <FlashList
                            data={data.genres}
                            horizontal={true}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => (
                                <Pressable
                                    style={({ focused }) => [
                                        styles.genre,
                                        (focused || focusedGenreIndex === index) && styles.genreFocused,
                                    ]}
                                    onFocus={() => setFocusedGenreIndex(index)}
                                    onBlur={() => setFocusedGenreIndex(null)}
                                    focusable={true}
                                    onPress={() => { }}
                                >
                                    <Text style={styles.genreText}>{item}</Text>
                                </Pressable>
                            )}
                        />
                    </View>

                    <View style={styles.episodesContainer}>
                        <Text style={styles.sectionTitle}>Episodes:</Text>
                        {Array.from({ length: data.caps }, (_, index) => {
                            const episodeNumber = index + 1;
                            return (
                                <Pressable
                                    key={episodeNumber}
                                    style={({ focused }) => [
                                        styles.episode,
                                        (focused || focusedEpisode === episodeNumber) && styles.episodeFocused,
                                    ]}
                                    onFocus={() => setFocusedEpisode(episodeNumber)}
                                    onBlur={() => setFocusedEpisode(null)}
                                    onPress={() => router.push(`/video/${slug}/${episodeNumber}`)}
                                    focusable={true}
                                    android_disableSound={true}
                                >
                                    <Text style={styles.episodeText}>Episode {episodeNumber}</Text>
                                </Pressable>
                            );
                        })}
                    </View>
                </ScrollView>
            ) : (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#FF6F61" />
                    <Text style={styles.loadingText}>Loading...</Text>
                </View>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b0b0b',
        paddingHorizontal: Platform.isTV ? 40 : 16,
        paddingTop: 16,
        paddingBottom: 16, // Added padding at the bottom
    },
    scrollContent: {
        paddingBottom: 40,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 12,
    },
    backButton: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 10,
        backgroundColor: '#1f1f1f',
        borderWidth: 2, 
        borderColor: '#333',
        shadowColor: '#000',
    },
    backButtonFocused: {
        borderColor: '#FF6F61',
        shadowColor: '#FF6F61',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.6,
        shadowRadius: 12,
        transform: [{ scale: 1.02 }],
    },
    backText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: Platform.isTV ? 20 : 14,
    },
    header: {
        alignItems: 'center',
        marginBottom: 16,
        backgroundColor: '#1a1a1a',
        padding: 18,
        borderRadius: 18,
    },
    image: {
        width: Platform.isTV ? 360 : 240,
        height: Platform.isTV ? 540 : 360,
        borderRadius: 18,
        marginBottom: 16,
        borderWidth: 4,
        borderColor: '#FF6F61',
    },
    title: {
        fontSize: Platform.isTV ? 36 : 28,
        fontWeight: '900',
        color: '#FF6F61',
        textAlign: 'center',
    },
    description: {
        fontSize: Platform.isTV ? 20 : 16,
        color: '#E0E0E0',
        marginBottom: 12,
        lineHeight: Platform.isTV ? 30 : 24,
        textAlign: 'justify',
    },
    status: {
        fontSize: 16,
        color: '#B0B0B0',
        marginBottom: 6,
        fontStyle: 'italic',
    },
    date: {
        fontSize: 16,
        color: '#B0B0B0',
        marginBottom: 20,
        fontStyle: 'italic',
    },
    genresContainer: {
        marginBottom: 20,
        padding: 14,
        backgroundColor: '#151515',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#FF6F61',
    },
    sectionTitle: {
        fontSize: Platform.isTV ? 24 : 22,
        fontWeight: 'bold',
        color: '#FF6F61',
        marginBottom: 10,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    genre: {
        marginRight: 12,
        paddingVertical: Platform.isTV ? 12 : 8,
        paddingHorizontal: Platform.isTV ? 20 : 14,
        borderRadius: 20,
        backgroundColor: '#333',
        borderWidth: 2, 
        borderColor: '#444',
    },
    genreFocused: {
        backgroundColor: '#FF6F61',
        borderColor: '#FF6F61',
        shadowColor: '#FF6F61',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.6,
        shadowRadius: 12,
        transform: [{ scale: 1.04 }],
    },
    genreText: {
        color: '#fff',
        fontWeight: '700',
    },
    episodesContainer: {
        marginBottom: 20,
        padding: 14,
        backgroundColor: '#151515',
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#FF6F61',
    },
    episode: {
        paddingVertical: Platform.isTV ? 12 : 8,
        paddingHorizontal: 14,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: 'transparent',
        borderWidth: 2, 
        borderColor: '#444',
    },
    episodeFocused: {
        backgroundColor: '#06283D',
        borderColor: '#1E90FF',
        borderWidth: 2, 
        shadowColor: '#1E90FF',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.6,
        shadowRadius: 14,
        transform: [{ scale: 1.03 }],
    },
    episodeText: {
        color: '#1E90FF',
        fontSize: Platform.isTV ? 20 : 16,
        fontWeight: '700',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 18,
        color: '#E0E0E0',
        textAlign: 'center',
        marginTop: 12,
        fontWeight: 'bold',
    },
});






