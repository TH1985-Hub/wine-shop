import styles from './Home.module.scss';
import img from './video/wine.jpg'
function Home() {
  return (
    <div className={styles.container}>
      {/*<video src="/public/assets/videos/video.mp4" autoPlay loop playsInline muted />*/}
      <img className={styles.img} src={img} alt="background" />
    </div>
  );
}

export default Home;
