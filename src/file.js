import React, { useState } from 'react';

function InputBox() {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <button class="btn btn-danger" onClick={handleDecrement}>-</button>
      <input type="text" value={value} readOnly />
      <button class="btn btn-success" onClick={handleIncrement}>+</button>
    </div>
  );
}

export default InputBox;





// setTimeout(()=>{
//     console.log('execute after 4 seconds')
// },4000)