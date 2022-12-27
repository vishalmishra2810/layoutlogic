export const props_pass_string = `
function ParentComponent() {
    const [name, setName] = useState('ClearJobs');
    return <ChildComponent name={name} />;
  }
  
  function ChildComponent(props) {
    return <div>{props.name}</div>;
  }
`;

export const context_pass_string = `
const CustomContext = React.createContext();
const [name, setName] = useState('ClearJobs');
function ParentComponent() {
  
  return (
    <CustomContext.Provider value={{ name }}>
      <ChildComponent />
    </CustomContext.Provider>
  );
}

function ChildComponent() {
  return (
    <CustomContext.Consumer>
      {context => <div>{context.name}</div>}
    </CustomContext.Consumer>
  );
}
`;

export const redux_pass_string = `  
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function ChildComponent(props) {
  return <div>{props.name}</div>;
}

export default connect(mapStateToProps)(ChildComponent);
`;

export const react_router = `
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      </Routes>
    </Router>
  );
}
`;
