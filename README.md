# [jack-development.github.io](https://jack-development.github.io)

A website developed with the goal of creating an online presence for me to supply to clients, colleagues, or potential employers. It also served as an introduction into using React alongside GitHub pages and deploying website builds from React.

## Skills Used

<code><img height="50" src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-plain.svg" alt="html"></code>
<code><img height="50" src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-plain.svg" alt="javascript"></code>
<code><img height="50" src="https://github.com/devicons/devicon/blob/master/icons/sass/sass-original.svg" alt="sass"></code>

<code><img height="50" src="https://github.com/devicons/devicon/blob/master/icons/bulma/bulma-plain.svg" alt="bulma"></code>
<code><img height="50" src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" alt="react"></code>

<code><img height="50" src="https://github.com/devicons/devicon/blob/master/icons/ubuntu/ubuntu-plain.svg" alt="ubuntu"></code>
<code><img height="50" src="https://github.com/Jack-Development/Jack-Development/blob/main/resources/IntelliJ_Icon.svg" alt="IntelliJ"></code>

## Development Info

This website is hosted on GitHub pages and was created as a "Single Page Application", which means that the page is always loaded with the same code and changes what happens based on the url provided.

Typically GitHub pages only supports static pages, however this website uses a trick developed by 
[Rafael Pedicini](https://github.com/rafgraph), 
where in which a custom 404 page is generated, which passes the URL ending onto the original page as it is loaded again, allowing it to use the React structure to decide what page it should be showing.

The GitHub repository for this method can be found [here](https://github.com/rafgraph/spa-github-pages).

## Customization

If you wish to edit any of the colours or create a theme for the website then you just need to edit the colour values located in the [config](https://github.com/Jack-Development/Jack-Development.github.io/blob/master/src/scss/config.scss) file. This features allows for customisation of the website to fit whatever need you wish for it to fufill.

In order to add a new project to the site, you need to go into [components/projects.json](https://github.com/Jack-Development/Jack-Development.github.io/blob/master/src/components/projects.json) and follow the format of the default projects within that file. You will also have to create a new directory in [images/](https://github.com/Jack-Development/Jack-Development.github.io/tree/master/src/images), which has the same name as the "shortName" in the .json file, to store all the pictures for that project.

## Available Scripts

In the project directory, you can run:

### `npm install`

This will install all of the dependencies that are needed to run the React application.

Be aware, this can take some time.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm run deploy`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is then automatically deployed to the linked GitHub repository as a seperate branch, which can be selected as the source for GitHub pages.


