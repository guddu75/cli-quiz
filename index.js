#!/usr/bin/env node

/**
 * 
 * @author Debapriya Majumder
 * 
 */

const { Quiz } = require('enquirer');
const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');
const alert = require('terminal-alerts');

const input = cli.input;
const flags = cli.flags;

const { clear , debug } = flags;


(async () => {

    init({clear});
    input.includes(`help`) && cli.showHelp(0);

    const prompt = new Quiz({
        message : `How many bitcoin will ever be created ?`,
        choices : [`2 billion` , `21 billion` , `21 million` , `10 million`],
        correctChoice : 2
    });

    prompt
        .run()
        .then(answer => {
        if (answer.correct) {
            alert({
                type: `success`,
                name : ` CORRECT `,
                msg : `You selected the correct choice`
            });
        } else {
            alert({
                type: `error`,
                name : ` WRONG `,
                msg : `Correct answer is ${answer.correctAnswer}`
            });
        }
    })
    .catch(console.error);

    debug && log(flags);

})();