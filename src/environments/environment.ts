// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import 'zone.js/plugins/zone-error';

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyB962rvQ5Yc3wb9a0rDANLMHzYCRyfC7bA",
    authDomain: "namelazz-brand.firebaseapp.com",
    projectId: "namelazz-brand",
    storageBucket: "namelazz-brand.appspot.com",
    messagingSenderId: "110544957935",
    appId: "1:110544957935:web:9f2084cd02ad4f7769861a",
    measurementId: "G-PEC889FW95"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
