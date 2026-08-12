@echo off
start /min python -m http.server 8080 --directory "C:\Users\C5407836\edukid-my"
timeout /t 2 /nobreak >nul
start http://localhost:8080
