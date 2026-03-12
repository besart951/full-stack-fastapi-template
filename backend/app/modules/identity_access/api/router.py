from fastapi import APIRouter

from app.api.routes import login, users

router = APIRouter(tags=["identity-access"])
router.include_router(login.router)
router.include_router(users.router)
