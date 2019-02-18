const ajax = {
    get(url, data = '', async = true) {
        const xml = new XMLHttpRequest();
        if (typeof data === 'string') {
            if (data != '') {
                url += "?" + data;
            }
        } else {
            url += "?" + format(data);
        }
        return new Promise((resolve, reject) => {
            xml.onload = () => {
                if (xml.status >= 200 && xml.status <= 300 || xml.status === 304) {
                    resolve(JSON.parse(xml.responseText));
                } else {
                    reject('报错');
                }
            }
            xml.open('get', url, async);
            xml.send(null);
        })
    },
    format(data) {
        return Object.entries(data).map(item => item.join('=')).join('&');
    }
}