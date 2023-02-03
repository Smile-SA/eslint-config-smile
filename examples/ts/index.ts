interface Foo {
  foo?: string;
}

function run(foo?: Foo, bar?: number): void {
  if (bar === 42) {
    console.log(`Hello world`);
  }
}

run();
