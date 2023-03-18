export const isMobileFn = ():boolean => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export const classArrayToString = function (arr: (string | number | boolean | undefined)[]):string {
    return arr.filter(Boolean).join(' ').replace(/  +/g, ' ').trim()
}

export const getPercent = (a: number, b: number):number => {
    return ((a / b) * 100) || 0
}

export const formatDate = (date: string):string => {
    return new Date(date).toLocaleString('en-us', { month: 'long', day: 'numeric', year: 'numeric' })
}

export const cleanURL = (url: string):string => {
    return encodeURI(url).replace(/'/g, '%27')
}

export const cleanContent = (a: string):string => {
    return a.replace(/<[^>]*>?/gm, '')
}

export const catchErrorMsg = (err: unknown):string | object[] => {
    let error = 'Unknown Error'
    if (err instanceof Error) error = err.message
    try {
        return JSON.parse(error);
    } catch (e) {
        return error;
    }
}