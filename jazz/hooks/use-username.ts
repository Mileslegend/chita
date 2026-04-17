import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const ANIMALS = [
  "cat",
  "dog",
  "fox",
  "bear",
  "lion",
  "tiger",
  "wolf",
  "rabbit",
  "panda",
  "koala",
  "giraffe",
  "elephant",
  "monkey",
  "zebra",
  "hippo",
  "rhino",
];

const STORAGE_KEY = "jazz-username";

const generateUsername = () => {
  const word = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  return `anonymous-${word}-${nanoid(4)}`;
};


export const useUsername = () => {
    const [username, setUsername] = useState("");

     useEffect(() => {
        const main = () => {
          const stored = localStorage.getItem(STORAGE_KEY);
          if (stored) {
            setUsername(stored);
            return;
          }
    
          const generated = generateUsername();
          localStorage.setItem(STORAGE_KEY, generated);
          setUsername(generated);
        };
    
        main();
        
      }, []);

      return { username }
}