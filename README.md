# Around Whitefield

A comprehensive web application to explore places, restaurants, shopping centers, and recreational spots in Whitefield, Bangalore.

## Features

- Responsive web design using Angular and SCSS
- Modular architecture with lazy-loaded feature modules
- Interactive map and place filtering
- Contact form with validation
- Information about Whitefield and its attractions

## Tech Stack

- Angular 17
- TypeScript
- SCSS for styling
- Angular Router for navigation
- Reactive Forms

## Design

- Modern color scheme using vibrant blue-purple (#5D5FEF)
- Responsive and clean UI
- Beautiful Whitefield skyline as hero background image
- Card-based layout for places and features

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm start
   ```
4. Navigate to `http://localhost:4200/` in your browser

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
around-whitefield/
├── src/
│   ├── app/
│   │   ├── home/
│   │   ├── about/
│   │   ├── places/
│   │   ├── contact/
│   │   ├── app.component.*
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── assets/
│   ├── environments/
│   ├── index.html
│   ├── main.ts
│   └── styles.scss
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## License

This project is licensed under the MIT License

![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/Framsikt-AS/around-whitefield?utm_source=oss&utm_medium=github&utm_campaign=Framsikt-AS%2Faround-whitefield&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)