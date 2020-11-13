import shuffle from "./shuffle";

const processImages3 = async (images, typeArray, level) => {
  let numberOfButtons = 5;
  if (level === "3") numberOfButtons = 9;
  if (level === "2") numberOfButtons = 5;
  if (level === "1") numberOfButtons = 3;

  const allImages = [];

  await images.forEach((docSnapshot) => {
    const shuffledTypes = shuffle(typeArray);
    const filteredWrongTypes = shuffledTypes.filter(
      (data) => data !== docSnapshot.data().type
    );
    const slicedShuffledWrongTypes = filteredWrongTypes.slice(
      0,
      numberOfButtons
    );

    if (level === "3") {
      allImages.push({
        photo: docSnapshot.data().photo,
        answers: {
          rightAnswer: docSnapshot.data().type,
          wrongAnswer0: slicedShuffledWrongTypes[0],
          wrongAnswer1: slicedShuffledWrongTypes[1],
          wrongAnswer2: slicedShuffledWrongTypes[2],
          wrongAnswer3: slicedShuffledWrongTypes[3],
          wrongAnswer4: slicedShuffledWrongTypes[4],
          wrongAnswer5: slicedShuffledWrongTypes[5],
          wrongAnswer6: slicedShuffledWrongTypes[6],
          wrongAnswer7: slicedShuffledWrongTypes[7],
          wrongAnswer8: slicedShuffledWrongTypes[8],

        },
      });
    } else if (level === "2") {
      allImages.push({
        photo: docSnapshot.data().photo,
        answers: {
          rightAnswer: docSnapshot.data().type,
          wrongAnswer0: slicedShuffledWrongTypes[0],
          wrongAnswer1: slicedShuffledWrongTypes[1],
          wrongAnswer2: slicedShuffledWrongTypes[2],
          wrongAnswer3: slicedShuffledWrongTypes[3],
          wrongAnswer4: slicedShuffledWrongTypes[4],
        },
      });
    } else if (level === "1") {
      allImages.push({
        photo: docSnapshot.data().photo,
        answers: {
          rightAnswer: docSnapshot.data().type,
          wrongAnswer0: slicedShuffledWrongTypes[0],
          wrongAnswer1: slicedShuffledWrongTypes[1],
          wrongAnswer2: slicedShuffledWrongTypes[2],

        },
      });
    }
  });

  const shuffledAllImages = shuffle(allImages);
  const slicedShuffledAll = shuffledAllImages.slice(0, 10);
  return slicedShuffledAll;
};

export default processImages3;
