This example consists of:

- app: The SPA, consisting of one NgModule
- lib: A library providing a NgModule, that is used by the SPA

Currently the example works, but the complete bundling is done by the WebPack build in the app. The library is published as nom-module which provides unbundled sources.

To get it working:

	cd lib
	npm run tsc
	npm link
	
	cd app
	npm link example-lib
	npm start
	

### The first goal:

The lib should be bundled by a WebPack build and the npm-module of the lib should provide that bundle, which is consumed by the app.

There is a WebPack build in lib:

	npm run build
	
It produces a `bundle.js`, this can be referenced as `main` in the `package.json` of the lib, but then the app does not work any more, Angular somehow can't import the exported module ...

How can I bundle the lib, so that it can be imported by Angular?


### The second goal:

The lib should not be bundled by the WebPack build of the app. It should either be loaded at runtime by WebPack or it should be loaded by a `<script>`-tag on the `index.html` of the app.

The challenge is how we can get the NgModule from the lib into the root module of app (`app.module.ts`) without WebPack bundling the lib ...
