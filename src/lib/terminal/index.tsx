
export interface TerminalProps {
  cols: number;
  rows: number;
  tileWidth: number;
  tileHeight: number;
}

export function Terminal(props: TerminalProps) {
  // tslint:disable-next-line: no-console
  console.log('Terminal', props);
  return null;
}
