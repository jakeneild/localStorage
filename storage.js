const hID = {};

hID.furniture = [];
hID.crafts = [];

const vintageInkwell = {
name: "Vintage Ink Well",
location: "Writing desk",
description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
}

const specialPoster = {
    name: "Poster",
    location: "Living Room",
    description: "Wooden poster with writing"
}

// The writing desk is a furniture data item
const writingDesk = {
    name: "Shaker Writing Desk",
    location: "Bedroom",
    description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
}

const bed = {
    name: "My bed",
    location: "Bedroom",
    descrition: "A large king sized bed"
}

hID.crafts.push(vintageInkwell);
hID.crafts.push(specialPoster);
hID.furniture.push(writingDesk);
hID.furniture.push(bed);

const saveDatabase = function (databaseObject, localStorageKey) {
    /*
        Convert the Object into a string.
    */
    const stringifiedDatabase = JSON.stringify(databaseObject)

    /*
        Create a key in local storage, and store the string
        version of your inventory database as the value
    */
    localStorage.setItem(localStorageKey, stringifiedDatabase)
}

saveDatabase(hID, "hID");