import React from 'react';
import { Grid } from '@material-ui/core';
import { Cards, CountryPicker, Chart, Header } from './components';
import { fetchData } from './api/';
import styles from './App.module.css';


class App extends React.Component {

  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }




  render() {


    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <Grid container direction="column">
          <Grid item><Header /></Grid>
          <Grid item container>
            <Grid item xs={0} sm={2} />
            <Grid item xs={12} sm={8}>
              <Cards data={data} />
            </Grid>
            <Grid item xs={0} sm={2} />
          </Grid>
        </Grid>     
        <CountryPicker handleCountryChange={this.handleCountryChange} /> 
        <Chart data={data} country={country} /> 
      </div>
    );
  }
}

export default App;


