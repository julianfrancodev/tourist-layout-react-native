import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, ImageBackground, ScrollView, TouchableOpacity, FlatList } from 'react-native';

//Icons
import { createIconSetFromFontello } from 'react-native-vector-icons';
import config from '../theme/fonts/config.json';
const CustomIcon = createIconSetFromFontello(config);

export default function PostDetails({ navigation }) {

    const image = { uri: "https://images.pexels.com/photos/258196/pexels-photo-258196.jpeg" };


    const [gallery, setgallery] = useState([
        { image: { uri: 'https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg' }, title: 'Switzerland', key: '1' },
        { image: { uri: 'https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/p/paisajes-espectaculares-del-mundo-1.jpg' }, title: 'New Zeland', key: '2' },
        { image: { uri: 'https://frasesdelavida.com/wp-content/uploads/2019/08/frases-de-paisajes.jpg' }, title: 'Rome', key: '3' },
        { image: { uri: 'https://alkilautos.com/blog/wp-content/uploads/2018/08/18.08.31-Qu%C3%A9-hacer-en-Tunja-Portada-1280x720.jpg' }, title: 'Tahiti', key: '4' },
    ]);

    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <ImageBackground
                source={image}
                style={styles.image}
                imageStyle={{ borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}
            >
                <Text
                    style={styles.tagLine}
                >
                    Discover Switzerland
                </Text>
                <Text
                    style={styles.placeName}
                >
                    Explore the scenic beauty of Switzerland
                </Text>

                <TouchableOpacity onPress={() => navigation.goBack()} style={{ elevation: 5, position: 'absolute', left: 20, top: 40, backgroundColor: '#ff6200', padding: 10, borderRadius: 40 }}>
                    <CustomIcon name="left-1" size={22} color='#fff' />
                </TouchableOpacity>

                <TouchableOpacity style={{ position: 'absolute', right: 20, top: 40, backgroundColor: '#ff6200', padding: 10, borderRadius: 40, elevation: 5 }}>
                    <CustomIcon name="heart-empty" size={22} color='#fff' />
                </TouchableOpacity>

            </ImageBackground>

            <TouchableOpacity style={styles.bookTicketBtn}>
                <Text style={styles.bookTicketText}>Book Now</Text>
            </TouchableOpacity>

            <ScrollView style={{ backgroundColor: 'white' }}>
                <Text
                    style={{ padding: 14, fontSize: 20, fontWeight: 'bold' }}
                >
                    About the place
                </Text>
                <Text
                    style={{ paddingHorizontal: 14, fontSize: 14, fontWeight: 'normal', opacity: 0.3, justifyContent: "flex-start", textAlign: "justify", lineHeight: 26 }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lobortis tortor. Fusce commodo in erat non sollicitudin.
                    Aliquam nec leo sit amet arcu sodales lacinia. Etiam eleifend augue diam, vitae commodo metus luctus id. Curabitur ut orci dolor.
                    Praesent commodo lacus eu massa maximus condimentum. Nam at lorem non quam tincidunt hendrerit ut id nisl.
                    Aenean in nibh in sapien sagittis varius. Integer turpis odio, egestas eu elementum ac, ultricies nec odio.
                </Text>

                <Text
                    style={{ paddingHorizontal: 14, fontSize: 14, fontWeight: 'normal', opacity: 0.3, justifyContent: "flex-start", textAlign: "justify", lineHeight: 26 }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lobortis tortor. Fusce commodo in erat non sollicitudin.
                    Aliquam nec leo sit amet arcu sodales lacinia.
                </Text>

                <Text
                    style={{ paddingHorizontal: 14, fontSize: 14, fontWeight: 'normal', opacity: 0.3, justifyContent: "flex-start", textAlign: "justify", lineHeight: 26 }}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel lobortis tortor. Fusce commodo in erat non sollicitudin.
                    Aliquam nec leo sit amet arcu sodales lacinia.Integer turpis odio, egestas eu elementum ac, ultricies nec odio.
                </Text>

                <View>
                    <Text
                        style={{ padding: 14, fontSize: 20, fontWeight: 'bold' }}
                    >
                        Suggested Places
                    </Text>
                    <FlatList
                        data={gallery}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <View style={{ paddingBottom: 40 }}>
                                    <View>
                                        <Image
                                            source={item.image}
                                            style={{ width: 150, height: 150, marginHorizontal: 10, borderRadius: 10 }}
                                        />
                                        <View style={styles.darkOverlay}></View>
                                        <CustomIcon 
                                        name="location" 
                                        size={16} 
                                        color='white' 
                                        style={{marginHorizontal:14,marginTop:4,position:'absolute',left:10,bottom:10}}
                                        />

                                        <Text
                                        style={{marginHorizontal:14,marginTop:4,position: 'absolute',left:30,bottom:10,color: 'white',fontSize:14}}
                                        >
                                            {item.title}
                                        </Text>

                                    </View>
                                </View>
                            )
                        }}
                    />
                </View>

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 380,
        justifyContent: 'flex-end'
    },
    tagLine: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 14,
        marginVertical: 6
    },
    placeName: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 14,
        marginBottom: 30
    },
    bookTicketBtn: {
        position: 'absolute',
        right: 12,
        top: 350,
        backgroundColor: '#ff6200',
        padding: 16,
        borderRadius: 40,
        elevation: 5
    },
    bookTicketText: {
        color: 'white',
        fontSize: 14
    },
    darkOverlay:{
        width:150,
        height:150,
        position: 'absolute',
        backgroundColor: '#000',
        opacity:0.2,
        top:0,
        left:0,
        right:0,
        bottom:0,
        borderRadius:10,
        marginHorizontal:10
    }
});
