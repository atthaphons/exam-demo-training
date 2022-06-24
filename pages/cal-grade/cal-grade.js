// import myJson from './nameStudent.json' ;



let CalFn = (function ($) {
    'use strict'
    return {
        calcularate: function (data) {
            console.log(data)
        }
    }


}(jQuery));

$(document).ready(function () {
    'use strict'





    $('#cal-form')
        .form({
            fields: {
                score1: {
                    identifier: 'score1',
                    rules: [{
                            type: 'empty',
                            prompt: 'กรุณา กรอกข้อมูล วิชาภาษาไทย ลงในช่องว่าง'
                        },
                        {
                            type: 'maxLength[3]',
                            prompt: 'ข้อมูลเกิน Limit'
                        },
                        {
                            type: 'regExp[/^[0-9]+$/]',
                            prompt: 'กรุณา กรอกข้อมูล วิชาภาษาไทย เป็นตัวเลขเท่านั้น'
                        }
                    ]
                },
                score2: {
                    identifier: 'score2',
                    rules: [{
                            type: 'empty',
                            prompt: 'กรุณา กรอกข้อมูล วิชาสังคม'
                        },
                        {
                            type: 'maxLength[3]',
                            prompt: 'ข้อมูลเกิน Limit'
                        },
                        {
                            type: 'regExp[/^[0-9]+$/]',
                            prompt: 'กรุณา กรอกข้อมูล วิชาสังคม เป็นตัวเลขเท่านั้น'
                        }
                    ]
                },
                score3: {
                    identifier: 'score3',
                    rules: [{
                            type: 'empty',
                            prompt: 'กรุณา กรอกข้อมูล วิชาสังคม'
                        },
                        {
                            type: 'maxLength[3]'
                        },
                        {
                            type: 'regExp[/^[0-9]+$/]',
                            prompt: 'กรุณา กรอกข้อมูล วิชาสังคม เป็นตัวเลขเท่านั้น'
                        }
                    ]
                },
                score4: ['maxLength[3]', 'empty']
            },
            inline: true,
            on: 'blur'
        });

    console.log("Hello")
    let sumScore = 0;
    $('#cal-button').on('click', function (e) {
        if ($('#cal-form').form('validate form')) {
            let formData = $('#cal-form').form('get values');
            console.log(formData)
            sumScore += formData.score1;
            sumScore += formData.score2;
            sumScore += formData.score3;
            sumScore += formData.score4;

            $('#total').text(sumScore);

            $.getJSON('nameStudent.json', function (jd) {
                if (formData.idStd === '65001') {
                    $('#resultSum').text(jd.data.category1.title);
                }
                if (formData.idStd === '65002') {
                    $('#resultSum').text(jd.data.category2.title);
                }

                // console.log(jd.data)
                // console.log(jd.data.category1.name)
            });

           

            console.log(sumScore)


            // CalFn.calcularate(formData);
        }

    });

});