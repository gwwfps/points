import Colors from 'material-ui/lib/styles/colors';
import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
import Spacing from 'material-ui/lib/styles/spacing';

const Theme = {
  spacing: Spacing,
  fontFamily: 'inherit',
  palette: {
    primary1Color: Colors.indigo500,
    primary2Color: Colors.indigo700,
    primary3Color: Colors.indigo100,
    accent1Color: Colors.deepOrangeA200,
    accent2Color: Colors.deepOrangeA400,
    accent3Color: Colors.deepOrangeA100,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: ColorManipulator.fade(Colors.darkBlack, 0.3)
  }
};

export default Theme;
