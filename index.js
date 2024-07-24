// code your solution her
superbowlWin(array); {
  const result = array.find(record => record.result === "W");
  return result ? result.year : undefined;
}

// test cases
const records = [
  { year: 2015, result: "W" },
  { year: 2014, result: "L" },
  { year: 2013, result: "W" },
  { year: 2012, result: "L" },
  { year: 2011, result: "W" },
  { year: 2010, result: "L" },
  { year: 2009, result: "L" },
  { year: 2008, result: "W" },
  { year: 2007, result: "W" },
  { year: 2006, result: "L" },
  { year: 2005, result: "L" },
  { year: 2004, result: "W" },
  { year: 2003, result: "L" },
  { year: 2002, result: "W" },
];

console.log(superbowlWin(records)); // 2015
console.log(superbowlWin([])); // undefined
console.log(superbowlWin([{ year: 2015, result: "L" }])); // undefined
console.log(superbowlWin([{ year: 2015, result: "W" }])); // 2015