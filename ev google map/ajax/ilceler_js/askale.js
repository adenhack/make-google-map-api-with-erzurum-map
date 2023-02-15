if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
} else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.open("GET", "./ilceler_xml/Askale_Mahalle.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

var x = xmlDoc.getElementsByTagName("Aşkale_Mahalle");
var mahalleler = document.getElementById("mahalleler");

for (i = 0; i < x.length; i++) {

    var titleName = x[i].getElementsByTagName("Mahalle_Adı")[0].innerHTML;
    var nüfus = x[i].getElementsByTagName("Nüfus")[0].innerHTML;
    var mahalle = document.querySelector("#mahalleler");

    mahalleler.innerHTML += `

        <option value="${titleName}" id="orta" data-chained="askale"> 
        ${"(" + nüfus + ")"} ${"&nbsp"} ${titleName}  
        </option> 

    `;
}

(function ($, window, document, undefined) {
    "use strict";

    $.fn.chained = function (parentSelector) {
        return this.each(function () {

            var child = this;
            var backup = $(child).clone();

            $(parentSelector).each(function () {
                $(this).bind("change", function () {
                    updateChildren();
                });

                if (!$("option:selected", this).length) {
                    $("option", this).first().attr("selected", "selected");
                }

                updateChildren();
            });

            function updateChildren() {
                var triggerChange = true;
                var currentlySelectedValue = $("option:selected", child).val();

                $(child).html(backup.html());

                var selected = "";
                $(parentSelector).each(function () {
                    var selectedValue = $("option:selected", this).val();
                    if (selectedValue) {
                        if (selected.length > 0) {
                            selected += "+";
                        }
                        selected += selectedValue;
                    }
                });

                var first;
                if ($.isArray(parentSelector)) {
                    first = $(parentSelector[0]).first();
                } else {
                    first = $(parentSelector).first();
                }
                var selectedFirst = $("option:selected", first).val();

                $("option", child).each(function () {

                    if ($(this).val() === "") {
                        return;
                    }
                    var matches = [];
                    var data = $(this).data("chained");
                    if (data) {
                        matches = data.split(" ");
                    }
                    if ((matches.indexOf(selected) > -1) || (matches.indexOf(selectedFirst) > -1)) {
                        if ($(this).val() === currentlySelectedValue) {
                            $(this).prop("selected", true);
                            triggerChange = false;
                        }
                    } else {
                        $(this).remove();
                    }
                });

                if (1 === $("option", child).length && $(child).val() === "") {
                    $(child).prop("disabled", true);
                } else {
                    $(child).prop("disabled", false);
                }
                if (triggerChange) {
                    $(child).trigger("change");
                }
            }
        });
    };

    $.fn.chainedTo = $.fn.chained;

    $.fn.chained.defaults = {};

})(window.jQuery || window.Zepto, window, document);

$('#mahalleler').chained("#ilceler");





