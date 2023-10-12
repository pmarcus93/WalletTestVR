import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  ValidationRule,
} from 'react-hook-form';
import {KeyboardTypeOptions, Text, View} from 'react-native';
import sharedStyles from '../../shared/sharedStyles';
import React, {FC} from 'react';
import {COLORS} from '../../shared/defaults';
import {MaskedTextInput, MaskedTextInputProps} from 'react-native-mask-text';
import {TextInput, TextInputProps} from 'react-native';

interface Props<T extends FieldValues> {
  control: Control<T, any>;
  errors: Partial<FieldErrors>;
  label: string;
  name: string;
  rules?: {
    required?: boolean;
    pattern?: ValidationRule<RegExp>;
  };
  mask?: string;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
}

const MaskedInput: React.FC<MaskedTextInputProps> = props => {
  return (
    <MaskedTextInput
      style={sharedStyles.textInput}
      placeholderTextColor={COLORS.placeholder}
      autoComplete="off"
      autoCorrect={false}
      {...props}
    />
  );
};

const RegularInput: React.FC<TextInputProps> = props => {
  return (
    <TextInput
      style={sharedStyles.textInput}
      placeholderTextColor={COLORS.placeholder}
      autoComplete="off"
      autoCorrect={false}
      {...props}
    />
  );
};

const FormControlInput: FC<Props<any>> = ({
  control,
  mask,
  errors,
  name,
  placeholder,
  label,
  keyboardType,
  rules,
  secureTextEntry,
}: Props<any>) => {
  return (
    <View>
      <Text style={sharedStyles.label}>{label}</Text>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({field: {onChange, onBlur, value}}) => {
          if (mask) {
            return (
              <MaskedInput
                placeholder={placeholder}
                mask={mask}
                keyboardType={keyboardType}
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                secureTextEntry={secureTextEntry}
              />
            );
          } else {
            return (
              <RegularInput
                placeholder={placeholder}
                keyboardType={keyboardType}
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                secureTextEntry={secureTextEntry}
              />
            );
          }
        }}
      />
      {errors[name] && <Text>Campo obrigatório.</Text>}
    </View>
  );
};
export default FormControlInput;
