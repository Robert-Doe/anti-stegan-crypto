@echo off
Set daysCounter=1
:x
echo %random% %random% >> tester.txt
timeout 1
git add .
git commit --date="%daysCounter% days ago" -m "Files Landing"
git push
set /a daysCounter=(%random%*100/32768)+100

goto x
