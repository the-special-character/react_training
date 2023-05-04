class Auth {
  #login() {
    console.log("login success");
  }
  #logout() {
    console.log("logout success");
  }
  *authFlow() {
    yield this.#login();
    yield this.#logout();
  }
}

const auth = new Auth();

const authFlow = auth.authFlow();

authFlow.next();
authFlow.next();

// function* test() {
//   try {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//   } catch (error) {
//     console.log(error);
//   }
// }

// const gen = test();

// console.log(gen.next());
// console.log(gen.next());
// gen.throw(new Error("something went wrong..."))

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

// // console.log(test());
