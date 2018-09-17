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

  //excercies may change so the are state
  state = {
    exercises,
    exercise: {}
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

  handleExerciseSelect = id => {
    this.setState(({ exercises }) => ({
      exercise: exercises.find(ex => ex.id === id)
    }));
  };

  handleExerciseCreate = exercise => {
    this.setState(prevState => {
      return {
        exercises: [...prevState.exercises, exercise]
      };
    });
  };

  handleExerciseDelete = id => {
    console.log("handleExerciseDelete", id);
    //wow
    this.setState(prevState => {
      //destructure the exercises arr from previous
      const { exercises } = prevState;
      //filter out the exercises
      const newEx = exercises.filter(exercise => {
        if (exercise.id !== id) {
          return exercise;
        }
      });
      return {
        exercises: newEx
      };
    });
  };

  render() {
    console.log("render((((((((");
    const exercises = this.getExercisesByCategory();

    console.log("the freaking state is", this.state.exercise);
    //destructure the category form state
    const { category, exercise } = this.state;

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
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleExerciseDelete}
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
