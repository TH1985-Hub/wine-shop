import styles from './Home.module.scss';
import img from './video/wine.jpg'
import video from './video/homeVideo.mp4'

function Home() {
  return (
    <div className={styles.container}>
      <video src={video} className={styles.img} autoPlay loop playsInline muted />
    </div>
  );
}

export default Home;
