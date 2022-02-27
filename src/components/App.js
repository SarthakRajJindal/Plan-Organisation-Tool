import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { sort } from "../actions";

import ProjList from './ProjList';
import ProjCreate from "./ProjCreate";
import AppRouter from "../routes";

class App extends PureComponent {
  render() {
    return (
      <AppRouter />
    )
  }
}




export default App;