import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Divider } from 'react-native-elements';
import formatDate from '../plugins/formatDate';

export default function Comments(props) {

    return (
        <View>
            {
                props.comments.map((item) => {
                    return (
                        <View>
                            <View style={styles.container} key={item.id}>
                                <TouchableOpacity onPress={() => { }}>
                                    <Image style={styles.image} source={{ uri: 'https://www.w3schools.com/howto/img_avatar.png' }} />
                                </TouchableOpacity>
                                <View style={styles.content}>
                                    <View style={styles.contentHeader}>
                                        <Text style={styles.name}>{item.author}</Text>
                                        <Text style={styles.time}>
                                            {formatDate(item.date)}
                                        </Text>
                                    </View>
                                    <Text>{item.comment}</Text>

                                </View>
                            </View>
                            <Divider color={'#1f1313'} />
                        </View>
                    );
                })
            }
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#ffffff",
        marginTop: 10,
    },
    container: {
        paddingLeft: 19,
        paddingRight: 16,
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    content: {
        marginLeft: 16,
        flex: 1,
    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6
    },
    separator: {
        height: 1,
        backgroundColor: "#CCCCCC"
    },
    image: {
        width: 55,
        height: 55,
        borderRadius: 50,
        marginLeft: -10
    },
    time: {
        fontSize: 11,
        color: "#808080",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: '#2a3013ff'
    },
}); 