import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestionnaires } from '../../actions/questionnaireActions';

class QuestionnaireList extends Component {

  componentDidMount() {
    this.props.fetchQuestionnaires();
  }

  render() {
    const { error, loading, questionnaires, questions } = this.props;

    if (error) {
      return <div>Error! {error.message}</div>;
    }

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h1>Questionnaires</h1>
        {questionnaires.map(q => <p key={q._id}>{q.name}</p>)}

        <h2>Questions</h2>
        {questions.map(q => <p key={q._id}>{q.questionText}</p>)}  // Display questions
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questionnaires: state.questionnaires.questionnaires,
  questions: state.questionnaires.questions,  // Connect questions state to props
  loading: state.questionnaires.loading,
  error: state.questionnaires.error
});

export default connect(mapStateToProps, { fetchQuestionnaires })(QuestionnaireList);
