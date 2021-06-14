const gifts = {
    one: [],
    two: [],
    three: [],
}

class GiftExchange {

    static async tallyVotes() {
        //handling calculating the final results for our poll
        // and return those results

        const votingResults = {
            
            one: gifts.one.length,
            two: gifts.two.length,
            three: gifts.three.length,      
        }

        return votingResults;
    }

    static async recordVote(gname, user) {
        // increment the gift name that was voted for 
        // and return the final results

        if(gifts[gname]) {
            if (!gifts[gname].includes(user)) {
                gifts[gname].push(user);
            }
        }

        return GiftExchange.tallyVotes();
    }
}

module.exports = GiftExchange;