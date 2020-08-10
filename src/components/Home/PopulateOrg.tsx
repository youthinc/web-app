import faker from "faker";
import { asyncForEach } from "helpers/asyncForEach";
import { fs, getFsId } from "lib/firebase";
import chunk from "lodash/chunk";
import uniq from "lodash/uniq";
import * as React from "react";

const getRandomLetter = (n: number) => {
  const num = Math.floor(Math.random() * n);
  return String.fromCharCode(97 + num);
};

const populate = async () => {
  const arr = [];
  for (let i = 0; i < 1000; i++) {
    arr.push({
      name: faker.company.companyName(),
      intro: faker.company.catchPhrase(),
      type: getRandomLetter(10),
      sector: uniq([
        getRandomLetter(25),
        getRandomLetter(25),
        getRandomLetter(25),
      ]),
      country: faker.address.countryCode(),
      year: 2000 + Math.floor(Math.random() * 20),
      location: getRandomLetter(12),
      employees: getRandomLetter(8),
      ceo: `${faker.name.firstName()} ${faker.name.lastName()}`,
      title: faker.name.jobTitle(),
      address: faker.address.streetAddress(),
      email: faker.internet.email(),
      telephone: faker.phone.phoneNumber(),
      website: faker.internet.url(),
    });
  }
  const chunks = chunk(arr, 250);
  await asyncForEach(chunks, async (arr: any[], i: number) => {
    const batch = fs.batch();
    arr.forEach((org) => {
      const id = getFsId();
      batch.set(fs.doc(`organization/${id}`), org);
    });
    await batch.commit();
    console.log(i);
  });
  console.log("done");
};

const PopulateOrg = () => {
  const handleClick = () => {
    populate();
  };

  return (
    <div>
      <button onClick={handleClick}>click</button>
    </div>
  );
};

export default PopulateOrg;
