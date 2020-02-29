import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import Text from './Text';
import { ThemeProvider } from 'styled-components';

const theme = createMuiTheme({});

function CombinedProviders({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default CombinedProviders;
