import { FlashList } from '@shopify/flash-list';
import { useRouter } from 'expo-router';
import { useLocalSearchParams } from 'expo-router/build/hooks';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Pressable,
    Platform,
    Animated,
    useTVEventHandler,
    TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const THEME = {
    bg: '#0b0b0b',
    card: '#151515',
    cardAlt: '#1a1a1a',
    primary: '#FF6F61',
    primaryAlt: '#ff8a7f',
    accent: '#1E90FF',
    accentBg: '#06283D',
    text: '#E0E0E0',
    textDim: '#B0B0B0',
    border: '#333',
    borderAlt: '#444',
    white: '#fff',
};

export default function AnimeDetailsScreen() {
    const { slug } = useLocalSearchParams();
    const router = useRouter();
    const isTV = Platform.isTV;

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

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [focusedEpisode, setFocusedEpisode] = useState<number | null>(null);
    const [focusedGenreIndex, setFocusedGenreIndex] = useState<number | null>(null);

    const pulse = useRef(new Animated.Value(0.6)).current;
    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(pulse, { toValue: 0.3, duration: 700, useNativeDriver: true }),
                Animated.timing(pulse, { toValue: 0.6, duration: 700, useNativeDriver: true }),
            ])
        ).start();
    }, [pulse]);

    const fetchDetails = () => {
        if (!slug) return;
        setLoading(true);
        setError(null);
        const controller = new AbortController();

        (async () => {
            try {
                const response = await fetch(`http://172.16.0.7:3000/anime/details/${slug}`, { signal: controller.signal });
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                const json = await response.json();
                setData(json);
            } catch (e: any) {
                if (e?.name !== 'AbortError') setError('No se pudo cargar los detalles. Intenta nuevamente.');
            } finally {
                setLoading(false);
            }
        })();

        return () => controller.abort();
    };

    useEffect(fetchDetails, [slug]);

    const episodes = useMemo(() => (data ? Array.from({ length: data.caps }, (_, i) => i + 1) : []), [data]);
    const EPISODE_COLUMNS = Platform.isTV ? 6 : 3;
    const estimatedEpisodeHeight = Platform.isTV ? 72 : 56;

    const goToEpisode = (num: number) => router.push(`/video/${slug}/${num}`);
    const latestEpisode = data?.caps ?? 1;

    // Soporte remoto TV: play/pause => último; rewind => ep 1; back/menu => volver
    useTVEventHandler((evt) => {
        if (!isTV || !evt?.eventType) return;
        const t = evt.eventType;
        if ((t === 'playPause' || t === 'fastForward') && data) {
            goToEpisode(latestEpisode);
        } else if (t === 'rewind' && data) {
            goToEpisode(1);
        } else if (t === 'menu' || t === 'back') {
            router.back();
        }
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Top bar */}
                <View style={styles.topRow}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => router.back()}
                        focusable
                        accessibilityRole="button"
                        accessibilityLabel="Volver"
                    >
                        <Text style={styles.backText}>◀ Volver</Text>
                    </TouchableOpacity>
                </View>

                {/* Loading State */}
                {loading && (
                    <>
                        <View style={styles.hero}>
                            <Animated.View style={[styles.heroBackdropSkeleton, { opacity: pulse }]} />
                            <View style={styles.heroContent}>
                                <Animated.View style={[styles.posterSkeleton, { opacity: pulse }]} />
                                <View style={styles.heroTextCol}>
                                    <Animated.View style={[styles.titleSkeleton, { opacity: pulse }]} />
                                    <Animated.View style={[styles.descSkeleton, { opacity: pulse }]} />
                                    <Animated.View style={[styles.descSkeletonShort, { opacity: pulse }]} />
                                    <View style={styles.actionsRow}>
                                        <Animated.View style={[styles.primaryBtnSkeleton, { opacity: pulse }]} />
                                        <Animated.View style={[styles.secondaryBtnSkeleton, { opacity: pulse }]} />
                                    </View>
                                </View>
                            </View>
                        </View>

                        <View style={styles.sectionCard}>
                            <Text style={styles.sectionTitle}>Episodios</Text>
                            <View style={styles.skeletonGrid}>
                                {Array.from({ length: Platform.isTV ? 12 : 6 }).map((_, i) => (
                                    <Animated.View key={i} style={[styles.episodeSkeleton, { opacity: pulse }]} />
                                ))}
                            </View>
                        </View>
                    </>
                )}

                {/* Error State */}
                {!loading && error && (
                    <View style={[styles.sectionCard, { alignItems: 'center' }]}>
                        <Text style={styles.errorText}>{error}</Text>
                        <Pressable
                            style={({ focused }) => [styles.primaryBtn, focused && styles.primaryBtnFocused]}
                            onPress={fetchDetails}
                            focusable
                            android_disableSound
                            accessibilityRole="button"
                            accessibilityLabel="Reintentar"
                        >
                            <Text style={styles.primaryBtnText}>Reintentar</Text>
                        </Pressable>
                    </View>
                )}

                {/* Content */}
                {!loading && !error && data && (
                    <>
                        {/* Hero with backdrop */}
                        {data.urlImg ? (
                            <ImageBackground
                                source={{ uri: data.urlImg }}
                                style={styles.hero}
                                imageStyle={styles.heroBgImage}
                                blurRadius={Platform.OS === 'android' ? 8 : 18}
                            >
                                <View style={styles.heroOverlay} />
                                <View style={styles.heroContent}>
                                    <Image source={{ uri: data.urlImg }} style={styles.poster} resizeMode="cover" />
                                    <View style={styles.heroTextCol}>
                                        <Text style={styles.title}>{data.name}</Text>
                                        <Text style={styles.description} numberOfLines={Platform.isTV ? 8 : 6}>
                                            {data.description || 'Sin descripción disponible.'}
                                        </Text>

                                        {/* Info chips */}
                                        <View style={styles.infoRow}>
                                            <View style={styles.chip}>
                                                <Text style={styles.chipText}>Estado: {data.status}</Text>
                                            </View>
                                            <View style={styles.chip}>
                                                <Text style={styles.chipText}>Estreno: {data.date}</Text>
                                            </View>
                                        </View>

                                        {/* Actions */}
                                        <View style={styles.actionsRow}>
                                            <Pressable
                                                style={({ focused }) => [styles.primaryBtn, focused && styles.primaryBtnFocused]}
                                                onPress={() => goToEpisode(latestEpisode)}
                                                focusable
                                                android_disableSound
                                                accessibilityRole="button"
                                                accessibilityLabel="Reproducir último episodio"
                                            >
                                                <Text style={styles.primaryBtnText}>▶ Reproducir último</Text>
                                            </Pressable>

                                            <Pressable
                                                style={({ focused }) => [styles.secondaryBtn, focused && styles.secondaryBtnFocused]}
                                                onPress={() => goToEpisode(1)}
                                                focusable
                                                android_disableSound
                                                accessibilityRole="button"
                                                accessibilityLabel="Comenzar desde el episodio 1"
                                            >
                                                <Text style={styles.secondaryBtnText}>⏮ Episodio 1</Text>
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            </ImageBackground>
                        ) : (
                            <View style={styles.hero}>
                                <View style={styles.heroContent}>
                                    <View style={[styles.poster, { backgroundColor: THEME.card }]} />
                                    <View style={styles.heroTextCol}>
                                        <Text style={styles.title}>{data.name}</Text>
                                        <Text style={styles.description} numberOfLines={Platform.isTV ? 8 : 6}>
                                            {data.description || 'Sin descripción disponible.'}
                                        </Text>
                                        <View style={styles.infoRow}>
                                            <View style={styles.chip}>
                                                <Text style={styles.chipText}>Estado: {data.status}</Text>
                                            </View>
                                            <View style={styles.chip}>
                                                <Text style={styles.chipText}>Estreno: {data.date}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )}

                        {/* Genres */}
                        <View style={styles.sectionCard}>
                            <Text style={styles.sectionTitle}>Géneros</Text>
                            <FlashList
                                data={data.genres}
                                horizontal
                                keyExtractor={(item, index) => `${item}-${index}`}
                                renderItem={({ item, index }) => (
                                    <Pressable
                                        style={({ focused }) => [styles.genre, (focused || focusedGenreIndex === index) && styles.genreFocused]}
                                        onFocus={() => setFocusedGenreIndex(index)}
                                        onBlur={() => setFocusedGenreIndex(null)}
                                        focusable
                                        onPress={() => { }}
                                        android_disableSound
                                        accessibilityRole="button"
                                        accessibilityLabel={`Género ${item}`}
                                    >
                                        <Text style={styles.genreText}>{item}</Text>
                                    </Pressable>
                                )}
                                contentContainerStyle={{ paddingRight: 8 }}
                                showsHorizontalScrollIndicator={false}
                            />
                        </View>

                        {/* Episodes grid */}
                        <View style={styles.sectionCard}>
                            <Text style={styles.sectionTitle}>Episodios</Text>
                            <FlashList
                                data={episodes}
                                numColumns={EPISODE_COLUMNS}
                                keyExtractor={(item) => String(item)}
                                renderItem={({ item }) => (
                                    <Pressable
                                        style={({ focused }) => [styles.episode, (focused || focusedEpisode === item) && styles.episodeFocused]}
                                        onFocus={() => setFocusedEpisode(item)}
                                        onBlur={() => setFocusedEpisode(null)}
                                        onPress={() => goToEpisode(item)}
                                        focusable
                                        android_disableSound
                                        accessibilityRole="button"
                                        accessibilityLabel={`Episodio ${item}`}
                                    >
                                        <Text style={styles.episodeText}>Episodio {item}</Text>
                                    </Pressable>
                                )}
                                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                                contentContainerStyle={styles.episodesGrid}
                                showsVerticalScrollIndicator={false}
                            />
                        </View>
                    </>
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: THEME.bg,
        paddingHorizontal: Platform.isTV ? 40 : 16,
        paddingTop: 16,
        paddingBottom: 16,
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
        borderColor: THEME.border,
        shadowColor: '#000',
    },
    backButtonFocused: {
        borderColor: THEME.primary,
        shadowColor: THEME.primary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.6,
        shadowRadius: 12,
        transform: [{ scale: 1.02 }],
    },
    backText: {
        color: THEME.white,
        fontWeight: '700',
        fontSize: Platform.isTV ? 20 : 14,
    },

    // Hero
    hero: {
        borderRadius: 18,
        overflow: 'hidden',
        marginBottom: 16,
        backgroundColor: THEME.cardAlt,
    },
    heroOverlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.45)',
    },
    heroBgImage: {
        opacity: 0.5,
    },
    heroContent: {
        flexDirection: 'row',
        padding: Platform.isTV ? 24 : 16,
        alignItems: 'center',
    },
    poster: {
        width: Platform.isTV ? 280 : 180,
        height: Platform.isTV ? 420 : 270,
        borderRadius: 14,
        borderWidth: 3,
        borderColor: THEME.primary,
        backgroundColor: THEME.card,
    },
    heroTextCol: {
        flex: 1,
        marginLeft: Platform.isTV ? 24 : 16,
    },
    title: {
        fontSize: Platform.isTV ? 36 : 26,
        fontWeight: '900',
        color: THEME.primary,
        marginBottom: 8,
    },
    description: {
        fontSize: Platform.isTV ? 20 : 16,
        color: THEME.text,
        lineHeight: Platform.isTV ? 30 : 24,
        marginBottom: 12,
        textAlign: 'justify',
    },
    infoRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        marginBottom: 12,
    },
    chip: {
        paddingVertical: 6,
        paddingHorizontal: 10,
        borderRadius: 16,
        backgroundColor: '#262626',
        borderWidth: 1,
        borderColor: THEME.borderAlt,
    },
    chipText: {
        color: THEME.white,
        fontWeight: '700',
        fontSize: Platform.isTV ? 16 : 13,
    },

    // Actions
    actionsRow: {
        flexDirection: 'row',
        gap: 12,
        flexWrap: 'wrap',
    },
    primaryBtn: {
        paddingVertical: Platform.isTV ? 14 : 10,
        paddingHorizontal: Platform.isTV ? 20 : 16,
        borderRadius: 12,
        backgroundColor: THEME.primary,
    },
    primaryBtnFocused: {
        backgroundColor: THEME.primaryAlt,
        transform: [{ scale: 1.04 }],
        shadowColor: THEME.primary,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.6,
        shadowRadius: 14,
    },
    primaryBtnText: {
        color: THEME.bg,
        fontWeight: '900',
        fontSize: Platform.isTV ? 20 : 16,
    },
    secondaryBtn: {
        paddingVertical: Platform.isTV ? 14 : 10,
        paddingHorizontal: Platform.isTV ? 20 : 16,
        borderRadius: 12,
        backgroundColor: '#262626',
        borderWidth: 2,
        borderColor: THEME.borderAlt,
    },
    secondaryBtnFocused: {
        borderColor: THEME.primary,
        transform: [{ scale: 1.04 }],
        shadowColor: THEME.primary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.5,
        shadowRadius: 12,
    },
    secondaryBtnText: {
        color: THEME.white,
        fontWeight: '800',
        fontSize: Platform.isTV ? 20 : 16,
    },

    // Section cards
    sectionCard: {
        marginBottom: 20,
        padding: Platform.isTV ? 18 : 14,
        backgroundColor: THEME.card,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: THEME.primary,
    },
    sectionTitle: {
        fontSize: Platform.isTV ? 24 : 20,
        fontWeight: '900',
        color: THEME.primary,
        marginBottom: 10,
        textTransform: 'uppercase',
        letterSpacing: 1,
    },

    // Genres
    genre: {
        marginRight: 12,
        paddingVertical: Platform.isTV ? 12 : 8,
        paddingHorizontal: Platform.isTV ? 20 : 14,
        borderRadius: 20,
        backgroundColor: '#333',
        borderWidth: 2,
        borderColor: THEME.borderAlt,
    },
    genreFocused: {
        backgroundColor: THEME.primary,
        borderColor: THEME.primary,
        shadowColor: THEME.primary,
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.6,
        shadowRadius: 12,
        transform: [{ scale: 1.04 }],
    },
    genreText: {
        color: THEME.white,
        fontWeight: '700',
    },

    // Episodes grid
    episodesGrid: {
        paddingTop: 6,
    },
    episode: {
        flex: 1,
        margin: 4,
        paddingVertical: Platform.isTV ? 12 : 8,
        paddingHorizontal: 12,
        borderRadius: 10,
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: THEME.borderAlt,
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: Platform.isTV ? 64 : 48,
    },
    episodeFocused: {
        backgroundColor: THEME.accentBg,
        borderColor: THEME.accent,
        shadowColor: THEME.accent,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.6,
        shadowRadius: 14,
        transform: [{ scale: 1.03 }],
    },
    episodeText: {
        color: THEME.accent,
        fontSize: Platform.isTV ? 20 : 16,
        fontWeight: '800',
    },

    // Loading skeletons
    heroBackdropSkeleton: {
        height: Platform.isTV ? 480 : 320,
        backgroundColor: '#202020',
    },
    posterSkeleton: {
        width: Platform.isTV ? 280 : 180,
        height: Platform.isTV ? 420 : 270,
        borderRadius: 14,
        backgroundColor: '#232323',
        borderWidth: 3,
        borderColor: '#2a2a2a',
    },
    titleSkeleton: {
        height: 28,
        borderRadius: 8,
        backgroundColor: '#2a2a2a',
        marginBottom: 12,
        width: '70%',
    },
    descSkeleton: {
        height: 18,
        borderRadius: 8,
        backgroundColor: '#2a2a2a',
        marginBottom: 8,
        width: '95%',
    },
    descSkeletonShort: {
        height: 18,
        borderRadius: 8,
        backgroundColor: '#2a2a2a',
        marginBottom: 14,
        width: '60%',
    },
    primaryBtnSkeleton: {
        height: Platform.isTV ? 52 : 44,
        width: Platform.isTV ? 220 : 170,
        borderRadius: 12,
        backgroundColor: '#2a2a2a',
    },
    secondaryBtnSkeleton: {
        height: Platform.isTV ? 52 : 44,
        width: Platform.isTV ? 200 : 150,
        borderRadius: 12,
        backgroundColor: '#2a2a2a',
        marginLeft: 12,
    },
    skeletonGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },
    episodeSkeleton: {
        height: Platform.isTV ? 64 : 48,
        borderRadius: 10,
        backgroundColor: '#232323',
        flexBasis: Platform.isTV ? '15%' : '30%',
        flexGrow: 1,
    },

    // Text feedback
    errorText: {
        color: THEME.text,
        fontSize: Platform.isTV ? 22 : 16,
        marginBottom: 12,
        textAlign: 'center',
    },
});






