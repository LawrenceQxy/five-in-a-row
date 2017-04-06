function computerAi () {
  let myScore = [];
  let computerScore = [];
  let max = 0;
  let a = 0,b = 0;
  for (let i = 0; i < 15; i++) {
    myScore[i] = [];
    computerScore[i] = [];
    for (let j = 0; j < 15; j++) {
      myScore[i][j] = 0;
      computerScore[i][j] = 0;
    }
  }
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      if (save[i][j] == 0) {
        for (let k = 0; k < count; k++) {
          if (win[i][j][k]) {
            if (myWin[k] == 1) {
              myScore[i][j] += 10;
            }else if (myWin[k] == 2) {
              myScore[i][j] += 100;
            }else if (myWin[k] == 3) {
              myScore[i][j] += 1000;
            }else if (myWin[k] == 4) {
              myScore[i][j] += 40000;
            }
          }
          if (win[i][j][k]) {
            if (ComputerWin[k] == 1) {
              computerScore[i][j] += 15;
            }else if (ComputerWin[k] == 2) {
              computerScore[i][j] += 150;
            }else if (ComputerWin[k] == 3) {
              computerScore[i][j] += 1500;
            }else if (ComputerWin[k] == 4) {
              computerScore[i][j] += 45000;
            }
          }
        }
        if (myScore[i][j] > max) {
          max = myScore[i][j];
          a = i;
          b = j;
        }else if (myScore[i][j] == max) {
          if (computerScore[i][j] > computerScore[a][b]) {
            a = i;
            b = j;
          }
        }
        if (computerScore[i][j] > max) {
          max = computerScore[i][j];
          a = i;
          b = j;
        }else if (computerScore[i][j] == max) {
          if (myScore[i][j] > myScore[a][b]) {
            a = i;
            b = j;
          }
        }
      }
    }
  }
  drawChese(a,b,false);
  save[a][b] = 2;
  for (let k = 0; k < count; k++) {
    if (win[a][b][k]) {
      ComputerWin[k]++;
      myWin[k] = 'noWay';
      if (ComputerWin[k] == 5) {
        alert('计算机赢了！！！')
        over = true;
      }
    }
  }
  if (!over) {
    me = !me;
  }
}
