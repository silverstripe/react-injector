# React Injector

A library for sharing and extending components between multiple compiled JS bundles.

__CAUTION:__ This is an extremely early alpha release. Functionality is not guaranteed, and APIs may change at any time.

### Requirements

- React 16+
- Webpack
- [Determination](http://i.imgur.com/DL4onJm.png)

### Introduction

Say you build an [Open Source CMS](https://silverstripe.org) using React to render the UI. You might want developers building projects with this CMS to be able to change the behaviour of some UIs, or to be able to provide new components that can be consumed by the CMS. Those components can't easily be included in the JS bundle for the CMS, as it would require recompiling the shipped code with outside references.

Enter React Injector. Using this package, you can register React components in one JS bundle that can be fetched and utilised by another, dynamically inject component dependencies, or even wrap / replace a component from one bundle with a component from another. This is achieved by sharing a single instance of the Injector library across any bundle that is loaded in the browser, which can maintain a registry of components and transformations to apply at runtime.

The foremost example of this package in practice is SilverStripe 4, which uses Injector to allow customisation of its Asset Admin UI, along with other areas of the CMS. The SilverStripe-embedded version of this package also supports mutation of Redux stores and GraphQL queries, but in this initial preview we are keeping the scope limited to React components.

### Usage

Take a look at this [demo repository](https://github.com/creative-commoners/outjector) for an example of how to boot and use Injector. You can also consult the [SilverStripe documentation](https://docs.silverstripe.org/en/4/developer_guides/customising_the_admin_interface/reactjs_redux_and_graphql/#the-injector-api), though only a subset of it will apply to this version.

Expanded documentation will follow in a future release.
