import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setAnswer('');
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/ask`, { question });
            setAnswer(response.data.answer);
        } catch (error) {
            console.error(error);
            setAnswer("Error: Unable to fetch answer.");
        }
        setLoading(false);
    };

    return (
        <div className="App">
            <h1>ThinkAI</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask your question here..."
                    rows="4"
                    cols="50"
                />
                <br />
                <button type="submit">Ask</button>
            </form>
            {loading ? <p>Loading...</p> : <p><strong>Answer:</strong> {answer}</p>}
        </div>
    );
}

export default App;
