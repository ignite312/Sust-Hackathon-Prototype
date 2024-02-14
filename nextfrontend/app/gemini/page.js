'use client';
import { useState } from "react";
export default function gemini() {
    const [inputtext, setinputtext] = useState('');
    const [conv, setconv] = useState([]);
    let id = 0;
    const handlechange = (e) => {
      setinputtext(e.target.value);
      // console.log(inputtext);
    }
  
    const handleclick = async () => {
      if(inputtext === ''){
        return;
      }
      const request = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          text: inputtext
        })
      };
      const res = await fetch('http://localhost:8000/text-response', request);
      if (!res.ok) {
        console.error('Network response was not ok');
      }
      console.log(typeof(res), res);
      const data = await res.json();
      console.log(data.gemini_response);
      const newConv = [...conv, {
        id: id,
        userreq: inputtext,
        gemresp: data.gemini_response
      }];
      setconv(newConv);
      id++;
    }
  
  
    return (
      <div>
        <div>
            <input onChange={handlechange} onSubmit={handleclick} placeholder="Ask Gemini..." className="input input-bordered w-full max-w-xs" />
            <button onClick={handleclick} className="btn btn-active">Send</button>
        </div>
        <div>
            {conv.map(message => (
                <div key={message.id}>
                    <div className="chat chat-end">
                        <div className="chat-bubble chat-bubble-info">{message.userreq}</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-primary">{message.gemresp}</div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    );
}