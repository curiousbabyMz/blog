//works
var works = {
    Jumper: {
        name: '蹦跶菇(wxG)',
        type: 'miniGame',
        url: 'https://curiousbabymz.github.io/project/Wechat/MiniGame.jpg'
    },
    Production: {
        name: '产品展示(MiniP)',
        type: 'miniProgram',
        url: 'https://curiousbabymz.github.io/project/Wechat/MiniProgram.jpg'
    },
    Snake: {
        name: '贪吃蛇(Ereget)',
        type: 'miniGame',
        url: 'https://curiousbabymz.github.io/project/snake/'
    },
    PoPo: {
        name: '泡泡消除(cc)',
        type: 'miniGame',
        url: 'https://curiousbabymz.github.io/project/PB2/'
    },
    Clock: {
        name: '3D时钟模型(threejs)',
        type: 'H5',
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
                <div>
                    <iframe 
                    src='${works[i].url}'
                    height='${document.getElementsByClassName('routerview')[0].clientHeight}' 
                    width='${document.getElementsByClassName('routerview')[0].clientWidth}'
                    ></iframe>
                </div>
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
                name: "H5"
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