<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ThinkAI - AI-Powered Q&A System</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 20px;
        }

        h1, h2 {
            color: #333;
        }

        .section {
            margin-bottom: 20px;
        }

        .emoji {
            font-size: 18px;
        }

        .image-container {
            display: flex;
            justify-content: space-around;
            margin-top: 20px;
        }

        .image-container img {
            max-width: 400px;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .code {
            background-color: #f4f4f4;
            padding: 10px;
            border-radius: 8px;
            font-family: 'Courier New', Courier, monospace;
            display: block;
            margin: 10px 0;
        }

        a {
            color: #4CAF50;
            text-decoration: none;
            font-weight: bold;
            background-color: #e7f3e7;
            padding: 10px 15px;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        a:hover {
            background-color: #45a049;
            color: white;
        }

        .badge {
            display: inline-block;
            background-color: #4CAF50;
            color: white;
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 16px;
        }

        .badge:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>

    <h1>🚀 ThinkAI: Your AI-Powered Question-Answering System</h1>

    <div class="section">
        <h2>🔧 Project Overview</h2>
        <p>ThinkAI is an intelligent question-answering system that leverages OpenAI's GPT-3.5 model to provide answers to user queries in real time. Users can interact with the app by typing their questions, and the AI provides accurate and helpful answers instantly.</p>
        <p>Built using <strong>React.js</strong> for the frontend and <strong>FastAPI</strong> with <strong>OpenAI API</strong> for the backend, this project demonstrates how to integrate modern web technologies to create an AI-powered web application.</p>
    </div>

    <div class="section">
        <h2>💻 Frontend & Backend</h2>
        <p>Explore the frontend and backend components of the ThinkAI project:</p>

        <div class="image-container">
            <div>
                <h3>Frontend UI</h3>
                <img src="frontend-image-path.jpg" alt="Frontend UI">
            </div>
            <div>
                <h3>Backend Architecture</h3>
                <img src="backend-image-path.jpg" alt="Backend Architecture">
            </div>
        </div>
    </div>

    <div class="section">
        <h2>⚙️ Technologies Used</h2>
        <ul>
            <li><span class="emoji">🌐</span> <strong>Frontend</strong>: React.js, CSS</li>
            <li><span class="emoji">🖥️</span> <strong>Backend</strong>: FastAPI, OpenAI GPT-3.5</li>
            <li><span class="emoji">🔑</span> <strong>API Integration</strong>: OpenAI API</li>
            <li><span class="emoji">💾</span> <strong>Environment Variables</strong>: .env (for storing OpenAI API key)</li>
        </ul>
    </div>

    <div class="section">
        <h2>📂 Installation & Setup</h2>
        <p>To set up the project locally, follow these steps:</p>
        <ol>
            <li>Clone the repository:</li>
            <code class="code">git clone https://github.com/yourusername/thinkai.git</code>

            <li>Navigate to the frontend directory and install dependencies:</li>
            <code class="code">cd frontend && npm install</code>

            <li>Navigate to the backend directory and install dependencies:</li>
            <code class="code">cd backend && pip install -r requirements.txt</code>

            <li>Create a <strong>.env</strong> file in the backend directory with your OpenAI API key:</li>
            <code class="code">OPENAI_API_KEY=your-api-key-here</code>

            <li>Run the frontend and backend servers:</li>
            <code class="code">npm start (for frontend) / uvicorn main:app --reload (for backend)</code>
        </ol>
    </div>

    <div class="section">
        <h2>💡 How It Works</h2>
        <p>When the user submits a question through the app, the frontend sends the question to the FastAPI backend. The backend then queries the OpenAI API for an answer and returns the result to the frontend, where it is displayed to the user.</p>
    </div>

    <div class="section">
        <h2>📈 Demo</h2>
        <p>Check out the live demo of ThinkAI:</p>
        <a href="https://your-live-demo-link.com" class="badge">Try it Now!</a>
    </div>

    <div class="section">
        <h2>📄 License</h2>
        <p>This project is licensed under the <strong>MIT License</strong>.</p>
    </div>

</body>
</html>
