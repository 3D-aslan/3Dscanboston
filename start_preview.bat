@echo off
setlocal

echo.
echo ==========================================
echo    3D Scan Boston Studio - Local Preview
echo ==========================================
echo.
echo [1/2] Launching your browser...
start "" "http://localhost:8000/index-v2.html"

echo [2/2] Starting local 3D server...
echo (Keep this window open while previewing)
echo.

:: Try 'python' first
where python >nul 2>nul
if %errorlevel% equ 0 (
    python -m http.server 8000
    goto end
)

:: Try 'py' launcher
where py >nul 2>nul
if %errorlevel% equ 0 (
    py -m http.server 8000
    goto end
)

echo ERROR: Python not found! 
echo Please ensure Python is installed and added to your PATH.
echo.
pause

:end
endlocal
