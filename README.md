[![Playwright Tests](https://github.com/JOSEW383/random-cats/actions/workflows/playwright.yml/badge.svg)](https://github.com/JOSEW383/random-cats/actions/workflows/playwright.yml)
# Random cats facts

Web application developed in react whose objective is to demonstrate how to handle an API with said framework.

![](https://github.com/JOSEW383/random-cats/blob/master/public/random_cats_demo.gif)


## Features

- Retrieves a random cat fact from the first API.
- Retrieve the first word of the fact.
- Show a picture of a cat with the first word.

## Installation & Run

To run this project, you need to have Node.js and npm installed on your computer. Follow these steps:

1. Clone the repository onto your local machine.
2. Open the terminal and navigate to the root folder of the project.
3. Run the following command to install the project's dependencies: `npm run build`
4. Run the following command to start the development server: `npm run dev`
5. Open your web browser and navigate to the following URL: `http://localhost:3000`

## Testing

This app was tested using [Playwright](https://playwright.dev/), to run test set follow these steps:

1. Run test: `npx playwright test`
2. View results: ` npx playwright show-report`

## APIs used

- [Random facts](https://catfact.ninja)
- [Random images](https://cataas.com)

## Technologies used

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
  - [UseState](https://reactjs.org/docs/hooks-state.html)
  - [UseEffect](https://reactjs.org/docs/hooks-effect.html)
  - [CustomHooks](https://reactjs.org/docs/hooks-custom.html)
- [PlayWright](https://playwright.dev/)
- [Github Actions](https://docs.github.com/en/actions)
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML), [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS), [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)