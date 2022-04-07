import { Text, ScrollView, } from 'react-native'
import React from 'react'
import { Card, Divider } from 'react-native-elements';
import GestureRecognizer from 'react-native-swipe-gestures';
import Comments from './comments';

export default function DishDetail({ route, navigation }) {
    const dish = route.params.dish;
    if (dish !== undefined) {
        return (
            <GestureRecognizer onSwipeLeft={() => navigation.goBack()}>
                <ScrollView>
                    <Card containerStyle={{ backgroundColor: '#f0e9e9', marginTop: 5 }}>
                        <Card.Image
                            source={require("./images/prawn-cocktail-salad.jpg")}
                        />
                        <Card.Title style={{ marginTop: 10 }}> {dish.name} </Card.Title>
                        <Text style={{ marginVertical: 10 }}>
                            {dish.description}
                        </Text>
                    </Card>

                    <Divider
                        subHeader="Comments"
                        subHeaderStyle={{ color: '#fff', backgroundColor: '#f0e9e3', paddingVertical: 10, textAlign: 'center', fontSize: 22 }}
                    />
                    <Comments />
                </ScrollView>

            </GestureRecognizer>

        )
    } else {
        return (<Text>No dish found</Text>)
    }
}