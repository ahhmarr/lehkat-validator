/*
Title		: Lehkat JQuery Validator
Author		: Ahmar Siddiqui @ahhmarr
version		: 0.1.0
date		: 02 Oct 2013
*/
$(function() {
    $("body").append('<style id="ahmrxStyleSheet">.validateError{box-shadow: 0px 1px 15px #FF2E2E!important;}</style>');
    $("body").on('submit', "form", function() {
        th = $(this);
        flag = true;
        $(".validateError").removeClass('validateError');
        th.find(".axBlank").each(function() {
            console.log('inside');
            if ($(this).is(":hidden"))
                return; //skipping hidden fields
            val = $(this).val();
            val = $.trim(val);
            if (val == "") {
                flag = false;
                $(this).addClass("validateError");
                // $(this).attr("placeholder"," *Cannot Leave Blank");

            }

        });
        th.find(".axNumber").each(function() {
            if ($(this).is(":hidden"))
                return; //skipping hidden fields
            val = $(this).val();
            val = $.trim(val);
            if (isNaN(val)) {
                flag = false;
                $(this).addClass("validateError");
                // $(this).attr("placeholder"," *Only Numeric Value ");

            }

        });
        th.find(".axPhone").each(function() {
            if ($(this).is(":hidden"))
                return; //skipping hidden fields
            val = $(this).val();
            val = $.trim(val);
            patt = /^[0-9\-+]+$/g;
            if (!patt.test(val) && val != "") {
                flag = false;
                $(this).addClass("validateError");
                // $(this).attr("placeholder"," *Only Phone No");

            }

        });
        th.find(".axEmail").each(function() {
            if ($(this).is(":hidden"))
                return; //skipping hidden fields
            val = $(this).val();
            val = $.trim(val);
            patt = /^([0-9a-zA-Z]+([_.-]?[0-9a-zA-Z]+)*@[0-9a-zA-Z]+[0-9,a-z,A-Z,.,-]*(.){1}[a-zA-Z]{2,4})+$/g;
            if (!patt.test(val) && val != "") {
                flag = false;
                $(this).addClass("validateError");
                // $(this).attr("placeholder"," *Only Valid Email");

            }

        });
        th.find(".axDec").each(function() {
            if ($(this).is(":hidden"))
                return; //skipping hidden fields
            val = $(this).val();
            val = $.trim(val);
            patt = /^\d*[0-9](\.\d*[0-9])?$/g;
            if (!patt.test(val) && val != "") {
                flag = false;
                $(this).addClass("validateError");
                // $(this).attr("placeholder"," *Only Decimal No");

            }

        });
        th.find(".axDocs").each(function() {
            if ($(this).is(":hidden"))
                return; //skipping hidden fields
            val = $(this).val();
            val = $.trim(val);
            patt = /^[a-zA-Z0-9-_\.]+\.(pdf|txt|doc|csv)$/g;
            if (!patt.test(val) && val != "") {
                flag = false;
                $(this).addClass("validateError");
                // $(this).attr("placeholder"," *Only Documents ");

            }

        });
        th.find(".axImg").each(function() {
            if ($(this).is(":hidden"))
                return; //skipping hidden fields
            val = $(this).val();
            val = $.trim(val);
            patt = /^[a-zA-Z:0-9-_\.\\\/]+\.(jpg|gif|png|jpeg|svg)$/g;
            if (!patt.test(val) && val != "") {
                flag = false;
                $(this).addClass("validateError");
                $(this).val('');
                $('label[for="' + $(this).attr('id') + '"]').addClass("validateError");
                // $(this).attr("placeholder"," *Only Image");

            }

        });
        th.find(".axMedia").each(function() {
            if ($(this).is(":hidden"))
                return; //skipping hidden fields
            val = $(this).val();
            val = $.trim(val);
            patt = /^[a-zA-Z0-9-_\.]+\.(swf|mov|wma|mpg|mp3|wav)$/g;
            if (!patt.test(val) && val != "") {
                flag = false;
                $(this).addClass("validateError");
                // $(this).attr("placeholder"," *Only Multimedia");

            }

        });
        th.find(".axExpr").each(function() {
            if ($(this).is(":hidden"))
                return; //skipping hidden fields
            val = $(this).val();
            val = $.trim(val);
            patt = new RegExp($(this).attr("data-expr"));
            if (!patt.test(val)) {
                flag = false;
                $(this).addClass("validateError");
                // $(this).attr("placeholder"," *Only Multimedia");

            }

        });
        $(".radioHidden").each(function() {
            fr = $(this).attr("for");
            radio = $("#" + fr).attr("name");
            nm = 'input[name="' + radio + '"]:checked';
            if (($(nm).length) === 0) {
                flag = false;
                $(this).addClass("validateError");

            }

        });
        // return false;
        if (!flag) {
            $('html, body').animate({
                scrollTop: $(".validateError").first().offset().top - 250
            }, 1000);
        }
        return flag;

    });
});
