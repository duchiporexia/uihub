/**
 * @format
 */
import 'setimmediate';
import {AppRegistry} from 'react-native';
// import App from './src/App';
import App from './src/paper';
import {name as appName} from './app.json';
// Generate required css
import FontAwesome from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import MaterialCommunityIcons from 'react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf';
const iconFontStyles = `@font-face {
  src: url(${FontAwesome});
  font-family: FontAwesome;
}
@font-face {
  src: url(${MaterialCommunityIcons});
  font-family: MaterialCommunityIcons;
}`;

// Create stylesheet
const style = document.createElement('style');
style.type = 'text/css';
if (style.styleSheet) {
  style.styleSheet.cssText = iconFontStyles;
} else {
  style.appendChild(document.createTextNode(iconFontStyles));
}

// Inject stylesheet
document.head.appendChild(style);
AppRegistry.registerComponent(appName, () => App);

AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('react-app'),
});
