function sayHello(userName, age) {
  if (age < 18) {
    console.log("This App Is Not Suitable for you");
  } else {
    console.log(`Hello ${userName} Your Age Is ${age}`);
  }
}
sayHello("Karim", 30);
sayHello("Ayman", 40);
sayHello("Ahmed", 15);

function generateYears(start, end, exclude) {
  for (i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}
generateYears(2000, 2022, 2020);
