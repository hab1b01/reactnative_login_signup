import { Link, useRouter } from "expo-router";
import React, { useState } from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CustomInput from "./CustomInput";
import BackgroundShape from "./BackgroundShape";

const SignupView = () => {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.container}>
      <BackgroundShape />

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={20} />
      </TouchableOpacity>

      <View style={styles.header}>
        <Text style={styles.title}>Create Account</Text>
      </View>

      <View style={styles.form}>
        <CustomInput
          label="FULL NAME"
          placeholder="Jhone williams"
          value={fullName}
          onChangeText={setFullName}
          icon="person-outline"
          autoCapitalize="words"
        />

        <CustomInput
          label="EMAIL"
          placeholder="Enter your email"
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

        <CustomInput
          label="CONFIRM PASSWORD"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          icon="lock-closed-outline"
        />

        <TouchableOpacity style={{ width: "60%", alignSelf: "flex-end" }}>
          <LinearGradient
            colors={["#FFA500", "#FF8C00"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.signupButton}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <Text style={styles.signupButtonText}>SIGN UP</Text>
              <Ionicons name="arrow-forward" size={24} color="white" />
            </View>
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.signinContainer}>
          <Text style={styles.signinText}>Already have a account? </Text>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.signinLink}>Sign in</Text>
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
  },
  backButton: {
    marginTop: 40,
    marginBottom: 20,
  },
  header: {
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
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
  signupButton: {
    padding: 14,
    borderRadius: 40,
    alignItems: "center",
    marginTop: 20,
  },
  signupButtonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },
  signinContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  signinText: {
    color: "#666",
  },
  signinLink: {
    color: "#FFA500",
  },
});

export default SignupView;
