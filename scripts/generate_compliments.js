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
    "Smartest nurse in the room, always.",
    "I'm so proud of the NP you're becoming.",
    "Your dedication to your patients inspires me every day.",
    "You make scrubs look like a fashion statement.",
    "The world needs more nurses like you.",
    "Your heart is as big as your brain.",
    "I love watching you grow into the incredible NP you're meant to be.",
    "You're going to change so many lives.",
    "Every patient you touch is blessed.",
    "Your strength amazes me.",
    "You're my hero in scrubs."
];

const scrabbleCompliments = [
    "You definitely score a triple word score in my heart.",
    "I'd let you win at Scrabble any day (maybe).",
    "You're the Q to my U.",
    "No word can describe how much I love you.",
    "You're 'Z' best.",
    "You put the 'Win' in our relationship.",
    "You always find the perfect word, in Scrabble and in life.",
    "I'm always impressed by your vocabulary and your heart.",
    "You play Scrabble like you live life—strategically and beautifully.",
    "Every moment with you is worth infinite points."
];

const longDistanceCompliments = [
    "Distance means so little when you mean so much.",
    "I'm counting down the seconds until I see you.",
    "Chicago is lucky to have you, but NY misses you.",
    "Every mile between us is just a reminder of how strong we are.",
    "I can't wait to close the distance forever.",
    "You're worth every mile.",
    "My heart is always in Chicago with you.",
    "800 miles can't dim what we have.",
    "I fall asleep thinking of you and wake up missing you.",
    "The distance just makes my love grow stronger.",
    "I'd cross a thousand miles just to see your smile.",
    "You make long distance feel like nothing.",
    "Can't wait until we're in the same city for good.",
    "Every FaceTime with you is the best part of my day.",
    "Missing you is my least favorite hobby."
];

const loveNotes = [
    "I love you more than yesterday.",
    "You are my forever.",
    "I want to make you happy every single day.",
    "You are the best thing that ever happened to me.",
    "Planning our wedding is going to be so fun.",
    "I can't wait to call you my wife.",
    "You're my favorite person.",
    "I choose you. And I'll choose you over and over.",
    "You make every day brighter.",
    "I'm so lucky to love you.",
    "You're my dream come true.",
    "I love the way you laugh.",
    "You're the most beautiful person I know, inside and out.",
    "I can't imagine life without you.",
    "You're my best friend and my soulmate.",
    "Every moment with you is a gift.",
    "You make me want to be a better person.",
    "I love you more than words can say.",
    "You're my everything.",
    "I'm so grateful for you."
];

const generalCompliments = [
    "Your smile lights up my world.",
    "You're incredibly smart.",
    "I love how funny you are.",
    "You're so talented.",
    "You have the kindest heart.",
    "You're absolutely gorgeous.",
    "I love your laugh.",
    "You're amazing at everything you do.",
    "You inspire me every day.",
    "You're so thoughtful.",
    "I love how caring you are.",
    "You're the most beautiful woman I've ever seen.",
    "You make me so happy.",
    "I love your energy.",
    "You're so creative.",
    "You have the best sense of humor.",
    "You're incredibly strong.",
    "I love your passion.",
    "You're so genuine.",
    "You make everything better.",
    "I love how you see the world.",
    "You're so graceful.",
    "You have such a warm heart.",
    "I love your intelligence.",
    "You're so fun to be around.",
    "You're absolutely radiant.",
    "I love your kindness.",
    "You're so special to me.",
    "You're one of a kind.",
    "I love everything about you."
];

function generateMoreCompliments(base, count) {
    const templates = [
        "You are the most {adj} person I know.",
        "I love your {feature}.",
        "You make {activity} feel like a dream.",
        "Every day with you is {adj}.",
        "I'm so lucky to have a girlfriend who is so {adj}.",
        "Your {feature} is {adj}.",
        "I love how {adj} you are.",
        "You're the specific kind of {adj} that I love.",
        "I can't get enough of your {feature}.",
        "You're {adj} in the best way possible."
    ];

    const adjectives = [
        "amazing", "beautiful", "caring", "delightful", "extraordinary", "funny", "gorgeous",
        "heartwarming", "incredible", "joyful", "kind", "lovely", "magnificent", "nice",
        "outstanding", "precious", "quietly strong", "resilient", "smart", "talented",
        "unique", "vibrant", "wonderful", "exceptional", "radiant", "charming", "brilliant",
        "captivating", "dazzling", "elegant", "fabulous", "graceful", "inspiring"
    ];

    const features = [
        "smile", "eyes", "laugh", "heart", "mind", "spirit", "soul", "energy",
        "personality", "voice", "presence", "kindness", "strength", "wisdom"
    ];

    const activities = [
        "life", "every moment", "every day", "being together", "our future"
    ];

    const generated = [];
    while (generated.length < count) {
        const template = templates[Math.floor(Math.random() * templates.length)];
        const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const feature = features[Math.floor(Math.random() * features.length)];
        const activity = activities[Math.floor(Math.random() * activities.length)];

        let compliment = template
            .replace('{adj}', adj)
            .replace('{feature}', feature)
            .replace('{activity}', activity);

        // 15% chance to append a nickname
        if (Math.random() < 0.15) {
            const nickname = nicknames[Math.floor(Math.random() * nicknames.length)];
            compliment += `, ${nickname}.`;
        }

        if (!base.includes(compliment)) {
            generated.push(compliment);
        }
    }

    return generated;
}

// Combine all compliments
const allCompliments = [
    ...nurseCompliments,
    ...scrabbleCompliments,
    ...longDistanceCompliments,
    ...loveNotes,
    ...generalCompliments
];

// Generate more to reach 500
const additionalNeeded = 500 - allCompliments.length;
const additionalCompliments = generateMoreCompliments(allCompliments, additionalNeeded);
const finalCompliments = [...allCompliments, ...additionalCompliments];

const outputPath = path.resolve(__dirname, '../public/compliments.json');

// Ensure directory exists
if (!fs.existsSync(path.dirname(outputPath))) {
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
}

fs.writeFileSync(outputPath, JSON.stringify(finalCompliments, null, 2));
console.log(`Generated ${finalCompliments.length} compliments to ${outputPath}`);
