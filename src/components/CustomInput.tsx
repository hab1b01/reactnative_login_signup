import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface CustomInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  icon: keyof typeof Ionicons.glyphMap;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  keyboardType = "default",
  autoCapitalize = "none",
  icon,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{label}</Text>
        </View>
        <View style={styles.inputRow}>
          <Ionicons name={icon} size={20} color="#666" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            autoCapitalize={autoCapitalize}
            placeholderTextColor="#999"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    backgroundColor: "#f8f8f8",
  },
  labelContainer: {
    paddingHorizontal: 12,
    paddingTop: 4,
  },
  label: {
    fontSize: 10,
    color: "#999",
    fontFamily: "Poppins_600SemiBold",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 2,
    fontSize: 16,
    fontFamily: "Poppins_400Regular",
  },
});

export default CustomInput;
