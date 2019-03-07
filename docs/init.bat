@echo off
title Init Venv
echo * Step 1 - Remove current venv
rmdir /s /q "venv"

echo * Step 2 - Create new venv
python -m venv venv

echo * Step 3 - Activate venv
call "venv/scripts/activate.bat"

echo * Step 4 - Upgrade pip
python -m pip install --upgrade pip

echo * Step 5 - Install requirements
pip install -r requirements.txt

echo *
echo *
echo * Finish!
echo *
echo *
@pause