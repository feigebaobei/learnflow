// @flow

function foo(x): any {
  if (x) {
    return x
  }
  return 0
}

// foo('23')


type Param = {
  bar: ?string,
}
function myFunc(foo: Param): string {
  if (foo.bar) {
    // console.log("checked!");
    // return foo.bar; // Flow errors. If you remove the console.log, it works
    const bar = foo.bar
    console.log("checked!");
    return bar
  }

  return "default string";
}