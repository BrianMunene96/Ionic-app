import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton } from "@ionic/react";


const FinalResults: React.FC = () => {
    return (
              
        <IonCard>
        <IonCardHeader>
          <IonCardTitle>Final Results</IonCardTitle>
          <IonCardSubtitle>score out of correct - (20%)</IonCardSubtitle>
        </IonCardHeader>
  
        <IonButton>Restart Quiz</IonButton>
      </IonCard>
          );
  };
  
  export default FinalResults;