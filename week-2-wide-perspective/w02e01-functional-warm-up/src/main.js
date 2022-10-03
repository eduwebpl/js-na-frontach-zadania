import { usersData } from './data-store/users.js';
import { fruitsData } from './data-store/fruits.js';
import { randomAlbumData } from './data-store/music-album.js';

// Do wyliczenia danych poniżej użyj faktycznego źródła: randomAlbumData

const getAlbumData = (data) => ({
  title: data.title,
  artist: data.artist?.name,
  tracksNo: data.tracks.length,
  duration: data.tracks.reduce(
    (duration, nextTrack) => duration + Number(nextTrack.duration),
    0
  ),
  shortestTrack: data.tracks.reduce((shortestTrack, nextTrack) =>
    shortestTrack.duration < nextTrack.duration ? shortestTrack : nextTrack
  ),
});

const { title, artist, tracksNo, duration, shortestTrack } =
  getAlbumData(randomAlbumData);

console.log(`-- Album Info -- 
Name: ${title}
Artist: ${artist}
Number of tracks: ${tracksNo}
Total album duration: ${duration}
Shortest track: "${shortestTrack.title}"
`);

const getFruitsInfo = (data = []) => {
  return data.reduce(
    (dataSummary, fruitItem = { name: 'Name' }) => ({
      families: dataSummary.families.includes(fruitItem.family)
        ? dataSummary.families
        : [...dataSummary.families, fruitItem.family],
      startsWithG: !fruitItem.name.match(/^g\w+/i)
        ? dataSummary.startsWithG
        : [...dataSummary.startsWithG, fruitItem.name],
      lowestCalories:
        dataSummary.lowestCalories &&
        dataSummary.lowestCalories.nutritions.calories <
          fruitItem.nutritions.calories
          ? dataSummary.lowestCalories
          : fruitItem,
    }),
    {
      families: [],
      startsWithG: [],
      lowestCalories: undefined,
    }
  );
};

const { families, startsWithG, lowestCalories } = getFruitsInfo(fruitsData);

// Do wyliczenia danych poniżej użyj faktycznego źródła: fruitsData
console.log(`-- Fruits Info -- 
All fruit families: ${families}
All fruit starts with "g": ${startsWithG}
Lowest calories: ${lowestCalories.name}, ${lowestCalories.nutritions.calories} calories
`);

const getUsersData = (data = []) => {
  return data.reduce(
    (usersData, user) => ({
      names: [
        ...usersData.names,
        user.name
          .split(' ')
          .filter((namePart) => !namePart.match(/^mrs?/i))
          .shift(),
      ],
      shortestWebsite:
        usersData.shortestWebsite &&
        usersData.shortestWebsite.length < user.website.length
          ? usersData.shortestWebsite
          : user.website,
    }),
    { names: [], shortestWebsite: undefined }
  );
};

const { names, shortestWebsite } = getUsersData(usersData);

// Do wyliczenia danych poniżej użyj faktycznego źródła: usersData
console.log(`-- Users Info -- 
All user names: ${names}
User shortest website name: ${shortestWebsite}
`);
