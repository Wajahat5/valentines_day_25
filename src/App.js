import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaPlay, FaPause } from 'react-icons/fa'
import './App.css'
import song from './assets/Aylex_Sounds_of_Nature.mp3'
import onBike from './assets/onBike.jpeg'
import withKinderJoy from './assets/withKinderJoy.jpeg'
import onThighs from './assets/onThighs.jpeg'
import firstDate from './assets/firstDate.jpeg'
import windsong from './assets/windsong.jpeg'
import carSelfie from './assets/carSelfie.jpeg'
import onThighs2 from './assets/onThighs2.jpeg'
import cake1 from './assets/cake1.jpeg'
import hmBar from './assets/hmBar.jpeg'
import gym from './assets/gym.jpeg'
import carSelfieSmiling from './assets/carSelfieSmiling.jpeg'
import scooty from './assets/scooty.jpeg'
import cake2 from './assets/cake2.jpeg'

const cards = [
    {
        title: 'When You Are Lonely',
        image: onBike,
        message:
            'Look up at the sky, my love. The same moon and stars shine over us both, connecting our hearts across the distance. You are never alone—I am always with you.',
    },
    {
        title: 'When You Miss Me',
        image: windsong,
        message:
            'Close your eyes and feel my love wrapping around you like a warm hug. No matter how far apart we are, my heart is always next to yours.',
    },
    {
        title: 'When You Feel Stressed',
        image: onThighs,
        message:
            'Breathe in, breathe out. Imagine my arms around you, soothing away all your worries. You’ve got this, and I believe in you, always.',
    },
    {
        title: 'When You Need a Smile',
        image: carSelfieSmiling,
        message:
            'Imagine me telling a really bad joke right now. (You are the number 1 queen!) See? You’re smiling already. You’re the most beautiful when you do.',
    },
    {
        title: 'When You Are Feeling Down',
        image: scooty,
        message:
            'You are the light of my life, and no amount of darkness can ever dim your shine. I love you more than words can ever say.',
    },
    {
        title: 'When You Need Motivation',
        image: gym,
        message:
            'You are capable of incredible things. I’ve seen your strength, your passion, and your kindness. Keep going, my love—I’m cheering for you every step of the way!',
    },
    {
        title: 'When You Want to Feel Loved',
        image: cake2,
        message:
            'If love could be measured, mine for you would reach beyond the stars. You are my everything, and I fall for you more every day.',
    },
    {
        title: 'When You Can’t Sleep',
        image: hmBar,
        message:
            'Imagine me whispering a soft lullaby in your ear, telling you how much I love you. Close your eyes, my love, and dream of us.',
    },
    {
        title: 'When You Need a Warm Hug',
        image: onThighs2,
        message:
            'Wrap yourself in a blanket and imagine it’s my arms holding you tight. One day soon, it won’t be imaginary—I’ll be there for real.',
    },
    {
        title: 'When You Want to Hear My Voice',
        image: firstDate,
        message:
            'Play our favorite song and imagine me singing along with you. My love is in every lyric, in every note, in every beat of my heart.',
    },
]

const App = () => {
    const [isPlaying, setIsPlaying] = useState(false)
    const [flipped, setFlipped] = useState(-1)
    // const audio = new Audio(song); // Replace with actual file path
    const [audio, setAudio] = useState(new Audio(song))
    audio.loop = true

    const toggleMusic = () => {
        if (isPlaying) {
            audio.pause()
        } else {
            audio.play()
        }
        setIsPlaying(!isPlaying)
    }

    const handleFlip = (index) => {
        if (index == flipped) setFlipped(-1)
        else setFlipped(index)
    }

    return (
        <div className="container">
            {/* Background animation */}
            <div className="background-animation"></div>

            {/* Heartfelt Message */}
            <motion.div
                className="message-box"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <h1>To My Love, Zafrin 💖</h1>
                <p>
                    No matter how far apart we are, our love remains
                    unshaken—woven with trust, strengthened by time, and bound
                    by the promise of forever.
                </p>
                <p>
                    Miles may separate us, but my love for you knows no bounds.
                    Every heartbeat whispers your name, and every thought holds
                    you close.
                </p>
                <p>
                    Flip these cards to reveal little pieces of my love, made
                    just for you. 💌
                </p>
            </motion.div>

            {/* Music Player */}
            <motion.div
                className="cards-container"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <button className="music-btn" onClick={toggleMusic}>
                    {isPlaying ? <FaPause /> : <FaPlay />} Music
                </button>
            </motion.div>
            {/* Flip Cards Section */}
            <motion.div
                className="cards-container"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`flip-card ${
                            flipped == index ? 'flipped' : ''
                        }`}
                        onClick={() => handleFlip(index)}
                    >
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h3>{card.title}</h3>
                            </div>
                            <div className="flip-card-back">
                                <div className="card-image">
                                    <img src={card.image} alt={card.title} />
                                </div>
                                <p>{card.message}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}

export default App
