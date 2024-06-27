import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
import { QUESTIONS } from '../../utils/Constants';
import Strings from '../../../res/strings/Strings';
import { navigate, resetActions } from '../../../core/reactNavigation/NavigationServices';
import { useDispatch } from 'react-redux';
import { resetSelectedAnswers } from '../../redux/reducers/QuestionnaireReducer';

interface ResultScreenProps {
  route: {
    params: number;
  };
}

const ResultScreen: React.FC<ResultScreenProps> = ({ route }) => {
  const dispatch = useDispatch()
  const totalScore = route?.params;

  const determineRiskProfile = (score: number): string => {
    // Calculate the minimum and maximum possible scores
    const minScore = QUESTIONS.reduce((sum, question) => sum + Math.min(...question.scores), 0);
    const maxScore = QUESTIONS.reduce((sum, question) => sum + Math.max(...question.scores), 0);

    // Define the ranges dynamically
    const rangeStep = (maxScore - minScore) / 3;
    const lowRiskUpperLimit = minScore + rangeStep;
    const moderateRiskUpperLimit = lowRiskUpperLimit + rangeStep;

    // Determine the risk profile based on the score
    if (score <= lowRiskUpperLimit) {
      return 'Low Risk';
    } else if (score <= moderateRiskUpperLimit) {
      return 'Moderate Risk';
    } else {
      return 'High Risk';
    }
  };

  return (
    <ImageBackground
      source={require('../../../res/assets/images/resultScreenBg.png')}
      style={styles.backgroundImage}
    >
      <StatusBar barStyle="dark-content" />

      <View style={styles.spacing}>
        <View style={styles.firstScoreContainer}>
          <View style={styles.secondScoreContainer}>
            <View style={styles.thirdScoreContainer}>
              <Text style={styles.yourScore}>
                {totalScore}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.feedbackTextContainer}>
          <Text style={styles.feedbackTitle}>
            {determineRiskProfile(totalScore)}
          </Text>
          <ScrollView>
            <Text style={styles.feedbackText}>
              {Strings.RISK_DESCRIPTION}
            </Text>
          </ScrollView>
        </View>

        <TouchableOpacity style={styles.nextButton} onPress={() => {
          resetActions('QuestionnaireScreen')
          dispatch(resetSelectedAnswers())
        }}>
          <Text style={styles.nextButtonText}>{Strings.START_AGAIN}</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default ResultScreen;
