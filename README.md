# Portfolio Website - Angular

A modern, interactive portfolio website built with Angular.

## 🎥 Demo Video

Watch the demo video to see the portfolio in action:

<!-- Add your demo video here using one of these methods: -->

### Option 1: Direct Video Link (if uploaded to GitHub)
```markdown
![Demo Video](demo/20260210-1622-13.5774142.mp4)
```

### Option 2: GitHub Releases (Recommended)
1. Go to [Releases](https://github.com/Rallycode/Portfolio-Game-Theme/releases)
2. Create a new release and upload the video
3. Link it here: `[Watch Demo Video](https://github.com/Rallycode/Portfolio-Game-Theme/releases/download/v1.0/20260210-1622-13.5774142.mp4)`

### Option 3: External Hosting (Best for large files)
Upload to YouTube/Vimeo and embed:
```markdown
[![Demo Video](https://img.youtube.com/vi/VIDEO_ID/0.jpg)](https://www.youtube.com/watch?v=VIDEO_ID)
```

### Option 4: Add to Repository
If you want to add the video directly to the repo:
1. Copy `20260210-1622-13.5774142.mp4` to the `demo/` folder
2. Update the link above to: `![Demo Video](demo/20260210-1622-13.5774142.mp4)`
3. Commit and push: `git add demo/20260210-1622-13.5774142.mp4 && git commit -m "Add demo video" && git push`

## Features

- 🎨 Modern, professional UI design
- 📱 Fully responsive
- 🚀 Multi-page navigation with smooth transitions
- 💼 Interactive experience cards
- ⚡ Tech stack showcase with logos
- 🏆 Awards and achievements section
- 📧 Contact information

## Development

### Prerequisites
- Node.js (v18 or higher)
- npm

### Install Dependencies
```bash
npm install
```

### Run Development Server
```bash
npm start
```
The app will open at `http://localhost:4200`

### Build for Production
```bash
npm run build
```
The production build will be in the `dist` folder.

### Preview Production Build
```bash
npm run preview
```

## Deployment

See [DEPLOY.md](./DEPLOY.md) for detailed deployment instructions.

**Quick Deploy (Netlify):**
1. `npm run build`
2. Go to https://app.netlify.com/drop
3. Drag the `dist` folder
4. Done! 🎉

## Project Structure

```
src/
├── app/
│   ├── pages/          # Page components (home, education, experience, etc.)
│   ├── hero/           # Hero section component
│   ├── education/      # Education component
│   ├── experience/     # Experience component
│   ├── skills/         # Skills/tech stack component
│   ├── awards/         # Awards component
│   └── contact/       # Contact component
├── assets/             # Static assets (images, etc.)
├── index.html          # Main HTML file
├── main.ts            # Application entry point
└── styles.css         # Global styles
```

## Technologies Used

- Angular 16
- TypeScript
- CSS3 (Custom Properties, Grid, Flexbox)
- Angular Router
- Angular Animations

## License

Private - Personal Portfolio
