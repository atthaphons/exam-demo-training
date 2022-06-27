let CalFn = (function ($) {
    'use strict'
    return {
        calcularate: function (sumScore) {
            let total = (sumScore / 4);
            if (total >= 80)
                return "A";
            else if (total > 69.99)
                return "B";
            else if (total > 59.99)
                return "C";
            else if (total > 49.99)
                return "D";
            else if (total < 50)
                return "F";
        }
    }
}(jQuery));

$(document).ready(function () {
    'use strict'
    $('#selectName')
        .dropdown();
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

    $('#cal-button').on('click', function (e) {
        if ($('#cal-form').form('validate form')) {
            let formData = $('#cal-form').form('get values');
            let sumScore = 0;
            console.log(formData)
            sumScore += parseFloat(formData.score1);
            sumScore += parseFloat(formData.score2);
            sumScore += parseFloat(formData.score3);
            sumScore += parseFloat(formData.score4);
            $('#total').text(sumScore);
            let avgScore = sumScore/4;


            $.getJSON('nameStudent.json', function (jd) {
                let idName = $('#cal-form [name="selectName"]').dropdown('get text');
                if (idName === jd.data.category1.name) {
                    $('#nameOfGrade').text("Name : " +jd.data.category1.title);
                    $('#avgScore').text(avgScore);
                    $('#sumTotal').text("Total : >>>>>  "+sumScore);
                    $('#gradeCal').text(CalFn.calcularate(sumScore));
                    $('#resultDisplay').show();
                }
                if (idName === jd.data.category2.name) {
                    $('#nameOfGrade').text("Name : " +jd.data.category2.title);
                    $('#avgScore').text(avgScore);
                    $('#sumTotal').text("Total : >>>>>  "+sumScore);
                    $('#gradeCal').text(CalFn.calcularate(sumScore));
                    $('#resultDisplay').show();
                }
                if (idName === jd.data.category3.name) {
                    $('#nameOfGrade').text("Name : " +jd.data.category3.title);
                    $('#avgScore').text(avgScore);
                    $('#sumTotal').text("Total : >>>>>  "+sumScore);
                    $('#gradeCal').text(CalFn.calcularate(sumScore));
                    $('#resultDisplay').show();
                }
                if (idName === jd.data.category4.name) {
                    $('#nameOfGrade').text("Name : " +jd.data.category4.title);
                    $('#avgScore').text(avgScore);
                    $('#sumTotal').text("Total : >>>>>  "+sumScore);
                    $('#gradeCal').text(CalFn.calcularate(sumScore));
                    $('#resultDisplay').show();
                }
            });
            console.log(sumScore)

        }

    });



    $('#clearForm').on("click", function () {
        $('#cal-form').form('clear');
    });

});