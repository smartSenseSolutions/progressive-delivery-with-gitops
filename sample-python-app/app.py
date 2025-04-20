from fastapi import FastAPI

app = FastAPI(title="Hello World App - v1")

@app.get("/")
def read_root():
    return {"message": "Hello World from version 1"}
