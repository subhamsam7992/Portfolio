# Ads Sathi Portfolio

A responsive, dark-theme portfolio website for Ads Sathi, built with React, Vite, JavaScript and CSS. It introduces Meta Ads services for businesses and uses the supplied Ads Sathi logo and Shubham Kumar profile photo.

## Run the website on your computer

1. Install [Node.js LTS](https://nodejs.org/) if it is not already installed.
2. Open this project folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run `npm install` once to install the project dependencies.
5. Run `npm run dev` and open the local address Vite prints in the terminal.

Stop the local server with **Ctrl+C**.

If PowerShell says that running `npm.ps1` is disabled, use `npm.cmd install` and
`npm.cmd run dev` in that terminal, or run the standard `npm` commands in
Command Prompt.

## Edit the website

- Update the website wording and service descriptions in `src/App.jsx`.
- Change colors, spacing and responsive layout in `src/styles.css`.
- Replace the profile picture or logo by replacing the matching image in `public/` while keeping its filename:
  - `public/shubham-kumar-profile.png`
  - `public/ad-saathi-logo.jpeg`
- Update the page title and search description in `index.html`.

## Check the production build

Run `npm run build`. Vite creates the production-ready website in `dist/`. Preview it locally with `npm run preview`.

## Publish with GitHub and Vercel

1. Create a new, empty repository on GitHub.
2. In the VS Code terminal, initialize Git if needed with `git init`, then add and commit the project files.
3. Add the new GitHub repository as the `origin` remote, then push your branch to GitHub. Do not commit `.env` files or credentials.
4. In Vercel, choose **Add New → Project**, import the GitHub repository and keep the detected Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy from Vercel when you are ready. This project does not deploy or push code automatically.

## Contact and external services

The email buttons open the visitor’s default email app using `mailto:adssathi1@gmail.com`; they do not submit to a website form or require a backend. The Ads Sathi website link opens `https://adssathi.com/`. Google Fonts is loaded from Google when the visitor has an internet connection; system sans-serif fallbacks are provided.
