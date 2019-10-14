const dateFormat = (value, formater = 'YYYY-MM-DD HH:mm:ss') => {
    if (!value)
        return '-';
    const padStart = function (str) {
        return ((str || '') + '').padStart(2, 0);
    };
    const map = {
        YYYY(now) {
            return now.getFullYear();
        },
        MM(now) {
            return padStart(map.M(now));
        },
        M(now) {
            return now.getMonth() + 1;
        },
        DD(now) {
            return padStart(map.D(now));
        },
        D(now) {
            return now.getDate();
        },
        HH(now) {
            return padStart(map.H(now));
        },
        H(now) {
            return now.getHours();
        },
        mm(now) {
            return padStart(map.m(now));
        },
        m(now) {
            return now.getMinutes();
        },
        ss(now) {
            return padStart(map.s(now));
        },
        s(now) {
            return now.getSeconds();
        },
    };
    if (!value || !formater)
        return value;
    const timestamp = isNaN(+value) ? Date.parse(value) : +value;
    // value = isNaN(+value) ? value : +value;
    if (isNaN(timestamp)) {
        return '-';
    } else {
        const now = new Date(timestamp);
        return formater.replace(new RegExp(Object.keys(map).join('|'), 'g'), (key) => map[key](now));
    }
};

const ONE_DAY = 24 * 60 * 60 * 1000;
const timeFormat = (value, type = 'day') => { // type取值day、minute, 默认day
    if (!value)
        return '-';
    value = isNaN(+value) ? Date.parse(value) : +value;
    if (isNaN(value))
        return '-';
    const today = Date.parse(dateFormat(new Date(), 'YYYY-MM-DD') + 'T00:00:00.000+08:00');
    const tomorrow = today + ONE_DAY;
    const yesterday = today - ONE_DAY;
    const twoDaysBefore = yesterday - ONE_DAY;
    const time = +new Date(value);
    let day;
    let minute;
    const hm = dateFormat(value, 'HH:mm');
    if (type === 'today') {
        if (time < tomorrow && time >= today)
            return minute = '今天 ' + hm;
        else
            return dateFormat(value, 'YYYY-MM-DD HH:mm');
    }
    if (time < tomorrow && time >= today)
        day = minute = '今天 ' + hm;
    else if (time >= yesterday && time < today) {
        day = '昨天';
        minute = '昨天' + ' ' + hm;
    } else if (time >= twoDaysBefore && time < yesterday) {
        day = '前天';
        minute = '前天' + ' ' + hm;
    } else {
        day = dateFormat(value, 'YYYY-MM-DD');
        minute = dateFormat(value, 'YYYY-MM-DD HH:mm');
    }

    switch (type) {
        case 'day':
            return day;
        case 'minute':
            return minute;
    }
};

export default {
    dateFormat,
    timeFormat,
};
