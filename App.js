import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import InputTextField from "./components/InputTextField";

export default class App extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <View>
                    <View style={{ marginTop: 60, alignItems: "center", justifyContent: "center" }}>
                        <Image source={require("./assets/logo.png")} />
                        <Text style={[styles.text, { marginTop: 10, fontSize: 22, fontWeight: "500" }]}>Vermo</Text>
                    </View>
                    <View style={{ marginTop: 48, flexDirection: "row", justifyContent: "center" }}>
                        <TouchableOpacity>
                            <View style={styles.socialButton}>
                                <Image source={require("./assets/facebook.png")} style={styles.socialLogo} />
                                <Text style={styles.text}>Facebook</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.socialButton}>
                            <Image source={require("./assets/google.png")} style={styles.socialLogo} />
                            <Text style={styles.text}>Google</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={[styles.text, { color: "#ABB4BD", fontSize: 15, textAlign: "center", marginVertical: 20 }]}>or</Text>

                    <InputTextField style={styles.inputTitle} title="Email" />
                    <InputTextField
                        style={{
                            marginTop: 32,
                            marginBottom: 8
                        }}
                        title="Password"
                        isSecure={true}
                    />

                    <Text style={[styles.text, styles.link, { textAlign: "right" }]}>Forgot Password?</Text>

                    <TouchableOpacity style={styles.submitContainer}>
                        <Text
                            style={[
                                styles.text,
                                {
                                    color: "#FFF",
                                    fontWeight: "600",
                                    fontSize: 16
                                }
                            ]}
                        >
                            Login
                        </Text>
                    </TouchableOpacity>

                    <Text
                        style={[
                            styles.text,
                            {
                                fontSize: 14,
                                color: "#ABB4BD",
                                textAlign: "center",
                                marginTop: 24
                            }
                        ]}
                    >
                        Don't have an account? <Text style={[styles.text, styles.link]}>Register Now</Text>
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 30
    },
    text: {
        fontFamily: "Avenir Next",
        color: "#1D2029"
    },
    socialButton: {
        flexDirection: "row",
        marginHorizontal: 12,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(171, 180, 189, 0.65)",
        borderRadius: 4,
        backgroundColor: "#fff",
        shadowColor: "rgba(171, 180, 189, 0.35)",
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5
    },
    socialLogo: {
        width: 16,
        height: 16,
        marginRight: 8
    },
    link: {
        color: "#FF1654",
        fontSize: 14,
        fontWeight: "500"
    },
    submitContainer: {
        backgroundColor: "#FF1654",
        fontSize: 16,
        borderRadius: 4,
        paddingVertical: 12,
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
        color: "#FFF",
        shadowColor: "rgba(255, 22, 84, 0.24)",
        shadowOffset: { width: 0, height: 9 },
        shadowOpacity: 1,
        shadowRadius: 20,
        elevation: 5
    }
});
