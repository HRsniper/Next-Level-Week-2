const subjects = [
    "Materia_lorem1",
    "Materia_lorem2",
    "Materia_lorem3",
    "Materia_lorem4",
    "Materia_lorem5",
    "Materia_lorem6",
    "Materia_lorem7",
    "Materia_lorem8",
    "Materia_lorem9",
    "Materia_lorem10"
]

const weekDays = [
    "lorem-day0",
    "lorem-day1",
    "lorem-day2",
    "lorem-day3",
    "lorem-day4",
    "lorem-day5",
    "lorem-day6"
]

// funcionalidade
function getSubject(subjectNumber) {

    const position = +subjectNumber - 1;

    return subjects[position]
}

function convertHourToMinutes(time) {
    // 8:00
    // map(Number) converter "8" e "00" em 8 e 00
    // const array = hour.split(':').map(Number)
    const [hour, minutes] = time.split(':');
    // const [hour, minutes] = time.split(':').map(Number);

    const timeInMinutes = Number((hour * 60) + minutes);

    return timeInMinutes;
}

module.exports = {
    subjects,
    weekDays,
    getSubject,
    convertHourToMinutes
}