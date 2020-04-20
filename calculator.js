<script>
 function logic() {
  //console.clear();
  var formula1 = 20000 / 8;
  var formula2 = +abilityScore.value + +incenseDays.value;
  var formula3 = +abilityScore.value + +mentorDays.value;
  var formula4 = +abilityScore.value + +uniDays.value;
  var formulaD = formula1 / +abilityScore.value;
  var formulaE = formula1 / formula2;
  var formulaF = formula1 / formula3;
  var formulaG = formula1 / formula4;
  var formulaI = 1 / formulaD;
  var formulaJ = +daysAlone.value * formulaI;
  var formulaL = 1 / formulaE;
  var formulaM = +daysIncense.value * formulaL;
  var formulaO = 1 / formulaF;
  var formulaP = +daysMentor.value * formulaO;
  var formulaQ = 1 / formulaG;
  var formulaR = +daysUni.value * formulaQ;
  var formulaS = (+daysAlone.value + +daysIncense.value + +daysMentor.value + +daysUni.value);
  var formulaT = formulaJ + formulaM + formulaP + formulaR;
  //console.log(formula1);
  //console.log(formula2);
  //console.log(formula3);
  //console.log(formula4);
  //console.log(formulaD);
  //console.log(formulaE);
  //console.log(formulaF);
  //console.log(formulaG);
  //console.log(formulaI);
  //console.log(formulaJ);
  //console.log(formulaL);
  //console.log(formulaM);
  //console.log(formulaO);
  //console.log(formulaP);
  //console.log(formulaQ);
  if (abilityScore.value == "") {
    percentComplete.value = "";
  } else {
    skill.value = 100 * formulaT;
    percentComplete.value = `${(formulaT * 100).toFixed()}%`;
    {
      if (formulaS > 0) {
        totalDays.value = "";
      } else {
        totalDays.value = formulaS;
      }
    }
    {
      if (incenseDays.value == "") {
        costIncense.value = "0";
      } else {
        costIncense.value = 50 * +daysIncense.value;
      }
      if (mentorDays.value == "") {
        costMentor.value = "0";
      } else {
        costMentor.value = 5 * +daysMentor.value;
      if (uniDays.value == "") {
        costUni.value = "0";
      } else {
        costUni.value = 55 * +daysUni.value;
      }
      }
    }
  }
}
setInterval(logic, 1000);
logic();
</script>
