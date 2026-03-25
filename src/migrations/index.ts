import * as migration_20260325_131231_initial from './20260325_131231_initial';

export const migrations = [
  {
    up: migration_20260325_131231_initial.up,
    down: migration_20260325_131231_initial.down,
    name: '20260325_131231_initial'
  },
];
