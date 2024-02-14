'use client';import Image from "next/image";
import { useEffect, useState } from "react";
export default function Home() {
  const [inputtext, setinputtext] = useState('');
  const [gemresp, setresp] = useState('');
  const handlechange = (e) => {
    setinputtext(e.target.value);
    // console.log(inputtext);
  }

  const handleclick = async () => {
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
    setresp(data.gemini_response);
  }


  return (
    <div>
      <div>
              <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="chat-header">
            Obi-Wan Kenobi
            <time className="text-xs opacity-50">12:45</time>
          </div>
          <div className="chat-bubble">{gemresp}</div>
          <div className="chat-footer opacity-50">
            Delivered
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="chat-header">
            Anakin
            <time className="text-xs opacity-50">12:46</time>
          </div>
          <div className="chat-bubble">{inputtext}</div>
          <div className="chat-footer opacity-50">
            Seen at 12:46
          </div>
        </div>
      </div>
      <div>
        <input onChange={handlechange} className="input input-bordered w-full max-w-xs" placeholder="Ask Gemini..."/>
        <button className="btn btn-neutral" onClick={handleclick}>Ask Now</button>
      </div>
    </div>
  );
}
