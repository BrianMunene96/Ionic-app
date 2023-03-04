import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonPage } from '@ionic/react';
import { useState } from 'react';
import './Dashboard.css'
import { questions } from '../data/questions';

const Dashboard: React.FC = () => {

  // const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false);

  const optionClicked = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setShowResults(false);
    setScore(0);
    setCurrentQuestion(0);
  }


        if(showResults){  
          return (
            <IonCard>
            <IonCardHeader>
              <IonCardTitle>Final Results</IonCardTitle>
              <IonCardSubtitle>{score} out of {questions.length} correct - ({(score / questions.length) * 100}%)</IonCardSubtitle>
            </IonCardHeader>
      
            <IonButton onClick={() => restartGame()}>Restart Quiz</IonButton>
          </IonCard>
          )
            
        } else {
          return (
            <IonPage>
            <IonCard>
        <div className="question-score">
          <h2 className='question-number'>
          Question {currentQuestion + 1} out of {questions.length}
          </h2>
          <h2 className="current-score">
            Current Score: {score}/{questions.length}
          </h2>
        </div>
      <h3 className="question-text">{questions[currentQuestion].text}</h3>
        <ul>
          {
            questions[currentQuestion].options.map((option)=>{
              return (
                <li onClick={() => optionClicked(option.isCorrect)} key={option.id}>{option.text}</li>
              )
            })
          }
            
          </ul>
          </IonCard>
          </IonPage>
          )
          
        }

    } 
  
  export default Dashboard;