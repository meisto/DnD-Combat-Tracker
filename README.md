# DnD Combat Tracker
**⚠️ Work in progress ⚠️**
This file and the project in general is currently not complete and can't be easily used.

## What is it?
As the name suggest, this is a [DnD 5. Edition](https://www.dndbeyond.com/) combat tracker. It is meant to make the handling of health, conditions and other stuff easier. It also includes functionality to automatically roll initiative for enemies.  
This project consists off a Python-backend that serves its data via   a REST-API (with [FastAPI](https://fastapi.tiangolo.com/)) and a frontend that is served as a static website (written with [SvelteKit](https://kit.svelte.dev/).

## Why does it exist?
This project exists because I have horrible handwriting and can't read my notes. To combat this I migrated my notes to a digital format and use that instead. This doesn't lend itself well to track dynamic combat scenarios thoug (imo). That is, in short, why this project exists. To integrate better in my workflow. (Also I wanted to try out some new libraries 😁.)

## Goals
** WIP **


## TODO:
### General
- [ ] Implement named enemies
- [ ] Implement neutral characters
- [ ] Implement player-allied characters

### Backend
- [ ] Add comments to backend api documentation.

### Frontend
**Combatant Selection Menu:**
- [ ] Error handling in combatant selection menu.
- [ ] Check for correctness on submit.

- [ ] Button functionality to load presets from file.
- [ ] Checkboxes should be colored.
- [ ] Localize to German.
- [ ] Selection of enemy could be streamlined.
