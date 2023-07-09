import { ReactNode } from 'react';

export type StrictPropsWithChildren<P = unknown> = P & {
  children: ReactNode;
};

// https://stackoverflow.com/questions/44425344/typescript-interface-with-xor-barstring-xor-cannumber

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

export type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;
