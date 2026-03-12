from fastapi import APIRouter

from app.api.routes import items

router = APIRouter(tags=["issue-tracking"])
router.include_router(items.router)
