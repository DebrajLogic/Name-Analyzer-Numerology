import uvicorn
from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
from name_analysis import get_name_total
from name_meanings import meanings
from numerology_numbers import get_root_number, get_destiny_number
from number_meanings import number_meanings

app = FastAPI()

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)


@app.get('/')
def home():
    return {'message': 'Welcome to Name Analyzer'}


@app.get('/analyze')
def analyze(name: str = Query(None)):
    print(name)
    total, flag = get_name_total(name)
    return {'data': {'total': total, 'flag': 'No' if flag else 'Yes', 'meaning': meanings[total]['meaning'] if total in meanings else 'Coming Soon...'}}


@app.get('/life-purpose')
def numbers(date_of_birth: str = Query(None)):
    root = get_root_number(date_of_birth)
    destiny = get_destiny_number(date_of_birth)
    return {'data': {'root_number': root, 'destiny_number': destiny, 'interpretation_root': number_meanings[root], 'interpretation_destiny': number_meanings[destiny]}}


uvicorn.run(app)
