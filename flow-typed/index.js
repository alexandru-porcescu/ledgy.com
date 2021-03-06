// @flow

declare type Language = 'en' | 'de' | 'fr';

declare type I18n = {|
  t: (Array<string>, ...values: Array<any>) => string,
  _: string => string
|};

declare type Props = {|
  i18n: I18n,
  prefix: string,
  lang: Language,
  data: Object
|};

declare type LayoutProps = {|
  ...Props,
  location: { pathname: string }
|};

declare type Mdx = {| childMdx: {| body: string |} |};

declare type Image = {|
  localFile: {| childImageSharp: Object |},
  title: string,
  description?: string
|};

declare type Page = {|
  id: string,
  title: string,
  description: string,
  date?: string,
  author?: string,
  content: Mdx,
  slug: string,
  language: Language,
  cover?: Image
|};

declare type Company = {|
  name: string,
  logo: Image,
  cover: Image,
  contactName: string,
  contactTitle: string,
  mainQuote: Mdx,
  yearFounded: string,
  funding: ?string,
  employeeCount: string,
  sector: string,
  location: string,
  stage: string
|};

declare type CustomerStory = {|
  id: string,
  title: string,
  slug: string,
  subtitle: string,
  company: Company,
  content: Mdx,
  date: string,
  language: Language,
  author?: string
|};

declare type Feature = {|
  id: string,
  title: string,
  description: string[],
  image: Image
|};

declare type FeaturePage = {|
  id: string,
  title: string,
  description: string,
  features: Feature[],
  startOnRight?: boolean
|};

declare var graphql: any;
