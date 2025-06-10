# Virtual Desktop

A virtual desktop environment with a Windows 95-like interface, featuring:
- Desktop icons and windows
- Taskbar with start menu
- Theme customization
- Internet Explorer browser
- Spotify player
- Vinyl record player
- Confetti celebration button
- Allows you to play Micheal Jackson and be one !!!

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open http://localhost:3000 in your browser

## Deployment

### Deploying to Heroku

1. Create a Heroku account if you don't have one
2. Install the Heroku CLI
3. Login to Heroku:
```bash
heroku login
```

4. Create a new Heroku app:
```bash
heroku create your-app-name
```

5. Deploy to Heroku:
```bash
git push heroku main
```

### Deploying to Vercel

1. Create a Vercel account if you don't have one
2. Install the Vercel CLI:
```bash
npm i -g vercel
```

3. Deploy to Vercel:
```bash
vercel
```

### Deploying to Railway

1. Create a Railway account if you don't have one
2. Install the Railway CLI:
```bash
npm i -g @railway/cli
```

3. Login to Railway:
```bash
railway login
```

4. Deploy to Railway:
```bash
railway up
```

## Environment Variables

- `PORT`: The port number the server will listen on (default: 3000)

## Features

- Windows 95-style interface
- Draggable and resizable windows
- Theme customization
- Internet Explorer browser simulation
- Spotify integration
- Vinyl record player with YouTube integration
- Confetti celebration button
- Responsive design

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Express.js
- YouTube IFrame API
- Canvas Confetti 