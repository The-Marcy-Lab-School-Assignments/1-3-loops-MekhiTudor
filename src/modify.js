const whileToFor = () => {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
};
//whileToFor()
const continueGuardClause = () => {
  for (let i = 1; i < 5; i++) {
    if (i === 2 || i === 3) continue;
    console.log("Sure glad this isn't 2 or 3");
    console.log(i);

  }
};
//continueGuardClause()

module.exports = {
  whileToFor,
  continueGuardClause,
};
