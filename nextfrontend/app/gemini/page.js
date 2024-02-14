'use client';
import { useState } from "react";
import ReactMarkdown from 'react-markdown';
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
      <div className="flex w-full h-screen">
        <div className="grid h-screen w-1/4 card bg-base-300 rounded-box place-items-center text-center">
            <div>
                <div className="">Hello</div>
                <div>This is Gemini console</div>
                <div>Feel free to ask anything</div>
            </div>
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-screen w-1/2 card bg-base-300 rounded-box p-5 overflow-scroll">
            {conv.map(message => (
                <div key={message.id}>
                    <div className="chat chat-end">
                        <div className="chat-bubble chat-bubble-info">{message.userreq}</div>
                    </div>
                    <div className="chat chat-start">
                        <div className="chat-bubble chat-bubble-primary"> <ReactMarkdown>{message.gemresp}</ReactMarkdown> </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="divider divider-horizontal"></div>
        <div className="grid h-screen w-1/3 card bg-base-300 rounded-box place-items-center p-5">
            <div className="flex">
                <input onChange={handlechange} onSubmit={handleclick} placeholder="Ask Gemini..." className="input input-bordered w-full max-w-xs" />
                <button onClick={handleclick} className="btn btn-active">Send</button>
            </div>
        </div>
      </div>
    );
}