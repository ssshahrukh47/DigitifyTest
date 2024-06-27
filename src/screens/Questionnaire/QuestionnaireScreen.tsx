import React, {useState, useRef, useEffect, useCallback} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  useWindowDimensions,
} from 'react-native';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import Question from '../../components/Question';
import {useDispatch, useSelector} from 'react-redux';
import {setSelectedAnswers} from '../../redux/reducers/QuestionnaireReducer';
import {QUESTIONS} from '../../utils/Constants';
import {navigate} from '../../../core/reactNavigation/NavigationServices';
import Strings from '../../../res/strings/Strings';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';

const QuestionnaireScreen: React.FC = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const {selectedAnswers} = useSelector( (state: any) => state?.QuestionnaireReducer );
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const {height, width} = useWindowDimensions();
  const carouselRef = useRef<any>(null);

  const renderItem = ({item}: any) => (
    <View style={{minHeight: 550}}>
      <Question
        key={item?.name}
        choices={item?.choices}
        label={item?.label}
        onChange={(value:any )=> handleValues(value)}
        selectedValues={[]}
      />
    </View>
  );

  const handleValues = (value: string[]) => {
    let temp = [...selectedAnswers];
    temp.push(value[0]);
    dispatch(setSelectedAnswers(temp));
  };

  const calculateScore = () => {
    let totalScore = 0;

    selectedAnswers.forEach((choice: string, index: number) => {
      const question = QUESTIONS[index];
      const choiceIndex = question?.choices?.indexOf(choice);
      if (choiceIndex !== -1) {
        totalScore += question?.scores[choiceIndex];
      }
    });
    navigate('ResultScreen', totalScore);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <Carousel
        ref={carouselRef}
        layout={'default'}
        data={QUESTIONS}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
        lockScrollWhileSnapping={true}
        scrollEnabled={false}
        useScrollView={true}
        onSnapToItem={index => setActiveIndex(index)}
      />

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => {
          if (activeIndex === QUESTIONS.length - 1) {
            calculateScore();
          } else {
            carouselRef?.current?.snapToNext();
          }
        }}>
        <Text style={styles.nextButtonText}>
          {activeIndex === QUESTIONS.length - 1 ? Strings.FINISH : Strings.NEXT}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default QuestionnaireScreen;
