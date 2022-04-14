import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native-elements'
import { DrawerItemList } from '@react-navigation/drawer'

export default function Logo(props) {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <Image style={styles.logoImg} source={require('./images/logo.png')} />
                </View>
                <View style={{ flex: 2 }}>
                    <Text style={styles.logoTxt}>Let's Eat Restaurant</Text>
                </View>
            </View>
            <DrawerItemList  {...props} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#079eb9',
        height: 110,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    logoImg:{
        margin: 10,
        width: 80,
        height: 80
    },
    logoTxt:{
        color: 'yellow',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})