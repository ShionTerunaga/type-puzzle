/**
 * Q1
 */
interface Person {
  name: string;
  age: number;
}

type A = Person["name"];

/**
 * Q2
 */
interface Book {
  title: string;
  author: string;
  published: number;
}

type BookKeys = keyof Book;
const book1: BookKeys = "title";
const book2: BookKeys = "author";
const book3: BookKeys = "published";

/**
 * Q3
 */
type Settings = {
  darkMode: boolean;
  language: string;
  volume: number;
};

type SettingValue = Settings[keyof Settings];
const darkMode: SettingValue = true;
const language: SettingValue = "japanese";
const volume: SettingValue = 3;
//const dummy:SettingValue=[1,2,3]

/**
 * Q4
 */
type User = {
  id: number;
  name: string;
  password: string;
};

type Published = Omit<User, "password">;
const user: Published = {
  id: 1,
  name: "Taro",
};
