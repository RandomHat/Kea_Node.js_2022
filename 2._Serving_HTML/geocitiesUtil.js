let visitorCounter = 0;

export function incrementVisitorCounter() {
    visitorCounter++;
    return visitorCounter;
}

// can't use this in module type syntax.. this is commonJS syntax
/*
module.exports = {
    incrementVisitorCounter : incrementVisitorCounter
}
*/
