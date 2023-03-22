import React from "react";

export default function FormatDate(props) {
    let weekdays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]
    let day = weekdays[props.date.getDay()]
    let hours = props.date.getHours()
    let minutes = props.date.getMinutes()
    if (hours < 10) hours = `0${hours}`
    if (minutes < 10) minutes = `0${minutes}`
    return (
        <div>{day} {hours}:{minutes}</div>
    )
}