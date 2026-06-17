from fastapi import FastAPI, UploadFile, File
from ultralytics import YOLO
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Caminho do modelo treinado
model = YOLO("../models/best.pt")

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.get("/")
def home():
    return {"mensagem": "API de Classificação de Bananas"}

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    
    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    results = model.predict(file_path)

    probs = results[0].probs

    classe = results[0].names[probs.top1]
    confianca = float(probs.top1conf)

    return {
        "classe": classe,
        "confianca": round(confianca * 100, 2)
    }