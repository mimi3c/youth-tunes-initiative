const day1 = "Students learn to read music and play immersive games to reinforce their understanding, then use their new knowledge of notes to play a short piece on the recorder.";
const day2 = "Students learn basic rhythm patterns (quarter notes, half notes, and whole notes) and do group activities to solidify their knowledge.";
const day3 = "Students learn vocal warm-ups, the solfege scale, and different components of choir singing.";
const day4 = "Students incorporate newly learned knowledge of rhythm with movement through a short dance.";

const eventslist = [
    {
        town: "Linden",
        events: [
            {
                month: 1,
                day: 20,
                year: 24,
                time: "01:00-02:00",
                desc: day1
            },
            {
                month: 2,
                day: 10,
                year: 24,
                time: "03:00-04:00",
                desc: day2
            }
        ]
    },
    {
        town: "Union",
        events: [
            {
                month: 1,
                day: 15,
                year: 24,
                time: "05:00-06:00",
                desc: day3
            },
            {
                month: 3,
                day: 25,
                year: 24,
                time: "07:00-08:00",
                desc: day4
            }
        ]
    },
    {
        town: "Kenilworth",
        events: [
            {
                month: 5,
                day: 3,
                year: 24,
                time: "09:00-10:00",
                desc: day2
            },
            {
                month: 5,
                day: 27,
                year: 24,
                time: "11:00-12:00",
                desc: day3
            }
        ]
    }
]

export default eventslist;