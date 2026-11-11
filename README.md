# NestEgg

NestEgg is a simple budget tracker website for college students. You can add your income and expenses, see your current balance, see how much you spend in each category, and set one savings goal to work toward. It is built with plain HTML, CSS, and JavaScript, and your data is saved in your browser using localStorage, so there is nothing to install.

**Live site:** https://g-nbo.github.io/nestegg/

## Team

| Name    | What they own |
|---------|---------------|
| Keidy   | `index.html` and `style.css` (page layout and styling) |
| Elias   | `Transaction` and `TransactionManager` in `app.js` |
| Tai     | `SavingsGoal` in `app.js` |
| Ethan   | `StorageManager` in `app.js` (saving and loading data) |
| Gabriel | `UIController` in `app.js` (forms, buttons, and updating the page) |

## How to run it

1. Download the project (green **Code** button, then **Download ZIP**) or clone it:
   ```
   git clone https://github.com/g-nbo/nestegg.git
   ```
2. Open `index.html` in your web browser.

That's it. No installs needed.

## How we work

Follow these steps every time you work on something:

1. Get the latest code:
   ```
   git pull origin main
   ```
2. Make a new branch for your work:
   ```
   git checkout -b your-name/feature
   ```
   Example: `git checkout -b john/form-layout`
3. Make your changes, then save them:
   ```
   git add .
   git commit -m "short message"
   ```
4. Push your branch to GitHub:
   ```
   git push origin your-branch
   ```
5. Open a Pull Request on GitHub. One teammate reviews and approves it before it gets merged.

## Tips to avoid merge conflicts

- Only edit your own section of `app.js`.
- Always pull `main` before you start working.
- Keep pull requests small.
