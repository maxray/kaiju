# Monster Maker

A small Vue 3 + Vite project to build, save, and display custom monsters. Fully testable with Vitest.

## Getting Started

Follow these steps to run the Monster Maker locally, run tests, and deploy:

### 1. Clone the repository
```bash
git clone <your-repo-url>
cd monster-maker

npm install

npm run dev:all

---

## Project Setup

- Vue 3 project using **Vite** for development and build.
- **Vitest** set up for unit/component testing.
- Project structure:
  - public/
    - img/ ← Monster part images
  - src/
    - components/
      - MonsterPartPicker.vue
      - MonsterCard.vue
      - MonsterGallery.vue
    - data/
      - monsterParts.json
    - utils/
      - saveMonster.js
      - loadMonsters.js
    - App.vue


- `.gitignore` in place to exclude `node_modules`, `dist`, `.env`, editor files, etc.
- Ready to deploy to **Netlify** (build: `npm run build`, publish: `dist/`).

---

## Core Functionality

- **MonsterPartPicker**: Select top, middle, and bottom parts of a monster.
  - Uses `v-model` + emits `update:modelValue`.
- **MonsterCard**: Displays selected monster parts and optional name.
- **MonsterGallery**: Shows saved monsters as cards with top/middle/bottom images + name.
- **LocalStorage Persistence**:
  - `saveMonster.js` appends new monsters to `monsters` key.
  - `loadMonsters.js` reads monsters from `monsters` key.
  - Delete button removes monsters from localStorage.
- **Monster Naming**: Optional name input with `v-model`.

---

## Tests

- Vitest covers:
  - `saveMonster` appending monsters.
  - Component events (`v-model` emits, part selection).
- Tests run concurrently with dev using `concurrently`.

---

## UI / Layout

- Three part pickers (top, middle, bottom) as **selectable buttons**.
- Blank `MonsterCard` displays while parts are being selected.
- Gallery displays saved monsters as cards with delete functionality.
- Scoped styles per component for clean separation.

---

## Next Steps / Ideas

- Add **game mechanics** (stats, colors, points).  
- Enhance **gallery** with hover effects or larger previews.  
- Improve **monster naming** with validation or default unique names.  
- Add **export/share** functionality (JSON download or image).  
- Possibly implement **drag-and-drop** for parts.

---

## Deployment

- Connect to **Netlify** or similar.
- Build command: `npm run build`.
- Publish directory: `dist/`.
- Ensure images in `public/img/` to match JSON paths.