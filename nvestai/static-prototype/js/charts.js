jQuery(function($) {'use strict';


//Token supply / distribution
var chart = c3.generate({
    bindto: '#chart1',
    data: {
        columns: [
            ['nvest tokens', 100]
            // ['data2', 120],
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "2 Billion"
    }
});

setTimeout(function () {
    chart.load({
        columns: [
            ["Team", 800],
            ["Advisors", 100],
            ["Reward Pool", 100],
            ["Presale", 150],
            ["Public Sale", 850],
        ]
    });
}, 1500);


setTimeout(function () {
    chart.unload({
        ids: 'nvest tokens'
    });
}, 1500);



//Token Budget
var chart2 = c3.generate({
    bindto: '#chart2',
    data: {
        columns: [
            ['Bugdet', 100]
            // ['data2', 120],
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    },
    donut: {
        title: "Budget"
    }
});

setTimeout(function () {
    chart2.load({
        columns: [
            ["Technology Development", 5000],
            ["Marketing & Related", 600],
            ["Exchange Fees", 400],
            ["Data Feeds", 200],
            ["Leagal & Audit", 150],
            ["Operational", 100],
            ["Reserve", 300],
        ]
    });
}, 1500);


setTimeout(function () {
    chart2.unload({
        ids: 'Bugdet'
    });
}, 1500);







});
