import { View, StyleSheet, ActivityIndicator, Platform } from "react-native";
import { VideoView, VideoSource, useVideoPlayer } from "expo-video";
import { useEffect, useState, useRef } from "react";
import { useLocalSearchParams } from "expo-router/build/hooks";

export default function VideoScreen() {
    const [data, setData] = useState<{ cap: string; foundUrl: string }>();
    const videoViewRef = useRef<VideoView>(null);
    const { slug, id } = useLocalSearchParams();
    console.log(data);
    const videoSource: VideoSource = {
        uri: data?.foundUrl || "",
        contentType: data?.foundUrl.includes("m3u8") ? "hls" : "auto",
        useCaching: true,
    };
    const player = useVideoPlayer(videoSource);
    useEffect(() => {
        async function fetchVideo() {
            try {
                const resp = await fetch(`http://172.16.0.7:3000/anime/video/${slug}/${id}`);
                const json = await resp.json();
                setData(json[0]);
            } catch (e) {
                console.error("Error fetching video data:", e);
            }
        }
        fetchVideo();
    }, [slug, id]);

    useEffect(() => {
        (async () => {
            if (data && videoViewRef.current) {
                player.play();

                if (Platform.isTV) {
                    await videoViewRef.current.enterFullscreen();
                }
            }
        })()
    }, [data, videoViewRef.current]);

    return (
        <View style={styles.container}>
            {data ? (
                <VideoView
                    ref={videoViewRef}
                    style={styles.video}
                    player={player}
                    fullscreenOptions={{ enable: true }}
                />
            ) : (
                <ActivityIndicator size="large" color="#00f" />
            )}
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    video: {
        width: Platform.isTV ? 700 : 350,
        height: Platform.isTV ? 400 : 200,
        borderRadius: 12,
        backgroundColor: "#000",
    },
});
