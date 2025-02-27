import { Link } from "expo-router";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomInput from "./CustomInput";
import BackgroundShape from "./BackgroundShape";
import {
  AntDesign,
  EvilIcons,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <BackgroundShape />
      <View style={styles.header}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>Please sign in to continue.</Text>
      </View>

      <View style={styles.form}>
        <CustomInput
          label="EMAIL"
          placeholder="user123@email.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          icon="mail-outline"
        />

        <CustomInput
          label="PASSWORD"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          icon="lock-closed-outline"
        />

        <TouchableOpacity
          onPress={() => console.log("Forgot password clicked")}
        >
          <Text style={styles.forgotText}>FORGOT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ width: "60%", alignSelf: "flex-end" }}>
          <LinearGradient
            colors={["#FFA500", "#FF8C00"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.loginButton}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <Text style={styles.loginButtonText}>LOGIN</Text>
              <Ionicons name="arrow-forward" size={24} color="white" />
            </View>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity>
            <Link href={"/signup"}>
              <Text style={styles.signupLink}>Sign up</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 100,
  },
  header: {
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: "condensed",
    fontFamily: "Poppins_600SemiBold",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    fontWeight: "condensed",
    fontFamily: "Poppins_600SemiBold",
  },
  form: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingVertical: 8,
    fontSize: 16,
  },
  forgotText: {
    color: "#FFA500",
    alignSelf: "flex-end",
    marginTop: 8,
    fontSize: 12,
  },
  loginButton: {
    padding: 14,
    borderRadius: 40,
    alignItems: "center",
    marginTop: 20,
  },

  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signupText: {
    color: "#666",
  },
  signupLink: {
    color: "#FFA500",
  },
});

export default LoginView;
