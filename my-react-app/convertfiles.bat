@echo off
setlocal enabledelayedexpansion

set "input_dir=C:\Users\tbinn\Desktop\shoshanath\my-react-app\public"

rem List of file extensions to convert
set "extensions=jpg png bmp gif tiff"

rem Function to convert files in the given directory and subdirectories
for /r "%input_dir%" %%i in (*.*) do (
    for %%e in (%extensions%) do (
        if /I "%%~xi"==".%%e" (
            echo Converting %%i
            cwebp "%%i" -o "%%~dpni.webp"
            if !errorlevel! equ 0 (
                del "%%i"
                echo Deleted %%i
            ) else (
                echo Failed to convert %%i
            )
        )
    )
)

echo All files converted to WebP format and originals deleted.
pause
