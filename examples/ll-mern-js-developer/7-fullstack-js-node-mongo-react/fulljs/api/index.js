import express from 'express';
const router = express.Router();
import data from '../src/testData';
const contests = data.contests.reduce((obj, contest) => {
    obj[contest.id] = contest;
    return obj;
}, {});
console.log(contests);

router.get('/', (req, res) => {
    res.send({ 
        contests: contests
    });
});


router.get('/contests', (req, res) => {
    res.send({ contests: data.contests });
});


router.get('/contests/:contestId', (req, res) => {
    let contest = contests[req.params.contestId];
    contest.description = 'Some description';
    res.send({ 
        contest 
    });
});

export default router;