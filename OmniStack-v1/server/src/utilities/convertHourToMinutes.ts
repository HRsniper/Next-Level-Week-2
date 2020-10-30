export function convertHourToMinutes(time: string) {
    // 8:00
    // map(Number) converter "8" e "00" em 8 e 00
    // const array = hour.split(':').map(Number)
    const [hour, minutes] = time.split(':').map(Number);

    const timeInMinutes = (hour * 60) + minutes;

    return timeInMinutes;
}