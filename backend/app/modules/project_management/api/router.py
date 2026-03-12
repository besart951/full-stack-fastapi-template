from fastapi import APIRouter

router = APIRouter(prefix="/projects", tags=["projects"])


@router.get("/health")
def project_management_health() -> dict[str, str]:
    return {"status": "ok", "module": "project_management"}
