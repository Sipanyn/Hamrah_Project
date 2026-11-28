# UI component areas

- `layout/` — site-wide header, footer, and page shell.
- `home/` — landing page sections and preview cards.
- `team/` — crew cards and team profile UI.
- `projects/` — mission cards, project list, and project details UI.
- `journal/` — article cards, journal list, and article details UI.
- `shared/` — small UI pieces used by more than one area.

Route-level pages stay in `src/pages/`. Each area should export its components
from its own folder; the person integrating the site owns route changes and
shared files such as `routes.tsx`, `index.css`, and the preferences provider.
