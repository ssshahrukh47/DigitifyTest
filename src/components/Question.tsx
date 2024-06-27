import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import colors from '../../res/typography/colors';


export type ValueSelectorType = {
  [index: string]: boolean;
};
export type TextFieldProps = {
  label?: string;
  choices: string[]; // possible options
  selectedValues: string[];
  onChange: (value: null | string[]) => void;
};

const Question = ({
  label,
  choices,
  selectedValues,
  onChange,
}: TextFieldProps) => {
  const [valueSelector, setValueSelector] = useState<ValueSelectorType>({});
  const [selectedValuesState, setSelectedValuesState] = useState<string[]>(selectedValues);

  useEffect(() => {
    var valueSelectorTmp: ValueSelectorType = {};
    choices.forEach((choice: string) => {
      valueSelectorTmp[choice] = false;
    });

    selectedValues.forEach((choice: string) => {
      valueSelectorTmp[choice] = true;
    });
    setValueSelector(valueSelectorTmp);
  }, [])

  return (
    <View>
      {label && (
        <Text style={styles.question}>
          {label}
        </Text>
      )}
      {
        choices?.map((choice: string, idx: number) => {
          return (
            <View key={idx} style={{}}>
              <TouchableOpacity
                style={{
                  ...styles.chip,
                  borderColor: valueSelector[choice]
                    ? colors.primaryColor
                    : colors.grayColor,
                  shadowColor: valueSelector[choice] ? colors.gray9 : 'transparent',
                }}
                onPress={() => {
                  let valueSelectorTmp: ValueSelectorType = {};
                  choices.forEach((choice: string) => {
                    valueSelectorTmp[choice] = false;
                  });
                  if (valueSelector[choice]) {
                    onChange([]);
                    setSelectedValuesState([]);
                    setValueSelector(valueSelectorTmp);
                  } else {
                    onChange([choice]);
                    setSelectedValuesState([choice]);
                    setValueSelector({
                      ...valueSelectorTmp,
                      [choice]: true,
                    });
                  }
                }}>
                <View style={styles.labelContainer}>
                  <Text style={[styles.labelText, { color: valueSelector[choice] ? colors.primaryColor : colors.grayColor }]}>
                    {choice}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
    </View>
  );
};
const styles = StyleSheet.create({
  question: {
    fontWeight: '600',
    marginBottom: 24,
    marginTop: 25,
    marginHorizontal: 20,
  },
  chip: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    marginBottom: 16,
    marginHorizontal: 15,
    minHeight: 80,
    borderRadius: 6,
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  labelContainer: {
    flexShrink: 1,
    marginHorizontal: 5,
  },
  labelText: {
    fontWeight: '400',
    color: 'gray',
    textAlign: 'center'
  },
});

export default Question;