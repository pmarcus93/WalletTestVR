import React, {FC} from 'react';
import {KeyboardTypeOptions, Text, View} from 'react-native';
import {TextInput, TextInputProps} from 'react-native';

import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  ValidationRule,
} from 'react-hook-form';
import {MaskedTextInput, MaskedTextInputProps} from 'react-native-mask-text';

import {COLORS} from '@shared/defaults';
import globalStyles from '@shared/globalStyles';

interface Props<T extends FieldValues> {
  control: Control<T, any>;
  errors: Partial<FieldErrors>;
  keyboardType?: KeyboardTypeOptions;
  label: string;
  mask?: string;
  name: string;
  placeholder: string;
  rules?: {
    required?: boolean;
    pattern?: ValidationRule<RegExp>;
  };
  secureTextEntry?: boolean;
}

const MaskedInput: React.FC<MaskedTextInputProps> = props => {
  return (
    <MaskedTextInput
      style={globalStyles.textInput}
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
      style={globalStyles.textInput}
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
      <Text style={globalStyles.label}>{label}</Text>
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
