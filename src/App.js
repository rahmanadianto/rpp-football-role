import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleChangeDribbling = this.handleChangeDribbling.bind(this);
    this.handleChangeFinishing = this.handleChangeFinishing.bind(this);
    this.handleChangeCrossing = this.handleChangeCrossing.bind(this);
    this.handleChangeHeading = this.handleChangeHeading.bind(this);
    this.handleChangeMarking = this.handleChangeMarking.bind(this);
    this.handleChangePassing = this.handleChangePassing.bind(this);
    this.handleChangeTackling = this.handleChangeTackling.bind(this);
    this.handleChangeAgility = this.handleChangeAgility.bind(this);
    this.handleChangeBalance = this.handleChangeBalance.bind(this);
    this.handleChangeSpeed = this.handleChangeSpeed.bind(this);
    this.handleChangeStamina = this.handleChangeStamina.bind(this);
    this.handleChangeStrength = this.handleChangeStrength.bind(this);
    this.handleChangeVision = this.handleChangeVision.bind(this);
    this.handleChangeAnticipation = this.handleChangeAnticipation.bind(this);
    this.handleChangeGoalkeeping = this.handleChangeGoalkeeping.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      dribbling: 0,
      finishing: 0,
      crossing: 0, 
      heading: 0,
      marking: 0,
      passing: 0,
      tackling: 0,
      agility: 0,
      balance: 0,
      speed: 0,
      stamina: 0,
      strength: 0,
      vision: 0,
      anticipation: 0,
      goalkeeping: 0,

      screen: 'form'
    };
  }

  render() {
    const screenState = this.state.screen;

    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1>Soccer Player Position Expert System</h1>
        </div>

        { 
          (screenState == 'form') ?
            this.renderForm() :
            this.renderLoading()
        }
      </div>
    );
  }

  renderForm() {
    return(
      <div className='App-body'>

        <SelectField
          floatingLabelText="Dribbling: Kemampuan pemain untuk menguasai bola"
          value={this.state.dribbling}
          style={{fontSize: 24, padding: 6}}
          fullWidth={true}
          onChange={this.handleChangeDribbling}>
            <MenuItem value={0} primaryText="Bad" />
            <MenuItem value={1} primaryText="Medium" />
            <MenuItem value={2} primaryText="Good" />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText="Finishing: Kemampuan pemain untuk memaksimalkan peluang untuk mencetak goal"
          value={this.state.finishing}
          style={{fontSize: 24, padding: 6}}
          fullWidth={true}
          onChange={this.handleChangeCrossing}>
            <MenuItem value={0} primaryText="Bad" />
            <MenuItem value={1} primaryText="Medium" />
            <MenuItem value={2} primaryText="Good" />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText="Crossing: Kemampuan pemain untuk memberikan umpan lambung dari sisi kotak penalti"
          value={this.state.crossing}
          style={{fontSize: 24, padding: 6}}
          fullWidth={true}
          onChange={this.handleChangeCrossing}>
            <MenuItem value={0} primaryText="Bad" />
            <MenuItem value={1} primaryText="Medium" />
            <MenuItem value={2} primaryText="Good" />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText="Heading: Kemampuan dan keakuratan sundulan pemain"
          value={this.state.heading}
          style={{fontSize: 24, padding: 6}}
          fullWidth={true}
          onChange={this.handleChangeHeading}>
            <MenuItem value={0} primaryText="Bad" />
            <MenuItem value={1} primaryText="Medium" />
            <MenuItem value={2} primaryText="Good" />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText="Marking: Kemampuan pemain untuk mengawal pemain lawan dan mencegah mendapat bola"
          value={this.state.marking}
          style={{fontSize: 24, padding: 6}}
          fullWidth={true}
          onChange={this.handleChangeMarking}>
            <MenuItem value={0} primaryText="Bad" />
            <MenuItem value={1} primaryText="Medium" />
            <MenuItem value={2} primaryText="Good" />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText="Passing: Kemampuan pemain untuk memberikan umpan kepada rekan"
          value={this.state.passing}
          style={{fontSize: 24, padding: 6}}
          fullWidth={true}
          onChange={this.handleChangePassing}>
            <MenuItem value={0} primaryText="Bad" />
            <MenuItem value={1} primaryText="Medium" />
            <MenuItem value={2} primaryText="Good" />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText="Tackling: Kemampuan pemain untuk melakukan tackling yang aman atau bersih"
          value={this.state.tackling}
          style={{fontSize: 24, padding: 6}}
          fullWidth={true}
          onChange={this.handleChangeTackling}>
            <MenuItem value={0} primaryText="Bad" />
            <MenuItem value={1} primaryText="Medium" />
            <MenuItem value={2} primaryText="Good" />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText="Agility: Kelincahan pemain secara umum"
          value={this.state.agility}
          style={{fontSize: 24, padding: 6}}
          fullWidth={true}
          onChange={this.handleChangeAgility}>
            <MenuItem value={0} primaryText="Bad" />
            <MenuItem value={1} primaryText="Medium" />
            <MenuItem value={2} primaryText="Good" />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText="Balance: Keseimbangan tubuh pemain"
          value={this.state.balance}
          style={{fontSize: 24, padding: 6}}
          fullWidth={true}
          onChange={this.handleChangeBalance}>
            <MenuItem value={0} primaryText="Bad" />
            <MenuItem value={1} primaryText="Medium" />
            <MenuItem value={2} primaryText="Good" />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText="Speed: Kemampuan pemain untuk berlari baik saat membawa bola atau tidak"
          value={this.state.speed}
          style={{fontSize: 24, padding: 6}}
          fullWidth={true}
          onChange={this.handleChangeSpeed}>
            <MenuItem value={0} primaryText="Bad" />
            <MenuItem value={1} primaryText="Medium" />
            <MenuItem value={2} primaryText="Good" />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText="Stamina: Daya tahan pemain selama pertandingan"
          value={this.state.stamina}
          style={{fontSize: 24, padding: 6}}
          fullWidth={true}
          onChange={this.handleChangeStamina}>
            <MenuItem value={0} primaryText="Bad" />
            <MenuItem value={1} primaryText="Medium" />
            <MenuItem value={2} primaryText="Good" />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText="Strength: Kekuatan pemain"
          value={this.state.strength}
          style={{fontSize: 24, padding: 6}}
          fullWidth={true}
          onChange={this.handleChangeStrength}>
            <MenuItem value={0} primaryText="Bad" />
            <MenuItem value={1} primaryText="Medium" />
            <MenuItem value={2} primaryText="Good" />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText="Vision: Kemampuan pemain untuk mengamati daerah sekitarnya"
          value={this.state.vision}
          style={{fontSize: 24, padding: 6}}
          fullWidth={true}
          onChange={this.handleChangeVision}>
            <MenuItem value={0} primaryText="Bad" />
            <MenuItem value={1} primaryText="Medium" />
            <MenuItem value={2} primaryText="Good" />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText="Anticipation: Kemampuan pemain untuk menangani hal-hal krusial"
          value={this.state.anticipation}
          style={{fontSize: 24, padding: 6}}
          fullWidth={true}
          onChange={this.handleChangeAnticipation}>
            <MenuItem value={0} primaryText="Bad" />
            <MenuItem value={1} primaryText="Medium" />
            <MenuItem value={2} primaryText="Good" />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText="Goalkeeping: Kemampuan pemain untuk mempertahankan gawang dari kebobolan"
          value={this.state.goalkeeping}
          style={{fontSize: 24, padding: 6}}
          fullWidth={true}
          onChange={this.handleChangeGoalkeeping}>
            <MenuItem value={0} primaryText="Bad" />
            <MenuItem value={1} primaryText="Medium" />
            <MenuItem value={2} primaryText="Good" />
        </SelectField>
        <br />
        <br />

        <RaisedButton 
          label="Submit" fullWidth={true} 
          primary={true} 
          style={{margin: 12, height: 50}}
          labelStyle={{fontSize: 24}}
          onClick={this.onSubmit} />

      </div>
    )
  }

  renderLoading() {
    return(
      <div className="Loading">
        <CircularProgress size={100} thickness={7} />
      </div>
    )
  }

  renderResult() {

  }

  handleChangeDribbling(event, index, value) {
    this.setState({ dribbling: value });
  }

  handleChangeFinishing(event, index, value) {
    this.setState({ finishing: value });
  }

  handleChangeCrossing(event, index, value) {
    this.setState({ crossing: value });
  }

  handleChangeHeading(event, index, value) {
    this.setState({ heading: value });
  }

  handleChangeMarking(event, index, value) {
    this.setState({ marking: value });
  }

  handleChangePassing(event, index, value) {
    this.setState({ passing: value });
  }

  handleChangeTackling(event, index, value) {
    this.setState({ tackling: value });
  }

  handleChangeAgility(event, index, value) {
    this.setState({ agility: value });
  }

  handleChangeBalance(event, index, value) {
    this.setState({ balance: value });
  }

  handleChangeSpeed(event, index, value) {
    this.setState({ speed: value });
  }

  handleChangeStamina(event, index, value) {
    this.setState({ stamina: value });
  }

  handleChangeStrength(event, index, value) {
    this.setState({ strength: value });
  }

  handleChangeVision(event, index, value) {
    this.setState({ vision: value });
  }

  handleChangeAnticipation(event, index, value) {
    this.setState({ anticipation: value });
  }

  handleChangeGoalkeeping(event, index, value) {
    this.setState({ goalkeeping: value });
  }

  onSubmit() {
    this.setState({screen: 'loading'})
    
    //Dummy process
    setTimeout(() => this.setState({screen: 'form'}), 2000)
  }
}

export default App;
