var app = new Vue({
    el: '.main',
    data: {
        targetType: '',
        type: {
            miniProgram: {
                name: '小程序'
            },
            miniGame: {
                name: '小游戏'
            },
            web: {
                name: '网页'
            },
        },
        works: {
            Jumper: {
                name: 'Jumper',
                type: 'miniGame'
            },
            Snake: {
                name: 'Snake',
                type: 'miniGame'
            },
            PoPo: {
                name: 'PoPo',
                type: 'miniGame'
            },
            Production: {
                name: 'Production',
                type: 'miniProgram'
            },
        },
    },
    methods: {
        nav: function (i) {
            this.targetType=null;
            if (i) this.targetType = i;
            console.log(i)
        }
    },
    created: function () {}
})