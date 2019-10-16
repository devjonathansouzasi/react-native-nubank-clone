import React from 'react';
import {StatusBar, YellowBox} from 'react-native';

import '~/config/ReactotronConfig';

import Routes from '~/routes';

YellowBox.ignoreWarnings(['Warning:']);

const App = () => (
  <>
    <Routes />
    <StatusBar backgroundColor="#873490" barStyle="light-content" />
  </>
);

export default App;
