import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

export default class StoryCard extends Component {
  render() {
      return (
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <Image
              source={require("../assets/image_1.jpg")}
              style={styles.storyImage}
            ></Image>

            <View style={styles.titleContainer}>
              <Text style={styles.storyTitleText}>
                {this.props.story.title}
              </Text>



              <View style={styles.appTitle}>
            <View style={styles.appIcon}>
              <Image
                source={require("../assets/profile_img.png")}
                style={styles.iconImage}
              ></Image>
            </View>
            <View style={styles.appTitleTextContainer}>
              <Text style={styles.appTitleText}>{this.props.story.author}</Text>
            </View>
          </View>


              
              <Text style={styles.descriptionText}>
                {this.props.story.description}
              </Text>
            </View>
            <View style={styles.actionContainer}>
              <View style={styles.likeButton}>
                <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                <Text style={styles.likeText}>12k</Text>
              </View>
            </View>
          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  userImage:{
    justifyContent: "center",
    alignItems: "left"
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2a2a2a",
    borderRadius: RFValue(20)
  },
  storyImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center",
  },
  storyTitleText: {
    fontSize: RFValue(25),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
    userIconImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },
  storyAuthorText: {
    fontSize: RFValue(18),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  descriptionText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10)
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  },
    appTitle: {
    flex: 0.12,
    flexDirection: "row",
    paddingTop:10,
    paddingBottom:5
  },
  appIcon: {
    flex: 0.12,
    justifyContent: "center",
    alignItems: "center"
  },
  iconImage: {
    width: "1000%",
    height: "1000%",
    resizeMode: "contain"
  },
  appTitleTextContainer: {
    flex: 0.7,
    justifyContent: "center"
  },
  appTitleText: {
    color: "white",
    fontSize: RFValue(18),
    fontFamily: "Bubblegum-Sans"
  },
});
