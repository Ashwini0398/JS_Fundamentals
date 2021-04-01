// any function that is passed as an argument is called a callback function.
// - A callback is a function that is to be executed after another function has finished executing - hence the name 'call
// back'




  const perOne = (frnd, callfrnd) => {
    console.log(
      `i m busy right now .Iam taking to ${frnd} .I will call you back`
    );
    callfrnd();
  };

  const perTwo = () => {
    console.log("Hey what's up . I call you back");
  };

  perOne("Ashu", perTwo);

