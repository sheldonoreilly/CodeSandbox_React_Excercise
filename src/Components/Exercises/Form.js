import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
  formControl: {
    width: 500
  }
});

export default withStyles(styles)(
  class extends Component {
    state = {
      title: '',
      description: '',
      muscles: ''
    };

    handleChange = name => ({ target: { value } }) => {
      this.setState({
        [name]: value
      });
    };

    handleSubmit = () => {
      //destructure the exercise from the state
      const { exercise } = this.state;

      //send the exercise 'up' for persistence
      this.props.onCreate({
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
      const { classes, muscles: categories } = this.props;
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
            <InputLabel htmlFor="muscles">
              Muscles
            </InputLabel>
            <Select
              value={muscles}
              onChange={this.handleChange('muscles')}
            >
              {this.props.categories.map(category => (
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
        </form>
      );
    }
  }
);
