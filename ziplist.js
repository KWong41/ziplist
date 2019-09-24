//  http://courses.ics.hawaii.edu/ics314f19/morea/coding-standards/experience-five-problems-2.html
//  pWOD 2:Coding Standards
//  First Attempt:25 mins (DNF)
//  Second Attempt (watching Dr. Johnson's video for support):  22:10:27 (completed)
//
//
//
//

/* First attempt

function zipList(letters, numbers) {
  let i;
  for (i = 0; i < letters.length; i++) {
    if (letters[i] == 0) {
      numbers.push(letters[i]);
    }
    numbers.push(letters[i]++);
  }
  return letters;
}
 console.log(zipList);
function zipListTheSimpleWay(){

}

*/

//  Second attempt
/*

/*

const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];

function zipList(list1, list2) {
  const resultList = [];
  for (let i = 0; i < list1.length; i++) {
    resultList.push(list1[i], list2[i]);
  }
  return resultList;
}

console.log(zipList(testList1, testList2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(testList1, testList2));

*/

const testList1 = ['a', 'b', 'c'];
const testList2 = [1, 2, 3];

function zipList(list1, list2) {
  const resultList = [];
  for (let i = 0; i < list1.length; i++) {
    resultList.push(list1[i], list2[i]);
  }
  return resultList;
}

console.log(zipList(testList1, testList2));

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipListTheSimpleWay(testList1, testList2));
