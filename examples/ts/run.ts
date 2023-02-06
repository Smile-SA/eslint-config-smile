interface IFoo {
  foo?: string;
}

export function run(foo?: IFoo, bar?: number): void {
  if (bar === 42) {
    console.log(`Hello world`);
  }
}
