import os
from fastapi import FastAPI
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import openai
from dotenv import load_dotenv

load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

app = FastAPI()

class Question(BaseModel):
    question: str

@app.post("/ask")
async def ask_question(question: Question):
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[{"role": "user", "content": question.question}]
    )
    answer = response['choices'][0]['message']['content'].strip()  # Corrected line

    return JSONResponse(content={"answer": answer})

# print(f"Loaded API key: {openai.api_key}")

