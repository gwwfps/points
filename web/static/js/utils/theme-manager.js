import { Styles } from 'material-ui';

const ThemeManager = new Styles.ThemeManager();
ThemeManager.contentFontFamily = 'inherit';
ThemeManager.setPalette({
  primary1Color: Styles.Colors.indigo500,
  primary2Color: Styles.Colors.indigo700,
  primary3Color: Styles.Colors.indigo100,
  accent1Color: Styles.Colors.deepOrangeA200,
  accent2Color: Styles.Colors.deepOrangeA400,
  accent3Color: Styles.Colors.deepOrangeA100
});

export default ThemeManager;
