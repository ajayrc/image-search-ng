# NgImageSearch - Images Search App

`npm i`
`npm run start` or `ng serve`

# Problem:
* Implement an Interface that allows users to to search for images using any FREE images search API such as:
	* Unsplash
	* Flickr
        https://www.flickr.com/services/api/flickr.photos.search.html
        https://www.flickr.com/services/api/misc.urls.html
* The results should be updated live as the user type into the search box:
* Each image display some information when hover:
		* Link to author page
		* A button to save the image to the user’s favorite page.
				* When click, show a pop up for the user to choose which list to add the image to.
				* If there’s no list, allow the user to create a new list

* On the Favorite page:
		* Display all lists with correct images in each list
		* Edit list title & description
		* Click on each image should trigger the download.

### Requirements

* Use any version of Angular
* Use `ngrx/store` for state management
* Use `ngrx/effect` for handling side effects
* Use any CSS preprocessor of your choice
* The project should include a README file

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
