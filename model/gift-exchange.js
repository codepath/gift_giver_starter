const participants = {
    resultPairs: [],
    resultTrad: [],
}

class GiftExchange {

    //gets array pairs
    static async getPairs(nameList) {

        //clears resultPairs
        participants.resultPairs = [];

        //nameList is an array
        let array = nameList.slice();

        //shuffling the array 
        var currentIndex = array.length,  randomIndex;
        while (0 !== currentIndex) {    // While there remain elements to shuffle...

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        //making pairs (gets the first and last element, and pairs them)
        while (array.length != 0) {

            let pair = [];

            let name1 = array.pop();
            pair.push(name1);
            let name2 = array.shift();
            pair.push(name2);

            participants.resultPairs.push(pair);

            //clears pair again after adding to resultPairs
            pair = [];
        }

        return participants.resultPairs;
    }

    //gets traditional phrases
    static async getTraditional(namePairs) {

        //clears resultTrad
        participants.resultTrad = [];

        for (let i=0; i<namePairs.length; i++) {

            let phrase1, phrase2;

            if (i == namePairs.length-1) {

                phrase1 = namePairs[i][0] + " is giving a gift to " + namePairs[i][1];
                participants.resultTrad.push(phrase1);

                phrase2 = namePairs[i][1] + " is giving a gift to " + namePairs[0][0];
                participants.resultTrad.push(phrase2);

            } else {

                phrase1 = namePairs[i][0] + " is giving a gift to " + namePairs[i][1];
                participants.resultTrad.push(phrase1);
    
                phrase2 = namePairs[i][1] + " is giving a gift to " + namePairs[i+1][0];
                participants.resultTrad.push(phrase2);
            }
        }

        return participants.resultTrad;
    }
}

module.exports = GiftExchange;