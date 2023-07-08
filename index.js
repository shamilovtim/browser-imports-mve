const testAsyncImport = () => {
  import("not-exist.js")
    .then((succ) => alert(""))
    .catch((err) =>
      alert("async import successfully tested. no unhandled exception.")
    );
};

const testConditionalImport = () => {
  if (false) {
    import("not-exist.js");
  } else {
    alert("conditional import successfully tested. no unhandled exception.");
  }
};

testAsyncImport();
testConditionalImport();
