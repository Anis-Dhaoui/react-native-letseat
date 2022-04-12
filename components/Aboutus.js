import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Modal, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { STAFF } from '../data/staff'
import { Button } from 'react-native-elements';

export default function Aboutus() {
  const [isModalOpen, setisModalOpen] = useState(false);
  const [selectedProfile, setselectedProfile] = useState([]);

  return (
    <ScrollView>
      <View>
        <Text style={styles.AboutHeader}>Who Are We?</Text>
        <ScrollView style={styles.aboutContent} nestedScrollEnabled={true} fadingEdgeLength={170} >
          <Text style={{ marginBottom: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.

            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
          </Text>
        </ScrollView>
      </View>

      <View style={styles.container}>
        <Text style={styles.AboutHeader}>Our Staff</Text>
        {
          STAFF.map((item) => {
            return (
              <TouchableOpacity key={item.id} style={styles.card} onPress={() => { setselectedProfile(item); setisModalOpen(true) }}>
                <Image style={styles.image} source={require("./images/anisdh.jpg")} />
                <View style={styles.cardContent}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.abbr}>{item.abbr}</Text>
                  <TouchableOpacity style={styles.viewBtn} onPress={() => { setselectedProfile(item); setisModalOpen(true) }}>
                    <Text style={styles.viewBtnText}>View Profile</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )
          })
        }
      </View>

      <Modal
        animationType={'fade'}
        transparent={true}
        onRequestClose={() => setisModalOpen(false)}
        visible={isModalOpen}>

        <View style={styles.popupOverlay}>
          <View style={styles.popup}>
            <View style={styles.popupContent}>
              <ScrollView contentContainerStyle={styles.modalInfo}>
                <Image style={styles.image} source={require("./images/anisdh.jpg")} />
                <Text style={styles.name}>{selectedProfile.name}</Text>
                <Text style={styles.position}>{selectedProfile.designation}</Text>
                <Text style={styles.description}>{selectedProfile.description}</Text>
              </ScrollView>
              <View style={styles.popupFooter}>
                <Button
                  title="Close"
                  buttonStyle={{
                    backgroundColor: 'rgba(78, 116, 289, 1)',
                    borderRadius: 7,
                  }}
                  containerStyle={{
                    width: 120
                  }}
                  onPress={() => setisModalOpen(false)}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  AboutHeader: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'gray'
  },
  aboutContent: {
    borderWidth: 1,
    borderColor: '#c2c9c283',
    padding: 5,
    marginHorizontal: 5,
    height: 320,
    maxHeight: 320,
    borderRadius: 10,
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },


  // Our Staff
  container: {
    flex: 1,
    marginTop: 0,
    backgroundColor: "#eeeeee"
  },
  userList: {
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
  },

  card: {
    shadowColor: '#000000a9',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
    flexBasis: '46%',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10
  },

  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: "#008080",
    fontWeight: 'bold'
  },

  abbr: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: "#696969"
  },
  viewBtn: {
    marginTop: 10,
    height: 35,
    width: 170,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  viewBtnText: {
    color: "#FFFFFF",
    fontSize: 20,
  },

  /************ modals ************/
  popup: {
    backgroundColor: 'white',
    marginTop: (Dimensions.get('screen').height - 460) / 2,
    marginHorizontal: 10,
    borderRadius: 7
  },
  popupOverlay: {
    backgroundColor: "#00000057",
    flex: 1,
    marginTop: 55

  },
  popupContent: {
    margin: 5
  },
  description: {
    margin: 10
  },
  popupFooter: {
    marginTop: 10,
    paddingTop: 5,
    borderTopWidth: 1,
    borderColor: "#eee",
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnClose: {
    height: 20,
    width: 120,
    backgroundColor: '#07a4ffff',
    borderRadius: 7
  },
  modalInfo: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})