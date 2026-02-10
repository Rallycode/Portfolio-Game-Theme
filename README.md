# Portfolio Website - Angular

A modern, interactive portfolio website built with Angular.

## 🎥 Demo Video

Watch the demo video to see the portfolio in action:

**📹 [Click here to watch/download the demo video](https://github.com/Rallycode/Portfolio-Game-Theme/raw/main/demo/20260210-1622-13.5774142.mp4)**

> **To embed video directly in README (playable player):**  
> The video file is in the repository, but GitHub requires uploading via Issues to generate an embeddable link.  
> See [demo/GET_VIDEO_EMBED.md](demo/GET_VIDEO_EMBED.md) for instructions.

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
