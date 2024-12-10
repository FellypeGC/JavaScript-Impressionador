import { useState, memo } from 'react';

export const DualColorTitle = ({ title }) => {
  const [definedColor, setDefinedColor] = useState(true);
  return (
    <div>
      <h1 className={definedColor ? 'first-color' : 'second-color'}>{title}</h1>
      <div onClick={() => setDefinedColor(!definedColor)}>
        <input
          type='checkbox'
          name='color-switcher'
          checked={definedColor} 
        />
        <label htmlFor='color-switcher'>Trocar Cor</label>
      </div>
    </div>
  );
};

export const MemoizedDualColorTitle = memo(DualColorTitle);

// MEMOIZATION !== MEMORIZATION