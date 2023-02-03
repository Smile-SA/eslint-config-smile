interface IFoo {
  foo?: string;
}

function run(foo?: IFoo, bar?: number): void {
  if (bar === 42) {
    console.log(`Hello world`);
  }
}

run();
