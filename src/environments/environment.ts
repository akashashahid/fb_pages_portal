import { NgxLoggerLevel } from "ngx-logger";

/**
 * The file contents for the current environment will overwrite these during build.
 * The build system defaults to the dev environment which uses `environment.ts`, but if you do
 * `ng build --env=prod` then `environment.prod.ts` will be used instead.
 * The list of which env maps to which file can be found in `.angular-cli.json`.
 */

export const environment = {
  production: false,
  loggerLevel: NgxLoggerLevel.DEBUG,
  disableConsoleLogging: false,
  lang: "en",
  api: {
    host: 'https://graph.facebook.com/v20.0',
    appId: '8414401781955356',
    appSecret: '094c94799114bac363d1d2088ea51034',
    userTokens: {
      1: 'EAB3k2pU1ZBxwBOxyPh77xlTjUYNtj7827tZCUB9Sk3ubaKmFadE1uvflNwEVaiXDH7yiPSoRw3fWMMGaiuBBjQptxkfEHGBYy3myDhGgd1011ZB2s76vWtnLeKOrrq5U3ieLRpRgVQjQMsmbOJGTIzrNIdv0qMkBOODZBRTUCX9YuRWZAaRXBmEZB01OG7GL3l7stpSzpkTNoO2A6cHni9w8MZBAAZDZD',
    },
  },
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
