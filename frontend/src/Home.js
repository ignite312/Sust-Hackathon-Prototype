import { useState } from "react";

const Home = () => {
<<<<<<< HEAD
    const [requesttext, setrequesttext] = useState("");
    const [gemini_response, setgeminiresp] = useState("Hello Ask Me Something!!");

    const handleChange = (e) => {
        setrequesttext(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.prevetDefault();
        try{
            const url = "http://localhost:8000/text-response";
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    text: requesttext
                })
            };

            fetch(url, requestOptions)
                .then(response => {
                    if(!response.ok){
                        throw new Error('Network response was not ok');
                    }
                    return response.json();
                })
                .then(data => {
                    console.log(data.gemini_response);
                    setgeminiresp(data.gemini_response);
                })
                .catch(error => {
                    console.error('There was a problem fetching data: ', error);
                });
        } catch(err){
            console.error('Error: ', err);
        };
    }

    return (
        <div>
            <div className="input">
                <form onSubmit={handleSubmit}>
                    <input type="text" value={requesttext} onChange={handleChange} placeholder="Ask Gemini.."/>
                </form>
            </div>
            <div className="geminiresponse">
                <div dangerouslySetInnerHTML={{__html: gemini_response}}/>
=======
    return (
        <div>
            <div className="homestudents">
>>>>>>> d55c6bb78f9c8fd0f0f6cbcf40c42d6b87a1399d
            </div>
        </div>
    );
}

export default Home;