from fastapi import APIRouter

from app.bootstrap.router_registry import build_api_router

api_router: APIRouter = build_api_router()
