import styles from './SocialShare.module.scss';
import instagram from './img/insta.png'
import whatsApp from './img/whatsapp.png'
import fb from './img/facebook.png'
import phone from './img/call.png'
import mail from './img/mail.png'
import logo from '../../common/Header/img/logo.svg';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function SocialShare() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = '#adaabd'
  },[])

  const handleClick = () => {
    navigate("/");
  }
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img src="https://scontent.fevn1-4.fna.fbcdn.net/v/t39.30808-6/326383117_1605382496567514_7638353600334564329_n.jpg?stp=dst-jpg_s960x960&_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=zlhmkm_iSBYQ7kNvgHs3MMT&_nc_zt=23&_nc_ht=scontent.fevn1-4.fna&_nc_gid=AMo45PdifRmM-O3eqiZtx_p&oh=00_AYC9GNmXSKzm3HAQbFpGtVdUvQID8ToCMwzllB38j9aTSA&oe=67397438" />
        <div className={styles.logo} onClick={handleClick}>
          
          <img style={{borderRadius: '50%'}} src="https://scontent.fevn1-1.fna.fbcdn.net/v/t39.30808-6/307976121_487793850028538_3268984343039477990_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=moqBR2rTepgQ7kNvgFNUfCz&_nc_zt=23&_nc_ht=scontent.fevn1-1.fna&_nc_gid=ArUfKvg3hg22hauSqjIEKQV&oh=00_AYBDvhM8HcRO8vjgGfThDqbFM2MFmevjzBze_w8mCc2LMg&oe=673985DC"/>
        </div>
      </div>
      <div className={styles.socialWrapper}>
        <div>
          <a href="https://www.instagram.com/jraghatspanyan_winery/?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />Instagram
          </a>
        </div>
        <div>
          <a href="https://wa.me/37498506565" target="_blank" rel="noopener noreferrer">
            <img src={whatsApp} alt="WhatsApp" />WhatsApp
          </a>
        </div>
        <div>
          <a href="https://www.facebook.com/JraghatspanyanWinery?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <img src={fb} alt="Facebook" />Facebook
          </a>
        </div>
        <div>
          <a href="tel:+37498506565">
            <img src={phone} alt="Phone" />+374 98 506565
          </a>
        </div>
        <div>
          <a href="mailto:jraghatspanyanwinery@gmail.com">
            <img src={mail} alt="Email" />jraghatspanyanwinery@gmail.com
          </a>
        </div>
      </div>

    </div>
  );
}

export default SocialShare;
