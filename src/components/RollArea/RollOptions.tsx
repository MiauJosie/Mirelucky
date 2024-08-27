import {useState} from 'react';
import '../../styles/components/RollArea/RollOptions.css';

interface RollOptionsProps {
  isVisible: boolean;
}

function RollOptions({isVisible}: RollOptionsProps) {
  // Initialize bounce state for each image
  const [bounces, setBounces] = useState([false, false, false]);

  const animate = (index: number) => {
    // Set the bounce state for the clicked image to true
    setBounces((prevBounces) => {
      // Create a copy of the previous state
      const newBounces = [...prevBounces];
      newBounces[index] = true;
      return newBounces;
    });

    // Reset bounce state after animation
    setTimeout(() => {
      setBounces((prevBounces) => {
        // Create a copy of the previous state
        const newBounces = [...prevBounces];
        newBounces[index] = false;
        return newBounces;
      });
    }, 100); // Match the duration of your animation
  };

  return (
    <div
      className='RollOptions'
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? '' : 'translateY(2rem)',
      }}
    >
      <div className='OptionWrapper'>
        <h2>0</h2>
        <img
          onClick={() => animate(0)}
          className={bounces[0] ? 'bounce' : ''}
          style={{
            cursor: isVisible ? 'pointer' : 'default',
          }}
          src='../../src/assets/d20.png'
          alt='d20'
        />
      </div>
      <div className='OptionWrapper'>
        <h2>0</h2>
        <img
          onClick={() => animate(1)}
          className={bounces[1] ? 'bounce' : ''}
          style={{
            cursor: isVisible ? 'pointer' : 'default',
          }}
          src='../../src/assets/combatdice.png'
          alt='combat dice'
        />
      </div>
      <div className='OptionWrapper'>
        <h2>0</h2>
        <img
          onClick={() => animate(2)}
          className={bounces[2] ? 'bounce' : ''}
          style={{
            cursor: isVisible ? 'pointer' : 'default',
          }}
          src='../../src/assets/locationdice.png'
          alt='location dice'
        />
      </div>
    </div>
  );
}

export default RollOptions;
