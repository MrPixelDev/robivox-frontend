export function unixTimeToDate(timestamp: number) {
    const date = new Date(timestamp * 1000);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    const hour = date.getHours().toString();
    const hours = +hour < 10 ? `0${hour}` : hour;
    const minute = date.getMinutes().toString();
    const minutes = +minute < 10 ? `0${minute}` : minute;
    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

export function localUnixTimeToDate(timestamp: number) {
    const date = new Date(
        Date.parse(
            new Date(timestamp * 1000).toLocaleString('en-US', {
                timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            })
        )
    );
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);
    const hour = date.getHours().toString();
    const hours = +hour < 10 ? `0${hour}` : hour;
    const minute = date.getMinutes().toString();
    const minutes = +minute < 10 ? `0${minute}` : minute;
    return `${day}.${month}.${year} ${hours}:${minutes}`;
}
