from fastapi import APIRouter

from app.api.routes import private, utils
from app.core.config import settings
from app.modules.identity_access.api.router import router as identity_access_router
from app.modules.issue_tracking.api.router import router as issue_tracking_router
from app.modules.project_management.api.router import (
    router as project_management_router,
)


def build_api_router() -> APIRouter:
    router = APIRouter()
    router.include_router(identity_access_router)
    router.include_router(issue_tracking_router)
    router.include_router(project_management_router)
    router.include_router(utils.router)

    if settings.ENVIRONMENT == "local":
        router.include_router(private.router)

    return router
