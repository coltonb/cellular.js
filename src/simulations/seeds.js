import Simulation from '../simulation';
import SimulationLogic from '../simulationLogic';

const states = { Alive: 1, Dead: 0 };

const draw = (cell) => {
  cell.draw(0, cell.state === states.Alive ? 255 : 0, 0);
};

const update = (grid, x, y) => {
  const cell = grid.getCell(x, y);
  const activeNeighborCount = grid.neighborsWithState(x, y, states.Alive);

  if (cell.state === states.Alive) {
    cell.nextState = states.Dead;
  } else if (activeNeighborCount === 2) {
    cell.nextState = states.Alive;
  }
};

const logic = new SimulationLogic(draw, update);
const simulation = new Simulation('Seeds', states, logic);

export default simulation;
