import React, { FC } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import QuestionnaireScreen from '../../../src/screens/Questionnaire/QuestionnaireScreen';
import ResultScreen from '../../../src/screens/Result/ResultScreen';

const AppStack = createStackNavigator();

const AppNavigator: FC<{}> = ({  }) => {
  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen component={QuestionnaireScreen} name="QuestionnaireScreen" />
      <AppStack.Screen component={ResultScreen} name="ResultScreen" />
    </AppStack.Navigator>
  );
};
export default AppNavigator;
