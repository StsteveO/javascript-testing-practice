import {
  capitalize,
  reverse,
  calc,
  hide,
  analyzeArray,
} from "./TOP-testing-project";

test("capitalize the first letter of a word", ()=>{
    expect(capitalize("hello")).toMatch("Hello");
    expect(capitalize("world")).toMatch("World");
    expect(capitalize("steve")).toMatch("Steve");
});

test("reverse the word", ()=>{
    expect(reverse("hello")).toMatch("olleh");
    expect(reverse("world")).toMatch("dlrow");
    expect(reverse("steve")).toMatch("evets");
});

test("calculator works", ()=>{
    expect(calc.add(10,5)).toBe(15);
    expect(calc.subtract(10,5)).toBe(5);
    expect(calc.multiply(10,5)).toBe(50);
    expect(calc.divide(10, 5)).toBe(2);
});

test("cypher works", ()=>{
    expect(hide("hello world", 19)).toMatch("axeeh phkew");
    expect(hide("testing this out", 20)).toMatch("nymncha nbcm ion");
    expect(hide("this is soo cool", 7)).toMatch("aopz pz zvv jvvs");
    expect(hide("hopefully this works", 30)).toMatch("lstijyppc xlmw asvow");
});

test("analyze an array", ()=>{
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({average: 4, min: 1, max: 8, length: 6});
});

