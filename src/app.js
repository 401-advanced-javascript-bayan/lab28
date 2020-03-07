import React from 'react';
import '../style/style.scss';
import Header from './header.js';
import Footer from './footer.js';
import Form from './form.js';
import Results from './result';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { result: [''] , input : {}};
  }
  Submit = result => {
    this.setState({ result});
  };
 Change = input => {
    this.setState({ input });
    console.log('state', this.state.input);
  };

  render() {
    return (
      <div>
      <React.Fragment>
        <Header />
        <Form
         
          handl1={this.Submit}
          handel2={this.Change}
           url={this.state.input}
        />
        <Results result={this.state.result} />
        <Footer />
      </React.Fragment>
      </div>
    );
  }
}

export default App;