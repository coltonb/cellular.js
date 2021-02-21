function defaultClear(grid) {
  for (let y = 0; y < grid.height; y += 1) {
    for (let x = 0; x < grid.width; x += 1) {
      const cell = grid.getCell(x, y);
      cell.forceState(0);
    }
  }
}

function defaultFill(grid, density) {
  for (let y = 0; y < grid.height; y += 1) {
    for (let x = 0; x < grid.width; x += 1) {
      const randomValue = Math.random();
      const cell = grid.getCell(x, y);
      if (randomValue >= 1 - density) {
        cell.forceState(1);
      } else {
        cell.forceState(0);
      }
    }
  }
}

class SimulationLogic {
  constructor(draw, update, fill = defaultFill, clear = defaultClear) {
    this.draw = draw;
    this.update = update;
    this.fill = fill;
    this.clear = clear;
  }
}

export default SimulationLogic;
