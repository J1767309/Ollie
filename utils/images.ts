// List of all Ollie images
export const ollieImages = [
  '/Ollie/Ollie/242FACC9-0544-47E2-A18F-B9748042EB75_1_105_c.jpeg',
  '/Ollie/Ollie/4E3140A2-78B9-465A-89A2-9545804AD332_1_105_c.jpeg',
  '/Ollie/Ollie/64169F0A-DA03-4C71-9F88-02C588B1228E_1_105_c.jpeg',
  '/Ollie/Ollie/7973DC76-6CC7-46E1-BB6A-FB0E57AA1BA5_1_105_c.jpeg',
  '/Ollie/Ollie/BACDDC80-F1EF-4D1A-9B89-125336EEC2AC_1_105_c.jpeg',
  '/Ollie/Ollie/D324E125-91C2-4F4B-BD06-6C4C613AC4DE_1_105_c.jpeg',
  '/Ollie/Ollie/D9DD5A80-9F4E-4AE7-BF5F-F120607154CF_4_5005_c.jpeg',
  '/Ollie/Ollie/DF22A9D5-21DE-4E03-8200-65C74A7DA765_1_105_c.jpeg',
  '/Ollie/Ollie/Ollie.png',
];

// List of all Jawaan images
export const jawaanImages = [
  '/Ollie/Jawaan/CleanShot 2025-11-17 at 19.09.33.png',
  '/Ollie/Jawaan/CleanShot 2025-11-17 at 19.09.41.png',
  '/Ollie/Jawaan/CleanShot 2025-11-17 at 19.09.53.png',
  '/Ollie/Jawaan/CleanShot 2025-11-17 at 19.10.00.png',
  '/Ollie/Jawaan/CleanShot 2025-11-17 at 19.10.15.png',
  '/Ollie/Jawaan/Jawaan.png',
];

// Get a random image from an array
export const getRandomImage = (images: string[]): string => {
  return images[Math.floor(Math.random() * images.length)];
};

// Get a random Ollie image
export const getRandomOllieImage = (): string => {
  return getRandomImage(ollieImages);
};

// Get a random Jawaan image
export const getRandomJawaanImage = (): string => {
  return getRandomImage(jawaanImages);
};
