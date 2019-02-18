function get(url) {
    return new Promise((resolve, reject) => {
        //创建对象
        let xml = new XMLHttpRequest();
        //连接
        xml.open(url, 'get', true);
        //发送
        xml.send(null);
        //请求完成
        xml.onreadystatechange = function() {
                if (xml.readyState === 4) {
                    if (xml.status === 200) {
                        resolve(JSON.parse(xml.responseText));
                    }
                } else {
                    reject('错误');
                }
            }
            // xml.onload = () => {


        // }
    })
}