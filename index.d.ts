interface Options {
  theme: 'bootstrap' | 'hierarchy' | 'foundation' | 'simple',
  jsonFile?: string,
  json?: any,
  jsonDir?: string, 
  output: string,
  screenshotsDirectory?: string,
  reportSuiteAsScenarios: boolean,
  ignoreBadJsonFile?: boolean,
  launchReport: boolean,
  columnLayout?: number,
  storeScreenshots?: boolean,
  noInlineScreenshots?: boolean,
  name?: string,
  brandTitle?: string,
  scenarioTimestamp?: boolean,
  metadata?: {
    [key: string]: string
  },
  customScripts?: string[],
  customStyles?: string[],
}

export function generate(options: Options, callback?: (html: string) => void): void
