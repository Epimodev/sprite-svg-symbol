type RootAttributes = { [key: string]: string };

declare const generateSprite: (
  path: string,
  rootAttributes?: RootAttributes
) => Promise<string>;
export { generateSprite };
