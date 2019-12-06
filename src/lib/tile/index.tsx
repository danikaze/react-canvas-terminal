
export interface TileProps {
  col: number;
  row: number;
  char?: string;
}

export function Tile(props: TileProps) {
  // tslint:disable-next-line: no-console
  console.log('Tile', props);
  return null;
}
