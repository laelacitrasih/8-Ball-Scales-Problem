function findBiggerBall(arrBalls){
  
  //validate array
  if (arrBalls.length != 8){
    return "Invalid input. Jumlah bola harus 8"
  } 

  //grouping balls
  //first group (G1) consist 1st, 2nd and 3rd element
  //second group (G2) consit 4th, 5th, 6th element
  //third group (G3) consist 7th and 8th element

  //FIRST MEASUREMENT
  //compare G1 and G2 weight
  sumG1 = arrBalls[0] + arrBalls[1] + arrBalls[2]
  sumG2 = arrBalls[3] + arrBalls[4] + arrBalls[5]

  //there will be 3 condition
  //G1 == G2 , G1 < G2 , G1 > G2

  if (sumG1 == sumG2){
    if (arrBalls[6] > arrBalls[7]){
      return "Bola ke 7 lebih berat"
    } else if (arrBalls[6] < arrBalls[7]) {
      return "Bola ke 8 lebih berat"
    }
  } else if (sumG1 < sumG2){
    if (arrBalls[3] == arrBalls[4]){
      return "Bola ke 6 lebih berat"
    } else if (arrBalls[5] == arrBalls[4]){
      return "Bola ke 4 lebih berat"
    } else if (arrBalls[3] == arrBalls[5]){
      return "Bola ke 5 lebih berat"
    }
  } else if (sumG1 > sumG2){
    if (arrBalls[0] == arrBalls[1]){
      return "Bola ke 3 lebih berat"
    } else if (arrBalls[2] == arrBalls[1]){
      return "Bola ke 1 lebih berat"
    } else if (arrBalls[0] == arrBalls[2]){
      return "Bola ke 2 lebih berat"
    }
  }

  return "Invalid input. Harus ada 1 bola yang lebih berat dari 7 lainnya"

}


/* 
testCase1 = [10,10,10,10,10,10,10,10,10] //invalid -> length array > 8
testCase2 = [10,10,10,10,10,10,10] //invalid -> length array < 8
testCase3 = [10,10,10,10,10,10,10,10] //invalid -> semua nilai sama
testCase4 = [11,10,10,10,10,10,10,10]
testCase5 = [10,11,10,10,10,10,10,10]
testCase6 = [10,10,11,10,10,10,10,10]
testCase7 = [10,10,10,11,10,10,10,10]
testCase8 = [10,10,10,10,11,10,10,10]
testCase9 = [10,10,10,10,10,11,10,10]
testCase10 = [10,10,10,10,10,10,11,10]
testCase11 = [10,10,10,10,10,10,10,11]
testCase12 = [10,10,10,10,10,10,11,11] //invalid -> array memiliki 2 nilai yang lebih besar dari 6 nilai yang lain
 */

testCase1 = [10,10,10,10,10,10,10,10,10] //invalid
console.log('Test Case 1 : ', testCase1)
console.log('Result : ', findBiggerBall(testCase1))

testCase2 = [10,10,10,10,10,10,10] //invalid
console.log('Test Case 2 : ', testCase2)
console.log('Result : ', findBiggerBall(testCase2))

testCase3 = [10,10,10,10,10,10,10,10] //invalid
console.log('Test Case 3 : ', testCase3)
console.log('Result : ', findBiggerBall(testCase3))

testCase4 = [11,10,10,10,10,10,10,10]
console.log('Test Case 4 : ', testCase4)
console.log('Result : ', findBiggerBall(testCase4))

testCase5 = [10,11,10,10,10,10,10,10]
console.log('Test Case 5 : ', testCase5)
console.log('Result : ', findBiggerBall(testCase5))

testCase6 = [10,10,11,10,10,10,10,10]
console.log('Test Case 6 : ', testCase6)
console.log('Result : ', findBiggerBall(testCase6))

testCase7 = [10,10,10,11,10,10,10,10]
console.log('Test Case 7 : ', testCase7)
console.log('Result : ', findBiggerBall(testCase7))

testCase8 = [10,10,10,10,11,10,10,10]
console.log('Test Case 8 : ', testCase8)
console.log('Result : ', findBiggerBall(testCase8))

testCase9 = [10,10,10,10,10,11,10,10]
console.log('Test Case 9 : ', testCase9)
console.log('Result : ', findBiggerBall(testCase9))

testCase10 = [10,10,10,10,10,10,11,10]
console.log('Test Case 10 : ', testCase10)
console.log('Result : ', findBiggerBall(testCase10))

testCase11 = [10,10,10,10,10,10,10,11]
console.log('Test Case 11 : ', testCase11)
console.log('Result : ', findBiggerBall(testCase11))

testCase12 = [10,10,10,10,10,10,11,11] //invalid
console.log('Test Case 12 : ', testCase12)
console.log('Result : ', findBiggerBall(testCase12))

