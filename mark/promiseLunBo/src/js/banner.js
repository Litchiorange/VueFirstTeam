//es6 面向对象
class Banner {
    constructor(parent, options) {
        //实例
        this.options = options;
        this.parent = parent;
        //调用方法
        this.init();
    }
    init() {
        let html = '';
        Object.values(this.options).forEach(item => {
            // console.log(item)
            html += `
                <div class="swiper-slide">
                    <dl>
                        <dt> ${item.title}</dt>
                        <dd> 
                            <img src="${item.img}" alt=""> 
                        </dd>
                    </dl>
                   
                </div>
           `;
            this.parent.innerHTML = html
        })
    }
}