function solution(m, musicinfos) {
  var answer = '';
  for (let i of musicinfos) {
    const musicData = i.split(',');
    const startTime = musicData[0].split(':');
    const endTime = musicData[1].split(':');
    let duration = 0;
    if (startTime[1] < endTime[1]) {
      duration = (endTime[0] - startTime[0]) * 60 + endTime[1] - startTime[1];
    } else {
      duration =
        (endTime[0] - 1 - startTime[0]) * 60 + endTime[1] + 60 - startTime[1];
    }
    let sharpCnt = 0;
    for (let j of musicData[3]) {
      if (j === '#') sharpCnt++;
    }
    const patternLength = musicData[3].length - sharpCnt;
    let song = '';
    for (j = 0; j < duration / patternLength; j++) {
      song += musicData[3];
    }
    let compCnt = 0;
    for (let j = 0; j < song.length; j++) {
      let isSharp = false;
      let comp;
      if (song[j + 1] === '#') comp = `${song[j]}#`;
      else comp = song[j];

      let mComp;
      if (m[compCnt + 1] === '#') {
        mComp = `${m[compCnt]}#`;
        isSharp = true;
      } else mComp = m[compCnt];

      if (comp == mComp && isSharp) {
        compCnt += 2;
        j++;
      } else if (comp == mComp) {
        compCnt += 1;
      } else compCnt = 0;
      if (m.length == compCnt) return musicData[2];
    }
  }
  return answer;
}

const m = 'CC#BCC#BCC#BCC#B';
const musicinfos = ['03:00,03:30,FOO,CC#B', '04:00,04:08,BAR,CC#BCC#BCC#B'];
console.log(solution(m, musicinfos));
