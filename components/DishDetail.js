import { View, Text, Modal, Pressable } from 'react-native'
import React, { useRef } from 'react'
import { Card } from 'react-native-elements';
import GestureRecognizer from 'react-native-swipe-gestures';

export default function DishDetail(props) {
    const dish = props.dish;
    if (dish !== undefined) {
        const tooltipRef = useRef(null);

        const onOpenToolTip = () => {
            setTimeout(function () { tooltipRef.current.toggleTooltip(); }, 3000);
        }
        return (
            <View>
                <GestureRecognizer onSwipeDown={() => props.closeModal()}>
                    <Modal
                        animationType="slide"
                        transparent={false}
                        visible={props.isModalOpen}
                        statusBarTranslucent={true}
                        onRequestClose={() => {
                            props.closeModal();
                        }}
                    >
                        <Card containerStyle={{ backgroundColor: '#f0e9e9', marginTop: 30 }}>
                            <Card.Image
                                source={require("./images/prawn-cocktail-salad.jpg")}
                            />
                            <Card.Title style={{marginTop: 10}}> {dish.name} </Card.Title>
                            <Text style={{ marginVertical: 10 }}>
                                {dish.description}
                            </Text>
                        </Card>
                    </Modal>
                </GestureRecognizer>
            </View>

        )
    } else {
        return (null)
    }
}