# Contributing

First of all thanks for help out with RavenCSS. We want to show simple steps of contribution process.

**Contents**

- [Open an Issue](#open-an-issue)
- [Work on the RavenCSS](#work-on-the-ravencss)
- [Submit a Pull Request](#submit-a-pull-request)
- [Standards](#standards)
- [Done](#done)

## Open an Issue

- If you found a problem to fix, please primarily [open a new issue](https://github.com/erenesto/raven-css/issues/new) before working on it, so we can discuss the solution.
- Please provide helpful informations such as browser, OS, screenshots etc.
- If issue you opened is as we stated and you do not get anything back from us, that doesn't mean that we object to the issue or we do not care.

## Work on the RavenCSS

- Fork the repo: `git clone https://github.com/erenesto/raven-css.git`
- Install the dependencies using `npm install`.
- Create a new branch with `git checkout -b issuenumber-feature-name`
- The project is using [Parcel](https://parceljs.org/). After dependencies installed, you can start it with `npm start`. Parcel will create `dev` folder for development and it will compile your changes.
- It will also run a dev server and open a new browser window so you can see your changes.

## Submit a Pull Request

- When you finish your fixes or new features and you are happy with that, stop the Parcel server with `ctrl + c`.
- Run the command `npm run build`. This will clean inside of `dist` folder and recreate css files. If there are errors on building process, check the linter output and fix them.
- Commit and push your changes: `git commit -m 'issuenumber-feature-name'` and `git push origin your-feature-name`
- Open a new pull request with short description of the changes you made.

## Standards

[Prettier](https://prettier.io/) and [stylelint](https://stylelint.io/) as dev-dependencies, will already help you. If you follow stylelint rules, you won't get any error after building process. We have just a few standarts;

- Use kabab-case for class names. Don't use BEM etc. standarts.
- Use maximum 3 level depts for scss.
- Don't use general properties like `margin: 0`. Use specific like `margin-left: 1rem;`
- Don't use `px` use `rem`
- Don't use `!important`
- Make sure abstract your styles.

## Done.

All done. Thank you again for contribute this project. This is now your project too..
