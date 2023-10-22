(() => {
  kintone.events.on(["app.record.index.show"], (event) => {
    console.log(event);
    // console.log("check build diff");
  });
})();
