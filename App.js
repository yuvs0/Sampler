import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Alert,
  Image,
  Pressable,
  Modal,
  Dimensions,
  Rect,
} from "react-native";

const DATA = [
  {
    id: "01",
    title: "Hit Me Up",
    artist: "Omar Apollo, Dominic Fike & Kenny Beats",
    trackArt:
      "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/bf/11/01/bf1101cc-bd70-3021-5984-03fa34a6e8f0/5056167119296_1.jpg/600x600bf-60.jpg",
  },
  {
    id: "02",
    title: "Turn On The Lights again.. (feat. Future)",
    artist: "Fred again.. & Swedish House Mafia",
    trackArt:
      "https://is5-ssl.mzstatic.com/image/thumb/Music126/v4/21/2f/7b/212f7bef-283d-8845-6b5f-d2fbb074c1ba/5054197615252.jpg/1200x1200bb.jpg",
  },
  {
    id: "03",
    title: "Bonfire",
    artist: "Tudor",
    trackArt:
      "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/7e/e6/4d/7ee64d00-9f99-3ca3-374e-3f5ff8a2c6b8/cover.jpg/1200x1200bf-60.jpg",
  },
  {
    id: "04",
    title: "Places",
    artist: "Drove & Dillon Francis",
    trackArt:
      "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/5a/e5/61/5ae5613a-a1dd-e869-0a77-f57840f31d68/8720205350756.png/1200x1200bf-60.jpg",
  },
  {
    id: "05",
    title: "Jesus Walks",
    artist: "Kanye West",
    trackArt:
      "https://is2-ssl.mzstatic.com/image/thumb/Music116/v4/0d/73/b1/0d73b181-2716-f7a6-a340-0a3f81eacfb9/06UMGIM15686.rgb.jpg/1200x1200bb.jpg",
  },
  {
    id: "06",
    title: "Where We're Going",
    artist: "Gerry Cinnamon",
    trackArt:
      "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/c7/35/25/c7352501-cacb-d4d9-dfbc-0a87f4c591da/5056167128632_1.jpg/1200x1200bf-60.jpg",
  },
  {
    id: "07",
    title: "Hypersonic Missiles",
    artist: "Sam Fender",
    trackArt:
      "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/2c/fd/1b/2cfd1b19-7909-be06-434d-0c64f373de0d/19UMGIM26519.rgb.jpg/600x600bf-60.jpg",
  },
  {
    id: "08",
    title: "You & I (feat SHELLS)",
    artist: "HotLap",
    trackArt:
      "https://is5-ssl.mzstatic.com/image/thumb/Music112/v4/49/7c/f9/497cf9db-661f-0851-9e2a-f04331aab7eb/cover.jpg/600x600bf-60.jpg",
  },
  {
    id: "09",
    title: "Doin' Time",
    artist: "Lana Del Rey",
    trackArt:
      "https://is3-ssl.mzstatic.com/image/thumb/Music124/v4/e5/49/ae/e549ae53-352c-779c-8a24-e3fc7b50e648/19UMGIM61350.rgb.jpg/1200x1200bf-60.jpg",
  },
  {
    id: "10",
    title: "Intimiated (feat. H.E.R.)",
    artist: "KAYTRANADA",
    trackArt:
      "https://is5-ssl.mzstatic.com/image/thumb/Music116/v4/06/39/e5/0639e569-1936-4f03-f1d8-f8e60bf69d7f/886449593699.jpg/1200x1200bf-60.jpg",
  },
  {
    id: "11",
    title: "up the walls",
    artist: "Soccer Mommy",
    trackArt:
      "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/f6/41/c1/f641c17a-ba93-7d25-f908-2811d1c22a2b/19CRGIM15802.rgb.jpg/1200x1200bf-60.jpg",
  },
  {
    id: "12",
    title: "It's Not You",
    artist: "Chet Faker",
    trackArt:
      "https://is2-ssl.mzstatic.com/image/thumb/Music125/v4/3b/fd/cd/3bfdcdb8-3aa5-ad26-de75-9036bb64246f/4050538647730.jpg/1200x1200bf-60.jpg",
  },
];

//const { width, height} = Dimensions.get("window");
const SELECTION_WIDTH = 200;
const SELECTION_HEIGHT = 300;

type ItemProps = { title: string, artist: string, trackArt: String };

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const onPressTrack = () => {
    console.log("track pressed");
    setModalVisible(true);
  };
  const Item = ({ title, artist, trackArt }: ItemProps) => (
    <Pressable
      style={[
        styles.topLevelContainer,
        {
          flexDirection: "row",
          alignContent: "flex-start",
          alignSelf: "flex-start",
          padding: 10,
        },
      ]}
      onPress={onPressTrack}
    >
      <Image
        style={([styles.trackArt], { width: 40, height: 40, borderRadius: 7 })}
        src={trackArt}
      />
      <View
        style={[
          styles.innerContainer,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column",
            //alignContent: 'flex-start',
            justifyContent: "center",
          },
        ]}
      >
        <Text numberOfLines={1} style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={1} style={styles.artist}>
          {artist}
        </Text>
      </View>
    </Pressable>
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            artist={item.artist}
            trackArt={item.trackArt}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
    //marginTop: 200,
    flexDirection: "row",
  },
  modalView: {
    margin: 20,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 20,
    //height: 300,
    width: 360,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  bottomModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "bottom",
    marginTop: 22,
    backgroundColor: "white",
    height: 30,
    width: 30,
  },
  topLevelContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    borderRadius: 12,
    backgroundColor: "#efefef",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  innerContainer: {
    flex: 1,
    marginLeft: 5,
  },
  item: {
    backgroundColor: "#efefef",
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
    marginHorizontal: 16,
  },
  title: {
    flex: 1,
    fontSize: 20,
  },
  artist: {
    flex: 1,
    fontSize: 14,
  },
  trackArt: {
    flex: 1,
    height: 40,
    width: 40,
    borderRadius: 7,
  },
});

export default App;
