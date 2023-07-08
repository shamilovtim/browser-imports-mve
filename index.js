const testAsyncImport = () => {
  import("not-exist.js")
    .then((ts) => alert(""))
    .catch((es) =>
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
