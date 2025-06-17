function fellAsleep(snoozing) {
    return Math.random() < snoozing;
}

function mowYard(name, callback) {
    setTimeout(() => {
        console.log(`${name} mowed the yard.`);
        callback();
    }, 2000);
}
function weedEat(name, callback) {
    setTimeout(() => {
        if (fellAsleep(0.1)) {
            console.log(`${name} fell asleep after mowing the yard.`);
        } else {
            console.log(`${name} finished using the weed eater.`);
            callback();
        }
    }, 1500);
}
function trimHedges(name, callback) {
    setTimeout(() => {
        if (fellAsleep(0.3)) {
            console.log(`${name} fell asleep after weed eating the yard.`);
        } else {
            console.log(`${name} finished trimming the hedges.`);
            callback();
        }
    }, 1000);
}
function collectWood(name, callback) {
    setTimeout(() => {
        if (fellAsleep(0.5)) {
            console.log(`${name} fell asleep after trimming the hedges.`);
        } else {
            console.log(`${name} finished collecting the wood.`);
            callback();
        }
    }, 2500);
}
function waterGarden(name, callback) {
    setTimeout(() => {
        if (fellAsleep(0.7)) {
            console.log(`${name} fell asleep after collecting wood.`);
        } else {
            console.log(`${name} finished watering the garden.`)
            callback();
        }
    }, 500);
}
function summerChores(name) {
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
}

summerChores('Forrest Gump');