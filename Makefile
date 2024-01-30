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


build:
	cd frontend && npm run build;
	# We need to copy the build files to the backend since it will be serving the GUI.
	mkdir --verbose -p "backend/gui"
	cp -r frontend/build/* backend/gui
