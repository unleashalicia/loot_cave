import '../assets/css/card.css';

import goldChest from '../assets/images/Gold_Chest.png';
import diamonds from '../assets/images/diamonds.png';
import pearls from '../assets/images/pearls.png';
import crown from '../assets/images/crown.png';
import chainmail from '../assets/images/chainmail.png';
import sword from '../assets/images/sword.png';
import dragonHead from '../assets/images/dragon-head.jpg';
import dragonBody from '../assets/images/dragon-body.jpg';
import dragonTail from '../assets/images/dragon-tail.jpg';

export default [
    {
        image: goldChest,
        alt: "gold_chest",
        type: "treasure",
        worth: 50,
        flipped: false,
        matched: false
    },
    {
        image: diamonds,
        alt: "diamonds",
        type: "treasure",
        worth: 100,
        flipped: false,
        matched: false
    },
    {
        image: pearls,
        alt: "pearls",
        type: "treasure",
        worth: 20,
        flipped: false,
        matched: false
    },
    {
        image: crown,
        alt: "crown",
        type: "treasure",
        worth: 40,
        flipped: false,
        matched: false
    },
    {
        image: chainmail,
        alt: "chainmail",
        type: "armor",
        worth: 10,
        flipped: false,
        matched: false
    },
    {
        image: sword,
        alt: "sword",
        type: "weapon",
        worth: 10,
        flipped: false,
        matched: false
    },
    {
        image: dragonHead,
        alt: "dragon_head",
        type: "dragon",
        flipped: false,
        matched: false
    },
    {
        image: dragonBody,
        alt: "dragon_body",
        type: "dragon",
        flipped: false,
        matched: false
    },
    {
        image: dragonTail,
        alt: "dragon_tail",
        type: "dragon",
        flipped: false,
        matched: false
    }
];