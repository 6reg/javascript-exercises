function camelize(str) {
  let arr = str.split("-");
  console.log("arr", arr, typeof arr);
  let first = arr.shift();
  console.log("first word", first, typeof first);
  console.log("arr now", arr, typeof arr);

  let caps = arr.map(function (item) {
    let wordsToArrays = item.split("");
    console.log("wordsToArrays", wordsToArrays, typeof wordsToArrays);
    let cap = wordsToArrays.shift();
    console.log(wordsToArrays, typeof wordsToArrays);
    let back = String(wordsToArrays);
    console.log("back", back, typeof back);
    let commas = back.replace(/,/g, "");
    console.log(commas);
    cap = cap.toUpperCase();
    console.log(cap);
    let done = cap.concat(commas);
    return done;
    console.log(done, typeof done);
  });

  return first.concat(caps);
}

console.log(camelize("background-color"));
