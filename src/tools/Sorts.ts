export const sortAlphabetically = (assets: any) => (
  assets.sort((x: any, y: any) => (x.ticker > y.ticker ? 1 : x.ticker < y.ticker ? -1 : 0))
);
