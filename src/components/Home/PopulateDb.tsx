import faker from "faker";
import { asyncForEach } from "helpers/asyncForEach";
import { fs, getFsId } from "lib/firebase";
import chunk from "lodash/chunk";
import uniq from "lodash/uniq";
import * as React from "react";

const firstNames = [
  "Undram",
  "Oyu",
  "Uyanga",
  "Munkhsoyol",
  "Ariunbileg",
  "Tsengel",
  "Sarnai",
  "Aminjargal",
  "Dolgion",
  "Altansor",
  "Baigal",
  "Gerel",
  "Khaliun",
  "Munkhtuya",
  "Enkhjin",
  "Zolzaya",
  "Delgermaa",
  "Ariuntungalag",
  "Nomingerel",
  "Undral",
  "Naranzul",
  "Solongo",
  "Bolor",
  "Unurjargal",
  "Purevsuren",
  "Oyuntuya",
  "Tsermaa",
  "Amirlan",
  "Nomin-Erdene",
  "Enkhzul",
  "Khulangoo",
  "Sugar",
  "Munkhchimeg",
  "Oyungerel",
  "Manduhai",
  "Amarjargal",
  "Nansalmaa",
  "Otgontsetseg",
  "Myagmargerel",
  "Dulguun",
  "Purevdulam",
  "Dulamsuren",
  "Gandolgor",
  "Tsengelmaa",
  "Tuul",
  "Narantsetseg",
  "Otgontuya",
  "Tsetsegjargal",
  "Nominjin",
  "Sumiya",
  "Sunjidmaa",
  "Norjin",
  "Bayarmaa",
  "Khandsuren",
  "Tungalag",
  "Solongo",
  "Shurenchimeg",
  "Tsogzolmaa",
  "Khongorzul",
  "Enkhdelger",
  "Gantogoo",
  "Odonchimeg",
  "Dolgorsuren",
  "Bolormaa",
  "Badamgarav",
  "Tsatsral",
  "Narangarav",
  "Munguntsetseg",
  "Maralmaa",
  "Bolortsetseg",
  "Gereltuya",
  "Pagmadulam",
  "Urantsetseg",
  "Unurzaya",
];

const lastNames = [
  "Baatar",
  "Jamsran",
  "Demberel",
  "Munkhbayar",
  "Baldorj",
  "Odsuren",
  "Batjargal",
  "Uuganbayar",
  "Bat-Ulzii",
  "Batsaikhan",
  "Chuluunbaatar",
  "Buyanjargal",
  "Ganbaatar",
  "Chinbold",
  "Tsedendorj",
  "Enkhbayar",
  "Altangerel",
  "Mukhbold",
  "Nasandorj",
  "Boldmunkh",
  "Amartuvshin",
  "Javkhlan",
  "Dorjgotov",
  "Ulziibat",
  "Enkhbat",
  "Davaakhuu",
  "Nyamjav",
  "Erdenebat",
  "Batkhurel",
  "Dashdondog",
  "Myagmarjav",
  "Sodnom",
  "Dambadorj",
  "Choijamts",
  "Sanjaadorj",
  "Boldbaatar",
  "Purevjav",
  "Enkhtaivan",
  "Ser-Od",
  "Ochirbat",
  "Demberel",
  "Baasandorj",
  "Jamiyan",
  "Tuvshintur",
  "Sandag",
  "Tumenbayar",
  "Baatarjav",
];

const getRandomLetter = (n: number) => {
  const num = Math.floor(Math.random() * n);
  return String.fromCharCode(97 + num);
};

const populate = async () => {
  interface Person {
    personal: any;
    interests: any;
    professional: any;
    skills: any;
    availability: any;
  }
  const arr: Person[] = [];
  for (let i = 0; i < 3500; i++) {
    const firstName = faker.random.arrayElement(firstNames);
    const lastName = faker.random.arrayElement(lastNames);
    const personal = {
      firstName,
      lastName,
      gender: getRandomLetter(2),
      phone: faker.phone.phoneNumber(),
      social: faker.internet.userName(firstName, lastName),
      country: faker.address.countryCode(),
      ageRange: getRandomLetter(8),
      bio: faker.lorem.paragraph(),
      email: faker.internet.email(firstName, lastName),
      photo: faker.image.avatar(),
    };
    const interests = {
      interests: getRandomLetter(4),
      roles: uniq([
        getRandomLetter(15),
        getRandomLetter(15),
        getRandomLetter(15),
      ]),
      activities: uniq([
        getRandomLetter(15),
        getRandomLetter(15),
        getRandomLetter(15),
      ]),
    };
    const professional = {
      title: faker.name.jobTitle(),
      education: getRandomLetter(8),
      status: getRandomLetter(7),
      schoolOrg: faker.company.companyName(),
      occupation: getRandomLetter(10),
      field: getRandomLetter(17),
    };
    const skills = {
      softSkills: uniq([
        getRandomLetter(13),
        getRandomLetter(13),
        getRandomLetter(13),
      ]),
      hardSkills: uniq([
        getRandomLetter(19),
        getRandomLetter(19),
        getRandomLetter(19),
      ]),
    };
    const availability = {
      days: getRandomLetter(5),
      times: getRandomLetter(7),
      contact: uniq([
        getRandomLetter(5),
        getRandomLetter(5),
        getRandomLetter(5),
      ]),
      feedback: faker.lorem.sentence(),
    };
    arr.push({
      personal,
      interests,
      professional,
      skills,
      availability,
    });
  }
  const chunks = chunk(arr, 300);
  await asyncForEach(chunks, async (arr: Person[], i: number) => {
    const batch = fs.batch();
    arr.forEach((person) => {
      const id = getFsId();
      batch.set(fs.doc(`profile/${id}`), person);
    });
    await batch.commit();
    console.log(i);
  });
  console.log("done");
};

const PopulateDb = () => {
  const handleClick = () => {
    populate();
  };

  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default PopulateDb;
