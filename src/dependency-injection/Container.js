import buildInjectorContainer from './buildInjectorContainer';
import buildComponentContainer from './buildComponentContainer';
import buildReducerContainer from './buildReducerContainer';

const Injector = buildInjectorContainer();

Injector.register('component', buildComponentContainer());
Injector.register('reducer', buildReducerContainer());

export default Injector;
