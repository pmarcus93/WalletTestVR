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

import {AutoCapitalizeOptions} from 'react-native-mask-text/lib/typescript/src/@types/AutoCapitalizeOptions';

import {COLORS} from '@shared/defaults';
import globalStyles from '@shared/globalStyles';

import {Label} from '@components/StyledComponents/StyledComponents';

interface Props<T extends FieldValues> {
  autoCapitalize?: AutoCapitalizeOptions;
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
  return <MaskedTextInput autoCorrect={false} {...props} />;
};

const RegularInput: React.FC<TextInputProps> = props => {
  return <TextInput autoCorrect={false} {...props} />;
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
  autoCapitalize,
}: Props<any>) => {
  return (
    <View>
      <Label>{label}</Label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({field: {onChange, onBlur, value}}) => {
          if (mask) {
            return (
              <MaskedInput
                autoCapitalize={autoCapitalize}
                placeholder={placeholder}
                mask={mask}
                keyboardType={keyboardType}
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                secureTextEntry={secureTextEntry}
                style={[
                  globalStyles.textInput,
                  errors[name] ? globalStyles.textInputError : {},
                ]}
                placeholderTextColor={COLORS.placeholder}
                autoComplete="off"
              />
            );
          } else {
            return (
              <RegularInput
                autoCapitalize={autoCapitalize}
                placeholder={placeholder}
                keyboardType={keyboardType}
                onBlur={onBlur}
                value={value}
                onChangeText={onChange}
                secureTextEntry={secureTextEntry}
                style={[
                  globalStyles.textInput,
                  errors[name] ? globalStyles.textInputError : {},
                ]}
                placeholderTextColor={COLORS.placeholder}
                autoComplete="off"
              />
            );
          }
        }}
      />
      {errors[name] && (
        <Text style={globalStyles.labelError}>Campo obrigatório!</Text>
      )}
    </View>
  );
};
export default FormControlInput;
