import React, { useState } from "react";

const Home = () => {
    const [requesttext, setRequestText] = useState("");
    const [image, setImage] = useState(null);
    const [geminiResponse, setGeminiResponse] = useState("Hello, Ask Me Something!!");

    const handleChange = (e) => {
        setRequestText(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
        console.log(image);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "http://localhost:8000/text-image-response";
            const formData = new FormData();
            formData.append("prompt", requesttext);
            formData.append("imageparts", image);
            console.log(formData);

            const requestOptions = {
                method: 'POST',
                body: formData
            };

            const response = await fetch(url, requestOptions);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data.gemini_response);
            setGeminiResponse(data.gemini_response);
        } catch (error) {
            console.error('There was a problem fetching data: ', error);
        }
    };

    return (
        <div>
            <div className="input">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={requesttext} onChange={handleChange} placeholder="Ask Gemini.." />
                    <input type="file" onChange={handleImageChange} />
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="geminiresponse">
                <div dangerouslySetInnerHTML={{ __html: geminiResponse }} />
            </div>
        </div>
    );
}

export default Home;
