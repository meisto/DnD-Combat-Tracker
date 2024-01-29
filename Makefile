# author: meisto
# date: 2024-01-29 01:27:09
PYTHON_PATH = /usr/bin/python3.9
NPM_PATH = /usr/bin/npm

install:
	cd backend && $(PYTHON_PATH) -m pip install -r requirements.txt
	cd frontend && $(NPM_PATH) install .

format:
	cd backend && black .
	cd frontend && npm run format
