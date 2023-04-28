// 1.) A capitalize function that takes a string and returns it with the first character capitalized.
function capitalize(str) {
  let toArr = str.split("");
  let firstLetter = toArr.shift();
  let firstLetterCap = firstLetter.toUpperCase();
  let remainingWord = toArr.join("");
  let newWord = firstLetterCap.concat(remainingWord);
  return newWord;
}

function reverse(str) {
  let toArr = str.split("");
  toArr.reverse();
  let newWord = toArr.join("");
  return newWord;
}

let calc = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return a / b;
  },
};

function hide(message, numberAdded){
            let cypher={
                a:1,
                b:2,
                c:3,
                d:4,
                e:5,
                f:6,
                g:7,
                h:8,
                i:9,
                j:10,
                k:11,
                l:12,
                m:13,
                n:14,
                o:15,
                p:16,
                q:17,
                r:18,
                s:19,
                t:20,
                u:21,
                v:22,
                w:23,
                x:24,
                y:25,
                z:26
            }
            let cypherEnd=[0,"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
            let splitUp=message.split("");
            let numArr=[];
            splitUp.forEach(letter => {
                if(letter!==" "){
                    letter=(cypher[letter]);
                    numArr.push(letter);
                }
                if(letter===" "){
                    numArr.push(" ");
                }
            });
            let cypherArr=[];
            numArr.forEach(num=>{
                if(num!==" "){
                    cypherArr.push(num+numberAdded);
                }
                if(num===" "){
                    cypherArr.push(" ");
                }
            });
            let cypherMessage=[];
            cypherArr.forEach(num=>{
                if(num!==" "){
                    if(num>=27){
                      num=num%26;
                      cypherMessage.push(cypherEnd[num]);
                    }else{
                        cypherMessage.push(cypherEnd[num]);
                    };
                };
                if(num===" "){
                    cypherMessage.push(" ");
                };
            });
            let endMessage=cypherMessage.join("");
            // console.log(splitUp);
            // console.log(numArr);
            // console.log(cypherArr);
            // console.log(cypherMessage);
            // console.log(endMessage);
            return endMessage;
        };

        function analyzeArray(arr){
            // console.log(arr);
            let length=arr.length; //LENGTH
            // console.log(length);
            let sum=0;
            arr.forEach(num => {
                sum+=num;
            });
            let average=sum/length; //AVERAGE
            // console.log(average);

            let arrange= arr.sort(function(a,b){return a-b});
            // console.log(arrange);
            let min=arrange[0];
            let max= arrange[arrange.length-1];
            // console.log(min);
            // console.log(max);

            let obj={
                average: average,
                min: min,
                max: max,
                length:length
            }
            return obj;
        };

export { capitalize, reverse, calc, hide, analyzeArray };
