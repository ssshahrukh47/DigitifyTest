import { StyleSheet } from "react-native";
import colors from "../../../res/typography/colors";

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  scrollViewStyle: {
    flex: 1,
    // justifyContent: 'flex-end',
  },
  spacing: {
    // marginHorizontal: 5,
    flex: 1,
    justifyContent: 'center',
  },
  firstScoreContainer: {
    height: 200,
    width: 200,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 150,
    marginBottom: 20,
    marginTop: 60,
    backgroundColor: colors.bgColor,
  },
  secondScoreContainer: {
    height: 160,
    width: 160,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    borderRadius: 150,
    backgroundColor: colors.bgColorblack,
  },
  thirdScoreContainer: {
    height: 140,
    width: 140,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 100,
    backgroundColor: colors.white,
  },
  safeAreaView: {
    flex: 1,
  },
  statusBar: {},
  title: {
    alignSelf: 'center',
    fontWeight: '700',
    color: 'orange'
  },
  yourScore: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'orange'
  },
  instructions: {
    color: colors.grayColor,
    fontWeight: '400',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 32,
  },
  feedbackTextContainer: {
    flexShrink: 1,
    backgroundColor: colors.white,
    borderRadius: 20,
    marginHorizontal: 10,
    marginBottom: 20,
    paddingBottom: 20,
    paddingHorizontal:10
  },
  feedbackTitle: {
    color: colors.grayColor,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  feedbackText: {
    color: colors.grayColor,
    fontWeight: '400',
    textAlign: 'center',
    marginHorizontal: 12,
    letterSpacing:.4
  },
  buttonContainer: {
    marginBottom: 30,
    marginHorizontal: 10,
    marginTop: 20,
  },
  nextButton: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
    margin: 20,
    alignItems: 'center',
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.grayColor,
  },
});
export default styles