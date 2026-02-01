import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nicknames = [
    "Chakkare", "Ponnu", "Muthe", "Kanmani", "Priye",
    "Beautiful", "Cutiepie", "Gorgeous", "My Love", "Sweetheart",
    "Babe", "Honey", "Darling", "Angel"
];

const templates = [
    "You are the most [adj] person I know.",
    "I love your [feature].",
    "You make [activity] feel like a dream.",
    "Every day with you is [adj].",
    "I'm so lucky to have a girlfriend who is so [adj].",
    "Your smile is [adj].",
    "I miss you more than [noun].",
    "You are my [noun].",
    "I love how [adj] you are.",
    "You're the specific kind of [adj] that I love."
];

const adjectives = [
    "amazing", "beautiful", "caring", "delightful", "extraordinary", "funny", "gorgeous",
    "heartwarming", "incredible", "joyful", "kind", "lovely", "magnificent", "nice",
    "outstanding", "precious", "quietly strong", "resilient", "smart", "talented",
    "unique", "vibrant", "wonderful", "exceptional", "radiant", "charming"
];

const nurseCompliments = [
    "You're going to be the best NP the world has ever seen.",
    "Your patients are so lucky to have you caring for them.",
    "I admire how hard you study to save lives.",
    "You look cute even when you're tired from a 12-hour shift.",
    "Your compassion is your superpower.",
    "Brains and beauty—you're the total package.",
    "I love that you're chasing your dreams.",
    "Medicine is lucky to have you.",
    "You heal people just by being there.",
    "Smartest nurse in the room, always."
];

const scrabbleCompliments = [
    "You definitely score a triple word score in my heart.",
    "I'd let you win at Scrabble any day (maybe).",
    "You're the Q to my U.",
    "No word can describe how much I love you.",
    "You're 'Z' best.",
    "You put the 'Win' in our relationship."
];

const longDistanceCompliments = [
    "Distance means so little when you mean so much.",
    "I'm counting down the seconds until I see you.",
    "Chicago is lucky to have you, but NY misses you.",
    "Every mile between us is just a reminder of how strong we are.",
    "I can't wait to close the distance forever.",
    "You're worth every mile.",
    "My heart is always in Chicago with you."
];

const loveNotes = [
    "I love you more than yesterday.",
    "You are my forever.",
    "I want to make you happy every single day.",
    "You are the best thing that ever happened to me.",
    "Planning our wedding is going to be so fun.",
    "I can't wait to call you my wife.",
    "You're my favorite person.",
    "I choose you. And I'll choose you over and over."
];

function generateCompliments(count) {
    const compliments = new Set();

    // Add specific categories first
    nurseCompliments.forEach(c => compliments.add(c));
    scrabbleCompliments.forEach(c => compliments.add(c));
    longDistanceCompliments.forEach(c => compliments.add(c));
    loveNotes.forEach(c => compliments.add(c));

    // Generate generic variations until we hit the count
    while (compliments.size < count) {
        const template = templates[Math.floor(Math.random() * templates.length)];
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const nickname = nicknames[Math.floor(Math.random() * nicknames.length)];

        let compliment = template.replace('[adj]', adj)
            .replace('[feature]', 'heart') // simplified for now
            .replace('[activity]', 'life')
            .replace('[noun]', 'everything');

        // 20% chance to append a nickname
        if (Math.random() < 0.2) {
            compliment += `, ${nickname}.`;
        }

        compliments.add(compliment);
    }

    return Array.from(compliments);
}

const allCompliments = generateCompliments(500);
const outputPath = path.resolve(__dirname, '../public/compliments.json');

// Ensure directory exists
if (!fs.existsSync(path.dirname(outputPath))) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
}

fs.writeFileSync(outputPath, JSON.stringify(allCompliments, null, 2));
console.log(`Generated ${allCompliments.length} compliments to ${outputPath}`);
