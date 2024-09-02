import {useState} from 'react';
import '../../styles/components/RollArea/RollButton.css';
import Img from '../../assets/rollbutton.png';
import RollOptions from './RollOptions';

function RollButton() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleRollOptions = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div
      className='RollButton'
      style={{transform: isVisible ? 'translateY(-2rem)' : ''}}
    >
      <RollOptions isVisible={isVisible} />
      <img src={Img} alt='RollButton' onClick={toggleRollOptions} />
    </div>
  );
}

export default RollButton;
