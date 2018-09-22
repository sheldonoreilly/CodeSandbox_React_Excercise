import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  formControl: {
    width: 300
  }
});

//export default withStyles(styles)(
class FormA extends Component {
  state = this.getInitialState();

  getInitialState() {
    const { exercise } = this.props;

    return exercise
      ? exercise
      : {
          title: '',
          description: '',
          muscles: ''
        };
  }

  // props are meant to be static to a component, state is dynamic. so by
  // setting the props to the state (initially)
  // we are essentially forking them.  The init exercise is both state and props.
  // This is usually not cool.  In normal circumstances the change in state would be passed
  // up and passed back as props to the component on s setState(passedUpState).
  componentWillReceiveProps({ exercise }) {
    console.log('componentWillReceiveProps');
    this.setState({
      ...exercise
    });
  }

  handleChange = name => ({ target: { value } }) => {
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    //destructure the exercise from the state
    const { exercise } = this.state;

    //send the exercise 'up' for persistence
    this.props.onSubmit({
      ...exercise,
      id: exercise.title
        .toLocaleLowerCase()
        .replace(/ /g, '-')
    });

    this.setState({
      open: false,
      exercise: {
        title: '',
        description: '',
        muscles: ''
      }
    });
  };

  render() {
    const { title, description, muscles } = this.state;
    const {
      classes,
      exercise,
      muscles: categories
    } = this.props;
    console.log('in the render');
    return (
      <form>
        <TextField
          label="Title"
          value={title}
          onChange={this.handleChange('title')}
          margin="normal"
          className={classes.formControl}
        />
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="muscles">Muscles</InputLabel>
          <Select
            value={muscles}
            onChange={this.handleChange('muscles')}
          >
            {categories.map(category => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))};
          </Select>
        </FormControl>
        <br />
        <TextField
          label="Description"
          multiline
          rows="4"
          value={description}
          onChange={this.handleChange('description')}
          margin="normal"
          className={classes.formControl}
        />
        <br />
        <Button onClick={this.handleSubmit} color="primary">
          {exercise ? 'Edit' : 'Create'}
        </Button>
      </form>
    );
  }
}
//);

export default withStyles(styles)(FormA);
