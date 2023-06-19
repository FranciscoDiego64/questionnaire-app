// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import QuestionnaireList from './components/Questionnaire/QuestionnaireList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <QuestionnaireList />
      </div>
    </Provider>
  );
}

export default App;
