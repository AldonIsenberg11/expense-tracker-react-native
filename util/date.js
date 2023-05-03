export function getFormattedDate(date) {
    return date?.toISOString().slice(0, 10) || null
}

export function getDateMinusDays(date, days) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days)
}