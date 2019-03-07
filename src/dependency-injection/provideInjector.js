import React, { Component } from 'react';
import Injector from './Container';
import injectorContext from './injectorContext';

function provideInjector(Injectable, injectorContainer = Injector) {
  class InjectorProvider extends Component {
    getChildContext() {
      const { component } = injectorContainer;

      return {
        injector: {
          get: component.get.bind(component),
        },
      };
    }

    render() {
      return <Injectable {...this.props} />;
    }
  }

  InjectorProvider.childContextTypes = injectorContext;

  return InjectorProvider;
}

export default provideInjector;
