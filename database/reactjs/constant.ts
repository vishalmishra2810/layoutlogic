export const props_pass_string = `
function ParentComponent() {
    const [name, setName] = useState('CarrierBoosts');
    return <ChildComponent name={name} />;
  }
  
  function ChildComponent(props) {
    return <div>{props.name}</div>;
  }
`;

export const context_pass_string = `
const CustomContext = React.createContext();
const [name, setName] = useState('CarrierBoosts');
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

export const first_form_string = `
return (
  <form onSubmit={handleSubmit}>
  {
    /* form fields */
  }
  </form>
);
`;

export const second_form_string = `
 handleSubmit = (event) => {
  event.preventDefault();
  const { name, email, password } = event.target;
 };

`;

export const third_form_string = `
function Login() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = userData;
    console.log(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" value={userData.email} onChange={handleChange} />
      <input type="password" name="password" value={userData.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
  };
`;

export const first_test_string = `
  npm install --save-dev jest; 
`;
export const second_test_string = `
test('MyComponent should render the correct content', () => {
  const { getByText } = render(<MyComponent />);
  const element = getByText(/Hello, world!/i);
  expect(element).toBeInTheDocument();
});
`;

export const higher_order_string = `
const withLoading = (Component) => {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p>Hold on, fetching data may take some time.</p>;
  };
};

const App = ({ isLoading }) => {
  return (
    <div>
      <h1>My App</h1>
      <p>App is running</p>
    </div>
  );
};

const AppWithLoading = withLoading(App);

const App = () => {
  return (
    <div>
      <AppWithLoading isLoading={true} />
    </div>
  );
};
`;

export const async_string_first = `
import React, { useState, useEffect } from 'react';

function Component() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('your api url');
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
}
`;

export const async_string_second = `
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('https://my-api.com/endpoint');
      setData(response.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
}
`;

export const controlling_string = `
import React, { useState } from 'react';

function MyForm() {
  const [email, setEmail] = useState('');

  function handleChange(event) {
    setEmail(event.target.value);
  }

  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input type="text" id="email" value={email} onChange={handleChange} />
    </form>
  );
}

`;

export const class_based_string = `
import React, { Component } from 'react';

class MyComponent
  extends Component {
  render() {
    return <p>Hello, world!</p>;
  }
}
`;

export const functional_based = `
import React from 'react';

function MyComponent() {
  return <p>Hello, world!</p>;
}
`;

export const check_valid_prop = `import PropTypes from 'prop-types';

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
};`;

export const context_api = `
import React, { createContext, useContext } from 'react';

const MyContext = createContext();

//create a provider
<MyContext.Provider value={"hello world!"}>
  <ChildComponent />
</MyContext.Provider>;  


//use the context
const ChildComponent = () => {
  const value = useContext(MyContext);
  return <div>{value}</div>;
};

`;

export const react_router_example = `
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

const Home = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const NotFound = () => <h1>404: Not found</h1>;

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);
`;

export const jest_test = `
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();

});
`;

export const use_memo_string = `
import React, { useState, useMemo } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    // do something expensive
    return count * 2;
  }, [count]);

  return (

    <div>
      <p>{expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
`;

export const use_callback_string = `
import { useCallback } from 'react';

function MyComponent(props) {
  const handleClick = useCallback(() => {
    console.log(props.a);
  }, [props.a]);

  return <MyChildComponent onClick={handleClick} />;
}
`;
