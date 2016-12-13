import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

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
    this.onReset = this.onReset.bind(this);

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

      screen: 'form',
      result: 'Striker'
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
            (screenState == 'result') ?
            this.renderResult():
            this.renderLoading()
        }
      </div>
    );
  }

  renderForm() {
    return(
      <div className='App-body'>

        <SelectField
          floatingLabelText='Dribbling: Kemampuan pemain untuk menguasai bola'
          value={this.state.dribbling}
          style={{fontSize: 20, padding: 6}}
          floatingLabelStyle={{color: '#616161'}}
          fullWidth={true}
          onChange={this.handleChangeDribbling}>
            <MenuItem value={0} primaryText='Bad' />
            <MenuItem value={1} primaryText='Medium' />
            <MenuItem value={2} primaryText='Good' />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText='Finishing: Kemampuan pemain untuk memaksimalkan peluang untuk mencetak goal'
          value={this.state.finishing}
          style={{fontSize: 20, padding: 6}}
          floatingLabelStyle={{color: '#616161'}}
          fullWidth={true}
          onChange={this.handleChangeFinishing}>
            <MenuItem value={0} primaryText='Bad' />
            <MenuItem value={1} primaryText='Medium' />
            <MenuItem value={2} primaryText='Good' />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText='Crossing: Kemampuan pemain untuk memberikan umpan lambung dari sisi kotak penalti'
          value={this.state.crossing}
          style={{fontSize: 20, padding: 6}}
          floatingLabelStyle={{color: '#616161'}}
          fullWidth={true}
          onChange={this.handleChangeCrossing}>
            <MenuItem value={0} primaryText='Bad' />
            <MenuItem value={1} primaryText='Medium' />
            <MenuItem value={2} primaryText='Good' />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText='Heading: Kemampuan dan keakuratan sundulan pemain'
          value={this.state.heading}
          style={{fontSize: 20, padding: 6}}
          floatingLabelStyle={{color: '#616161'}}
          fullWidth={true}
          onChange={this.handleChangeHeading}>
            <MenuItem value={0} primaryText='Bad' />
            <MenuItem value={1} primaryText='Medium' />
            <MenuItem value={2} primaryText='Good' />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText='Marking: Kemampuan pemain untuk mengawal pemain lawan dan mencegah mendapat bola'
          value={this.state.marking}
          style={{fontSize: 20, padding: 6}}
          floatingLabelStyle={{color: '#616161'}}
          fullWidth={true}
          onChange={this.handleChangeMarking}>
            <MenuItem value={0} primaryText='Bad' />
            <MenuItem value={1} primaryText='Medium' />
            <MenuItem value={2} primaryText='Good' />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText='Passing: Kemampuan pemain untuk memberikan umpan kepada rekan'
          value={this.state.passing}
          style={{fontSize: 20, padding: 6}}
          floatingLabelStyle={{color: '#616161'}}
          fullWidth={true}
          onChange={this.handleChangePassing}>
            <MenuItem value={0} primaryText='Bad' />
            <MenuItem value={1} primaryText='Medium' />
            <MenuItem value={2} primaryText='Good' />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText='Tackling: Kemampuan pemain untuk melakukan tackling yang aman atau bersih'
          value={this.state.tackling}
          style={{fontSize: 20, padding: 6}}
          floatingLabelStyle={{color: '#616161'}}
          fullWidth={true}
          onChange={this.handleChangeTackling}>
            <MenuItem value={0} primaryText='Bad' />
            <MenuItem value={1} primaryText='Medium' />
            <MenuItem value={2} primaryText='Good' />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText='Agility: Kelincahan pemain secara umum'
          value={this.state.agility}
          style={{fontSize: 20, padding: 6}}
          floatingLabelStyle={{color: '#616161'}}
          fullWidth={true}
          onChange={this.handleChangeAgility}>
            <MenuItem value={0} primaryText='Bad' />
            <MenuItem value={1} primaryText='Medium' />
            <MenuItem value={2} primaryText='Good' />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText='Balance: Keseimbangan tubuh pemain'
          value={this.state.balance}
          style={{fontSize: 20, padding: 6}}
          floatingLabelStyle={{color: '#616161'}}
          fullWidth={true}
          onChange={this.handleChangeBalance}>
            <MenuItem value={0} primaryText='Bad' />
            <MenuItem value={1} primaryText='Medium' />
            <MenuItem value={2} primaryText='Good' />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText='Speed: Kemampuan pemain untuk berlari baik saat membawa bola atau tidak'
          value={this.state.speed}
          style={{fontSize: 20, padding: 6}}
          floatingLabelStyle={{color: '#616161'}}
          fullWidth={true}
          onChange={this.handleChangeSpeed}>
            <MenuItem value={0} primaryText='Bad' />
            <MenuItem value={1} primaryText='Medium' />
            <MenuItem value={2} primaryText='Good' />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText='Stamina: Daya tahan pemain selama pertandingan'
          value={this.state.stamina}
          style={{fontSize: 20, padding: 6}}
          floatingLabelStyle={{color: '#616161'}}
          fullWidth={true}
          onChange={this.handleChangeStamina}>
            <MenuItem value={0} primaryText='Bad' />
            <MenuItem value={1} primaryText='Medium' />
            <MenuItem value={2} primaryText='Good' />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText='Strength: Kekuatan pemain'
          value={this.state.strength}
          style={{fontSize: 20, padding: 6}}
          floatingLabelStyle={{color: '#616161'}}
          fullWidth={true}
          onChange={this.handleChangeStrength}>
            <MenuItem value={0} primaryText='Bad' />
            <MenuItem value={1} primaryText='Medium' />
            <MenuItem value={2} primaryText='Good' />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText='Vision: Kemampuan pemain untuk mengamati daerah sekitarnya'
          value={this.state.vision}
          style={{fontSize: 20, padding: 6}}
          floatingLabelStyle={{color: '#616161'}}
          fullWidth={true}
          onChange={this.handleChangeVision}>
            <MenuItem value={0} primaryText='Bad' />
            <MenuItem value={1} primaryText='Medium' />
            <MenuItem value={2} primaryText='Good' />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText='Anticipation: Kemampuan pemain untuk menangani hal-hal krusial'
          value={this.state.anticipation}
          style={{fontSize: 20, padding: 6}}
          floatingLabelStyle={{color: '#616161'}}
          fullWidth={true}
          onChange={this.handleChangeAnticipation}>
            <MenuItem value={0} primaryText='Bad' />
            <MenuItem value={1} primaryText='Medium' />
            <MenuItem value={2} primaryText='Good' />
        </SelectField>
        <br />

        <SelectField
          floatingLabelText='Goalkeeping: Kemampuan pemain untuk mempertahankan gawang dari kebobolan'
          value={this.state.goalkeeping}
          style={{fontSize: 20, padding: 6}}
          floatingLabelStyle={{color: '#616161'}}
          fullWidth={true}
          onChange={this.handleChangeGoalkeeping}>
            <MenuItem value={0} primaryText='Bad' />
            <MenuItem value={1} primaryText='Medium' />
            <MenuItem value={2} primaryText='Good' />
        </SelectField>
        <br />
        <br />

        <RaisedButton 
          label='Submit' fullWidth={true} 
          primary={true} 
          style={{margin: 12, height: 50}}
          labelStyle={{fontSize: 20}}
          onClick={this.onSubmit} />

      </div>
    )
  }

  renderLoading() {
    return(
      <div className='Loading'>
        <CircularProgress size={100} thickness={7} />
      </div>
    )
  }

  renderResult() {
    const resultText = this.state.result;

    return(
      <div className='Result'>
        <Card style={{height: '160px'}}>
          <CardHeader
            title={resultText}
            style={{'text-align': 'center'}}
            titleStyle={{ 'font-size': '64px'}}
          />

          <CardActions style={{'text-align': 'right'}}>
            <FlatButton label="Reset" onClick={this.onReset} />
          </CardActions>
        </Card>
      </div>
    )
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
    setTimeout(() => this.setState({
      screen: 'result',
      result: this.expertSystem()
    }), 2000)
  }

  onReset() {
    this.setState({
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

      screen: 'form',
      result: 'Striker'
    })
  }

  expertSystem() {
    const {
      dribbling,
      finishing,
      crossing, 
      heading,
      marking,
      passing,
      tackling,
      agility,
      balance,
      speed,
      stamina,
      strength,
      vision,
      anticipation,
      goalkeeping
    } = this.state;

    const Abilities = {
      Dribbling: dribbling,
      Finishing: finishing,
      Crossing: crossing, 
      Heading: heading,
      Marking: marking,
      Passing: passing,
      Tackling: tackling,
      Agility: agility,
      Balance: balance,
      Speed: speed,
      Stamina: stamina,
      Strength: strength,
      Vision: vision,
      Anticipation: anticipation,
      GoalKeeping: goalkeeping
    };

    let output;

    if(Abilities['Passing']==2 && Abilities['Tackling']>=1 && Abilities['Agility']>=1 && Abilities['Balance']==2 && Abilities['Strength']==2 && Abilities['Vision']==2){
      output = 'Center Midfielder';
    } else  if(Abilities['Passing']>=1 && Abilities['Balance'] >= 1 &&  Abilities['Speed'] == 2 && Abilities['Crossing']==2 && Abilities['Dribbling']==2 &&  Abilities['Stamina'] == 2 &&  Abilities['Agility'] == 2) {
      output = 'Winger';
    } else if(Abilities['Marking']==2 && Abilities['Passing']>=1 && Abilities['Heading']>=1 && Abilities['Tackling']==2 && Abilities['Strength']==2 && Abilities['Balance']==2 && Abilities['Anticipation']==2) {
      output = 'Center Back';
    } else if(Abilities['Marking']>=1 &&  Abilities['Passing']>=1 &&  Abilities['Tackling']>=1 && Abilities['Balance']>=1 &&  Abilities['Anticipation']>=1 && Abilities['Speed']==2 &&  Abilities['Crossing']==2 && Abilities['Dribbling']>=1 &&  Abilities['Stamina']==2) {
      output = 'Wing Back';
    } else if(Abilities['Dribbling']>=1 && Abilities['Finishing']==2 && Abilities['Heading']==2 && Abilities['Agility']>=1 && Abilities['Strength']>=1) {
      output = 'Striker';
    } else if(Abilities['Dribbling']>=1 &&  Abilities['Finishing']>=1 &&  Abilities['Agility']==2 &&  Abilities['Passing']==2 &&  Abilities['Balance']>=1 &&  Abilities['Vision']>=1){
      output = 'Attacking Midfielder';
    } else if (Abilities['GoalKeeping']==2 && Abilities['Vision']==2 && Abilities['Anticipation']==2){
      output ='GoalKeeper';
    } else {
      output = 'Latihan lagi';
    }

    return output;
  }
}

export default App;
