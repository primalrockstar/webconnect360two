# WebConnect360

A modern, lightweight web connectivity platform built with vanilla HTML, CSS, and JavaScript. Optimized for performance and ready for deployment on Netlify.

## 🚀 Features

- **Lightning Fast**: Optimized images, minified CSS/JS, and efficient loading
- **Responsive Design**: Works seamlessly on all devices and screen sizes
- **Production Ready**: Configured for Netlify deployment with proper build process
- **Clean Architecture**: Well-organized project structure with separation of concerns
- **Environment Variables**: Proper configuration management for different environments
- **SEO Optimized**: Semantic HTML and meta tags for better search engine visibility

## 📁 Project Structure

```
webconnect360two/
├── src/                    # Source files
│   ├── css/
│   │   └── styles.css     # Main stylesheet
│   ├── js/
│   │   └── main.js        # Main JavaScript file
│   ├── images/            # Image assets (SVG, PNG, JPG)
│   │   ├── hero.svg
│   │   ├── icon-fast.svg
│   │   ├── icon-secure.svg
│   │   └── icon-responsive.svg
│   └── index.html         # Main HTML file
├── scripts/               # Build scripts
│   └── optimize-images.js # Image optimization script
├── dist/                  # Production build (generated)
│   ├── css/
│   ├── js/
│   ├── images/
│   └── index.html
├── .env.example           # Environment variables template
├── .gitignore            # Git ignore rules
├── netlify.toml          # Netlify configuration
├── package.json          # Dependencies and scripts
└── README.md             # This file
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/primalrockstar/webconnect360two.git
   cd webconnect360two
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your actual values
   ```

## 🏃 Running the Project

### Development Mode

Start a local development server:

```bash
npm run dev
```

This will start a server at `http://localhost:8080` and automatically open it in your browser.

### Production Build

Build the project for production:

```bash
npm run build
```

This command will:
1. Clean the `dist` directory
2. Copy HTML files
3. Optimize and compress images
4. Minify CSS files
5. Minify JavaScript files

### Preview Production Build

After building, preview the production version:

```bash
npm run preview
```

## 📦 Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run clean` | Clean dist directory |
| `npm run optimize-images` | Optimize images only |
| `npm run minify-css` | Minify CSS only |
| `npm run minify-js` | Minify JavaScript only |

## 🌐 Deployment

### Netlify Deployment

This project is configured for seamless Netlify deployment.

#### Option 1: Deploy via Netlify UI

1. Push your code to GitHub
2. Log in to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Netlify will automatically detect the `netlify.toml` configuration
6. Click "Deploy site"

#### Option 2: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

### Environment Variables on Netlify

Set your environment variables in Netlify:

1. Go to Site settings > Build & deploy > Environment
2. Add the variables from `.env.example`:
   - `API_URL`
   - `API_KEY`
   - `NODE_ENV` (set to "production")
   - `ENABLE_ANALYTICS`
   - `ENABLE_DEBUG`

### Build Settings

The `netlify.toml` file includes:
- Build command: `npm run build`
- Publish directory: `dist`
- Node version: 18
- Security headers
- Cache control for static assets
- SPA redirect rules

## 🎨 Customization

### Styling

Edit `src/css/styles.css` to customize the appearance. The project uses CSS custom properties (variables) for easy theming:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --text-color: #1f2937;
    /* ... more variables ... */
}
```

### Content

Edit `src/index.html` to modify the content and structure.

### JavaScript

Add custom functionality in `src/js/main.js`.

## 🔧 Configuration Files

### `.env.example`
Template for environment variables. Copy to `.env` and fill in your values.

### `netlify.toml`
Netlify deployment configuration including:
- Build settings
- Environment variables
- Headers for security and performance
- Redirect rules

### `package.json`
NPM configuration with scripts and dependencies.

## 📊 Performance Optimization

The build process includes:

1. **Image Optimization**: Compresses JPG/PNG images using imagemin
2. **CSS Minification**: Reduces CSS file size with clean-css
3. **JS Minification**: Compresses JavaScript with terser
4. **Lazy Loading**: Images use `loading="lazy"` attribute
5. **Cache Headers**: Long-term caching for static assets on Netlify
6. **Security Headers**: Proper security headers configured

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

For issues and questions, please open an issue on GitHub.

---

Built with ❤️ for the modern web