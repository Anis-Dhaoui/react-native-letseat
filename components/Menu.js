import { Text, ScrollView } from 'react-native'
import React from 'react'
import { Card, Button, Icon } from 'react-native-elements'

export default function Menu(props) {
  const list = props.dishes;
  return (
    <ScrollView>
        {
            list.map((item, i) => {
                return(
                    <Card key={i}>
                        <Card.Title> {item.name} </Card.Title>
                        <Card.Image
                            source={require("./images/prawn-cocktail-salad.jpg")}
                        />
                        <Text style={{ marginVertical: 10 }}>
                            {item.description}
                        </Text>
                        <Button
                            icon={<Icon name='code' color='#ffffff' />}
                            buttonStyle={{ borderRadius: 3, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                            title='VIEW NOW' 
                        />
                    </Card>
                )
            })
        }
   </ScrollView>
  )
}