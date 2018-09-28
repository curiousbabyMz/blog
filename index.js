//works
var works = {
    Jumper: {
        name: '蹦跶菇(wxG)',
        type: 'miniGame',
        createtime: '2018-04-03',
        url: 'https://curiousbabymz.github.io/project/Wechat/MiniGame.jpg',
        picUrl: './images/sj.png'
    },
    Production: {
        name: '产品展示(MiniP)',
        type: 'miniProgram',
        createtime: '2018-07-28',
        url: 'https://curiousbabymz.github.io/project/Wechat/MiniProgram.jpg'
    },
    Snake: {
        name: '贪吃蛇(Ereget)',
        type: 'miniGame',
        createtime: '2018-07-28',
        url: 'https://curiousbabymz.github.io/project/snake/'
    },
    PoPo: {
        name: '泡泡消除(cc)',
        type: 'miniGame',
        createtime: '2018-09-03',
        url: 'https://curiousbabymz.github.io/project/PB2/'
    },
    Clock: {
        name: '3D时钟模型(threejs)',
        type: 'H5',
        createtime: "2018-8-25",
        url: 'https://curiousbabymz.github.io/project/three/'
    }
};

//routes
var routes = [];
for (let i in works) {
    routes.push(
        {
            path: `/${i}`,
            component: {
                template: `
                    <iframe 
                    src='${works[i].url}'
                    height='${document.getElementsByClassName('routerview')[0].clientHeight * 0.9}' 
                    width='${document.getElementsByClassName('routerview')[0].clientWidth}' 
                    seamless 
                    frameborder="0" 
                    style='margin-top:100px;'
                    ></iframe>
                `
            }
        }
    )
}

var router = new VueRouter({
    routes: routes,
});



var app = new Vue({
    el: '.container',
    data: {
        targetType: '',
        targetWork: '',
        type: {
            miniProgram: {
                name: '小程序'
            },
            miniGame: {
                name: '小游戏'
            },
            H5: {
                name: 'H5'
            },
            // web: {
            //     name: '网页'
            // },
        },
        works: works,
    },
    router: router,
    methods: {
        nav: function (i) {
            this.targetType = "";
            if (i) this.targetType = i;
            console.log(i)
        }
    },
    created: function () { }
})
