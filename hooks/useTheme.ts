import {useSelector} from 'react-redux';
import {darkTheme, lightTheme} from '../constants';
import {slelectTheme} from '../features/theme/themeSlice';

export const useTheme = () => {
  const currentTheme = useSelector(slelectTheme);

  let theme = currentTheme == 'light' ? lightTheme : darkTheme;

  return theme;
};
