from fastapi import FastAPI
import uvicorn
naruto = FastAPI()

@naruto.get('/')
def main():
     return {'message': 'Welcome!'}

@naruto.get( '/{hinata}' )
def hello_naruto(hinata : str):
     return {'message': f'Welcome!, {hinata}'}
