import React, { Component, Fragment } from "react";

import { Header, Footer } from "../Components/Layouts/";
import Exercises from "../Components/Exercises/";
import { muscles, exercises } from "../store";

/* functional compoents are 'functional' they allow user
to preform 'functions on them'
/* class componants are 'containers' that hold the state?? */
/* App class is a container - handles state - it passes
excercises as props to functional/presentational components 
for viewing and user perfomr functios on them */
export default class App extends Component {
  ///muscles are static so ...

  //excercies may change so they are state
  state = {
    exercises,
    //this is the selected exercise
    exercise: {},
    editMode: false
  };

  /*
  Id like the excerices sorted by cat for display - because this is the container
  id like to sort here be proping off to function component
  */
  getExercisesByCategory() {
    const initExercises = muscles.reduce(
      (exercises, category) => ({
        ...exercises,
        [category]: []
      }),
      {}
    );
    console.log(muscles, initExercises);
    // console.log("state", this.state, exercises);
    return Object.entries(
      this.state.exercises.reduce((exercisesRd, exercise) => {
        //destructure of excercise.muscle
        const { muscles } = exercise;
        // console.log("muscles:", muscles);

        //sort
        exercisesRd[muscles] = [...exercisesRd[muscles], exercise];
        return exercisesRd;
      }, initExercises)
    );
  }

  handleCategorySelect = category => this.setState({ category });

  handleExerciseSelect = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));

  handleExerciseCreate = exercise =>
    this.setState(prevState => {
      return {
        exercises: [...prevState.exercises, exercise]
      };
    });

  //wow
  handleExerciseDelete = id =>
    this.setState(({ exercises }) => ({
      //filter out the exercises
      excercises: exercises.filter(ex => ex.id !== id)
    }));

  handleExerciseSelectEdit = id =>
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id),
      editMode: true
    }));

  render() {
    const exercises = this.getExercisesByCategory();

    //destructure the category form state
    const { category, exercise, editMode } = this.state;

    return (
      <Fragment>
        <Header
          categories={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          exercise={exercise}
          category={category}
          exercises={exercises}
          editMode={editMode}
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelect}
        />
      </Fragment>
    );
  }
}
