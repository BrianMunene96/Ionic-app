import './Welcome.css'


import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from "@ionic/react";
import Button from './Button';

const Welcome: React.FC = () => {
    return (
              
            <IonCard>
              <img alt="Silhouette of mountains" src="../../assets/icon/css.png" />
              <IonCardHeader>
                <IonCardTitle>CSS Module Quiz</IonCardTitle>
                <IonCardSubtitle>Lets Learn CSS</IonCardSubtitle>
              </IonCardHeader>
                
              <IonCardContent>
                In this quiz, you'll test your understanding of CSS. This way you can find out what you still need to learn. Let's get Started!
              </IonCardContent>
              <Button/>
            </IonCard>
          );
  };
  
  export default Welcome;