import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [text, setText] = useState(false);
  return (
    <article className='question'>
      <header>
        <h4 className='title'>{title}</h4>
        <button className='btn' onClick={() => setText(!text)}>
          {text ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {text && <p>{info}</p>}
    </article>
  );
};

export default Question;
