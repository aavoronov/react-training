import React from 'react';
import './scss/style.scss';

import Message from './components/Message';

function App() {

  let [messageInInput, setMessageInInput] = React.useState('');
  let [messages, setMessages] = React.useState(['']);

  return (
    <section className="content">
      <div className="content__container base-container">
        <div className="content__wrapper">
          <div className="content__window">

            {/* {messages.map((item) => (<Message text={`${item}`} />))} */}

          </div>
          <div className="content__control">
            <textarea onChange={(e) => setMessageInInput(e.target.value)} value={messageInInput} className="content__input" placeholder='test' id="inputField"></textarea>
            <div className="content__button-container">
              <button onClick={() => { console.log(messageInInput) }} className="content__button base-button">ПОКАЗАТЬ ТЕКУЩЕЕ</button>
              <button onClick={() => { setMessages(prev => [...prev + messageInInput]); console.log(messages) }} className="content__button base-button">ОТПРАВИТЬ В МАССИВ</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;