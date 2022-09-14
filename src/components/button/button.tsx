import {StyleSheet, Text} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ButtonProps {
  onPress: void;
  text: string;
  color: string;
  textColor: string;
  disabled: boolean;
}

const Button: FC = ({
  onPress,
  text,
  color,
  textColor,
  disabled,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={styles(color, disabled).button}>
      <Text style={styles(textColor).text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = (color, textColor, disabled) =>
  StyleSheet.create({
    button: {
      backgroundColor: disabled ? '#ccc' : color ? color : '#06f',
      height: 50,
      width: '100%',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      color: textColor ? textColor : '#fff',
    },
  });
