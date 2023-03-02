import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import Welcome from '../components/Welcome';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage >
      <IonHeader >
        <IonToolbar>
          <IonTitle >Code Trivia</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Welcome/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
