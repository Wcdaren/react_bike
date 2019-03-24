export default {
    formateDate(time) {
        if (!time) return '';
        // 把时间戳转换 为 时间对象
        let date = new Date(time);
                return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}-${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }


}

