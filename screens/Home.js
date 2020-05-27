import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    ScrollView,
    TouchableOpacity,
    FlatList,
    TextInput,
}
    from 'react-native';

//Icons
import { createIconSetFromFontello } from 'react-native-vector-icons';
import config from '../theme/fonts/config.json';
const CustomIcon = createIconSetFromFontello(config);

export default function Home({ navigation }) {

    const image = { uri: "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg" };

    const recentImage = { uri: "https://frasesdelavida.com/wp-content/uploads/2019/08/frases-de-paisajes.jpg" };

    const [gallery, setgallery] = useState([
        { image: { uri: 'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg' }, title: 'Switzerland', key: '1' },
        { image: { uri: 'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/p/paisajes-espectaculares-del-mundo-1.jpg' }, title: 'New Zeland', key: '2' },
        { image: { uri: 'https://frasesdelavida.com/wp-content/uploads/2019/08/frases-de-paisajes.jpg' }, title: 'Rome', key: '3' },
        { image: { uri: 'https://alkilautos.com/blog/wp-content/uploads/2018/08/18.08.31-Qu%C3%A9-hacer-en-Tunja-Portada-1280x720.jpg' }, title: 'Tahiti', key: '4' },
    ]);

    const goToPost = () => {
        navigation.navigate('Details');
    }

    return (
        <View>


            <View style={{ flexGrow: 1, height: '100%', backgroundColor: 'white' }}>
                <View style={{ borderBottomRightRadius: 65, elevation: 5 }}>
                    <ImageBackground
                        source={image}
                        style={{ width: '100%', height: 270, borderBottomRightRadius: 65 }}
                        imageStyle={{ borderBottomRightRadius: 65 }}
                    >
                        <CustomIcon name="menu" size={22} color='#fff' style={{ position: 'absolute', top: 30, left: 16 }} />
                        <CustomIcon name="bell" size={22} color='#fff' style={{ position: 'absolute', top: 30, right: 30 }} />
                        <View style={styles.darkOverlay}></View>

                        <View style={styles.searchContainer}>
                            <Text style={styles.userGreet}>
                                Hi, Stranger
                            </Text>
                            <Text style={styles.userText}>
                                Where would you like to go today?
                            </Text>
                        </View>

                        <View>
                            <TextInput
                                style={styles.searchBox}
                                placeholder={'Search your dream world!'}
                                placeholderTextColor='#666'
                            ></TextInput>
                            <CustomIcon name="search" size={22} color='#666' style={{ position: 'absolute', top: 30, right: 60, opacity: 0.6 }} />

                        </View>


                    </ImageBackground>

                </View>

                <ScrollView>
                    <View
                        style={{ padding: 16 }}
                    >
                        <Text
                            style={{ fontSize: 22, fontWeight: 'bold' }}
                        >
                            Trending
                    </Text>
                    </View>

                    <View>
                        <FlatList
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            data={gallery}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{ paddingVertical: 20, paddingLeft: 16 }}>
                                        <TouchableOpacity onPress={goToPost}>
                                            <Image
                                                source={item.image}
                                                style={{ width: 150, marginRight: 8, height: 250, borderRadius: 10 }}
                                            />
                                            <View style={styles.imageOverlay}></View>
                                            <CustomIcon name="location" size={16} color='white' style={styles.imageLocationIcon} />
                                            <Text style={styles.imageText}>{item.title}</Text>
                                        </TouchableOpacity>
                                    </View>
                                )
                            }
                            }
                        />
                    </View>

                    <View style={{ marginBottom: 60 }}>
                        <View style={{ padding: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text
                                style={{ fontSize: 22, fontWeight: 'bold' }}
                            >
                                Recently Viewed
                        </Text>
                            <Text
                                style={{ fontSize: 14, fontWeight: 'bold', color: '#ff6200' }}
                            >
                                View All
                        </Text>
                        </View>
                        <Image
                            source={recentImage}
                            style={{ width: '92%', height: 250, borderRadius: 10, marginHorizontal: 20, alignSelf: 'center' }}
                        />
                        <View style={{ position: 'absolute', bottom: 0, padding: 16 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <CustomIcon name="location" size={22} color='white' style={{ marginLeft: 10, position: 'relative', top: 4 }} />
                                <Text style={{ fontSize: 22, color: 'white', fontWeight: 'normal', marginBottom: 10, marginHorizontal: 10 }}>
                                    Venice
                            </Text>
                            </View>
                            <Text style={{ fontSize: 14, color: 'white', fontWeight: 'normal', marginBottom: 4, opacity: 0.5, marginLeft: 16 }}>
                                Venice, the capital of nothern Italy's Vento Region in the Adriatic Sea
                        </Text>
                        </View>
                    </View>

                </ScrollView>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    darkOverlay: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        height: 270,
        backgroundColor: '#000',
        opacity: 0.2,
        borderBottomRightRadius: 65
    },
    userGreet: {
        fontSize: 38,
        fontWeight: 'bold',
        color: 'white'
    },
    userText: {
        fontSize: 16,
        fontWeight: '100',
        color: 'white'
    },
    searchContainer: {
        paddingTop: 100,
        paddingLeft: 16,
    },
    searchBox: {
        marginTop: 16,
        backgroundColor: '#fff',
        paddingLeft: 24,
        padding: 12,
        borderTopRightRadius: 40,
        borderBottomRightRadius: 40,
        width: '90%',
        elevation: 5
    },
    imageOverlay: {
        width: 150,
        height: 250,
        marginRight: 8,
        borderRadius: 10,
        position: 'absolute',
        backgroundColor: '#000',
        opacity: 0.2
    },
    imageLocationIcon: {
        position: 'absolute',
        marginTop: 4,
        left: 10,
        bottom: 10
    },
    imageText: {
        position: 'absolute',
        color: 'white',
        marginTop: 4,
        fontSize: 14,
        left: 30,
        bottom: 10
    }

});
