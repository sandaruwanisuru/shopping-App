import './Contacts.scss';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Contacts = () => {
  return (
    <div className="Contacts">
      <span>Be IN touch us</span>
      <div className="input">
        <input type="text" placeholder="Enter your E mail.." />
        <button>JOIN US</button>
      </div>
      <div className="links">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <GoogleIcon />
        <PinterestIcon />
      </div>
    </div>
  );
};

export default Contacts;
