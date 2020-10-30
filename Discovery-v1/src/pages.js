const Database = require('./database/db');

const {
    subjects,
    weekDays,
    getSubject,
    convertHourToMinutes
} = require('./utilities/format');

function pageLanding(request, response) {
    return response.render('index.html');
}

async function study(request, response) {

    const filters = request.body;
    // console.log(filters);

    if (!filters.subject || !filters.weekDay || !filters.time) {

        return response.render('study.html', {
            filters,
            subjects,
            weekDays
        });
    }
    // console.log('nao esta vazio');

    const timeToMinutes = convertHourToMinutes(filters.time);

    const query = `
        SELECT classes.*, proffys.*
            FROM proffys
                JOIN classes ON (classes.proffy_id = proffys.id)
                    WHERE EXISTS (
                        SELECT classes_schedule.*
                        FROM classes_schedule   
                        WHERE classes_schedule.class_id = classes.id
                        AND classes_schedule.weekDay = ${filters.weekDay}
                        AND classes_schedule.timeFrom <= ${timeToMinutes}
                        AND classes_schedule.timeFrom > ${timeToMinutes}
                    )
                    AND classes.subject = "${filters.subject}"
    `
    // caso haja erro
    try {
        const db = await Database;
        const proffys = await db.all(query);

        proffys.map((proffy) => {
            proffy.subject = getSubject(proffy.subject);
        });


        return response.render('study.html', {
            proffys, filters, subjects, weekDays
        });

    } catch (error) {
        console.error(error);
    }

}


function giveClasses(request, response) {

    return response.render("give-classes.html", {
        subjects,
        weekDays
    });
}

async function saveClasses(request, response) {
    
    const createProffy = require('./database/createProffy');

    const proffyValue = {
        name: request.body.name,
        avatar: request.body.avatar,
        whatsapp: request.body.whatsapp,
        bio: request.body.bio
    }

    const classValue = {
        subject: request.body.subject,
        cost: request.body.cost,
    }

    const classScheduleValues = 
        request.body.weekDay.map((weekDay, index) => {



            return {
                weekDay,
                timeFrom: convertHourToMinutes(request.body.timeFrom[index]),
                timeTo: convertHourToMinutes(request.body.timeTo[index])
            }
        });

    try {
        const db = await Database;
        await createProffy(db, {proffyValue, classValue, classScheduleValues});

        let queryString = "?subject=" + request.body.subject;
        // queryString += queryString + ""
        queryString += "&weekDay=" + request.body.weekDay[0];
        queryString += "&time=" + request.body.timeFrom[0];

        return response.redirect("/study" + queryString);
        
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    pageLanding,
    study,
    giveClasses,
    saveClasses
}