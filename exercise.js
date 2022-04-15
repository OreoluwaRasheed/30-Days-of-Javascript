let challenge = "30 Days Of JavaScript";

console.log(challenge);

console.log(challenge.length);

console.log(challenge.toUpperCase);

console.log(challenge.toLowerCase);

console.log(challenge.substring(1, challenge.length - 1));

console.log(challenge.substring(2, challenge.length - 1));

console.log(challenge.includes("Script"));

console.log(challenge.split(""));

console.log(challenge.split(" "));

let company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";

console.log(company.split(","));

console.log(challenge.replace("JavaScript", "Python"));

console.log(challenge.charAt(15));

console.log(challenge.charCodeAt(11));

console.log(challenge.indexOf("a"));

console.log(challenge.lastIndexOf("a"));

let sentence =
  "You cannot end a sentence with because because because is a conjunction";

console.log(sentence.indexOf("because"));

console.log(sentence.lastIndexOf("because"));

console.log(sentence.search("because"));

let challengeSpaced = " 30 Days Of JavaScript ";
console.log(challengeSpaced.trim());

console.log(challenge.startsWith("30"));

console.log(challenge.endsWith("Script"));

console.log(challenge.match("a"));

let chal = "30 Days of";

let lenge = "JavaScript";

console.log(concat(chal, lenge));

console.log(repeat(challenge, 2));

console.log(
  `The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`
);

console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);

console.log(typeof "10" === typeof 10);

console.log(typeof "10" === typeof (10).toString());

console.log(parseFloat("9.8") === 10);

console.log(Math.round(parseFloat("9.8")) === 10);

console.log("python".includes("on") && "jargon".includes("on"));

let randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

let randomNumber2 = Math.floor(Math.random() * 50) + 50;
console.log(randomNumber2);

let randomNumber3 = Math.floor(Math.random() * 255);
console.log(randomNumber3);

let randomNumber4 = Math.floor(Math.random() * challenge.length);

console.log(challenge.charAt(randomNumber4));

console.log("1 1 1 1 1 \n2 1 2 4 8 \n3 1 3 9 27 \n4 1 4 16 64 \n5 1 5 25 125");

let sentence2 =
  "You cannot end a sentence with because because because is a conjunction";

console.log(
  sentence2.slice(
    sentence2.indexOf("because"),
    sentence2.lastIndexOf("because")
  )
);

//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let sentence3 =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";

console.log(sentence3.toLowerCase.match("love").length);

//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

let salary = 5000 * 12 + 15000 * 12 + 10000;

console.log(salary);

//    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const sentence4 =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

console.log(sentence4.replace(/[^a-zA-Z0-9]/g, " "));
