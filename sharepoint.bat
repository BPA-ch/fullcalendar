@echo off

echo "Suppress old files"
del /F /S /Q "D:\BPA\xRM2013\Dev\BPACRM365Web\_layouts\BPA\js\calendar\fullcalendar.js"
del /F /S /Q "D:\BPA\xRM2013\Dev\BPACRM365Web\_layouts\BPA\js\calendar\i18n\"
del /F /S /Q "D:\BPA\xRM2013\Dev\BPACRM365Web\_layouts\BPA\css\calendar\fullcalendar.css"
del /F /S /Q "D:\BPA\xRM2013\Dev\BPACRM365Web\_layouts\BPA\css\calendar\fullcalendar.print.css"
del /F /S /Q "C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\BPA\js\calendar\fullcalendar.js"
del /F /S /Q "C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\BPA\js\calendar\i18n\"
del /F /S /Q "C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\BPA\css\calendar\fullcalendar.css"
del /F /S /Q "C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\BPA\css\calendar\fullcalendar.print.css"


echo "Copy fullcalendar file into Visual Studio directories"

copy /Y "build\archive\fullcalendar\fullcalendar.js" "D:\BPA\xRM2013\Dev\BPACRM365Web\_layouts\BPA\js\calendar\"
echo "Copy of fullacalendar.js"

copy /Y "build\archive\fullcalendar\i18n\*.js" "D:\BPA\xRM2013\Dev\BPACRM365Web\_layouts\BPA\js\calendar\i18n\"
echo "Copy of i18n\*.js"

copy /Y "build\archive\fullcalendar\*.css" "D:\BPA\xRM2013\Dev\BPACRM365Web\_layouts\BPA\css\calendar\"
echo "Copy of fullcalendar.css"

echo "Copy fullcalendar file into SharePoint directories"

copy /Y "build\archive\fullcalendar\fullcalendar.js" "C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\BPA\js\calendar\"
echo "Copy of fullacalendar.js"

copy /Y "build\archive\fullcalendar\i18n\*.js" "C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\BPA\js\calendar\i18n\"
echo "Copy of i18n\*.js"

copy /Y "build\archive\fullcalendar\*.css" "C:\Program Files\Common Files\Microsoft Shared\Web Server Extensions\15\TEMPLATE\LAYOUTS\BPA\css\calendar\"
echo "Copy of fullcalendar.css"


echo "terminated"