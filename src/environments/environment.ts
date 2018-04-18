// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCpnlV2Y6cJqG-R9JsQDM1WI9BtpCuEHdE",
    authDomain: "rocktown-users.firebaseapp.com",
    databaseURL: "https://rocktown-users.firebaseio.com",
    projectId: "rocktown-users",
    storageBucket: "rocktown-users.appspot.com",
    messagingSenderId: "745002530522"
  }
};
