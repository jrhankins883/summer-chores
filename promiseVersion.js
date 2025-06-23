function fellAsleep(snoozing) {
    return Math.random() < snoozing;
}

function mowYard(name) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${name} mowed the yard.`);
        }, 2000);
    });    
}
function weedEat(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fellAsleep(0.1)) {
                reject(`${name} fell asleep after mowing the yard.`);
            } else {
                resolve(`${name} finished using the weed eater.`);
            }
        }, 1500);
    });
}

function trimHedges(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fellAsleep(0.3)) {
                reject(`${name} fell asleep after weed eating the yard.`);
            } else {
                resolve(`${name} finished trimming the hedges.`);
            }
        }, 1000);
    });
}

function collectWood(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fellAsleep(0.5)) {
                reject(`${name} fell asleep after trimming the hedges.`);
            } else {
                resolve(`${name} finished collecting the wood.`);
            }
        }, 2500);
    });
}

function waterGarden(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fellAsleep(0.7)) {
                reject(`${name} fell asleep after collecting wood.`);
            } else {
                resolve(`${name} finished watering the garden.`)
            }
        }, 500);
    });
}

/*function summerChores(name) {
    mowYard(name, () => {
        weedEat(name, () => {
            trimHedges(name, () => {
                collectWood(name, () => {
                    waterGarden(name, () => {
                        console.log(`${name} finished all their chores.`);
                    });
                });
            });
        });
    });
}*/

function summerChores(name) {
    mowYard(name)
    .then(result => {
        console.log(result);
        return weedEat(name);
    })
    .then(result => {
        console.log(result);
        return trimHedges(name);
    })
    .then(result => {
        console.log(result);
        return collectWood(name);
    })
    .then(result => {
        console.log(result);
        return waterGarden(name);
    })
    .then(result => {
        console.log(result);
        console.log(`${name} finished all their chores.`);        
    })
    .catch(error => {
        console.log(error);
    });
}

summerChores('Forrest Gump');