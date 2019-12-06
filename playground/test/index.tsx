import * as React from 'react';
import ReactCanvas from '../../src/renderer';
import { Terminal } from '../../src/lib/terminal';
import { Tile } from '../../src/lib/tile';

const canvas = document.getElementsByTagName('canvas')[0];

function App() {
  const terminalProps = {
    rows: 10,
    cols: 20,
    tileWidth: 20,
    tileHeight: 20,
  };

  return (
    <Terminal {...terminalProps}>
      <Tile row={1} col={1} char="X" />
    </Terminal>
  );
}

function DomApp() {
  return (
    <div>
      <span />
    </div>
  );
}
const parent = document.createElement('div');
document.body.appendChild(parent);
if (true) {
  ReactCanvas.render(<App />, canvas);
}
if (false) {
  ReactCanvas.render(<DomApp />, parent);
}
