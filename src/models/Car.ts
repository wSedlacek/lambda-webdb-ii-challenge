export interface Car {
  vin: string;
  make: string;
  model: string;
  milage: number;
  transmission?: Transmission;
  title?: Title;
}

enum Transmission {
  'AUTO',
  'MANUAL',
}

enum Title {
  'CLEAN',
  'SALVAGED',
}
