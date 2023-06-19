import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestionnaires } from '../../actions/questionnaireActions';

class QuestionnaireList extends Component {
    componentDidMount() {
        this.props.fetchQuestionnaires();
    }

    render() {
        const { questionnaires } = this.props;
    
        if(!questionnaires) {
            return <div>Loading...</div>;
        }
    
        return (
            <div>
                <h1>Questionnaires</h1>
                {questionnaires.map(questionnaire => (
                    <div key={questionnaire._id}>
                        <h3>{questionnaire.title}</h3>
                        <p>{questionnaire.description}</p>
                    </div>
                ))}
            </div>
        );
    }
    
}

const mapStateToProps = state => ({
    questionnaires: state.questionnaires.items
});

export default connect(mapStateToProps, { fetchQuestionnaires })(QuestionnaireList);
