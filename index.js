//works
var works = {
    Jumper: {
        name: '蹦跶菇(wxGame)',
        type: 'miniGame',
        createtime: '2018-04-13',
        url: ''
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
    Production: {
        name: '产品展示小程序(MiniP)',
        type: 'miniProgram',
        createtime: '2018-08-31',
        url: ''
    },
    Clock: {
        name: '3D时钟模型(threejs)',
        type: 'H5',
        createtime: "2018-8-25",
        url: 'https://curiousbabymz.github.io/project/three/'
    }
};

//router
var routes = [];
for (let i in works) {
    routes.push(
        {
            path: `/${i}`,
            component: {
                template: `
                <div>
                    ${i}
                </div>
                `
            }
        }
    )
}
console.log(routes);


var router = new VueRouter({
    routes: routes
})




var app = new Vue({
    el: '.container',
    data: {
        targetType: '',
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
        works: works
    },
    methods: {
        nav: function (i) {
            this.targetType = "";
            if (i) this.targetType = i;
            console.log(i)
        }
    },
    router: router,
    created: function () { }
})


