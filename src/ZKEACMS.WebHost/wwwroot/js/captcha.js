﻿/*! http://www.zkea.net/
 * Copyright (c) ZKEASOFT. All rights reserved.
 * http://www.zkea.net/licenses */

$(function () {
    $(document).on("click", ".image-captcha", function () {
        var url = $(this).data("captcha") + "?v=" + new Date().getTime();
        $("img", this).attr("src", url);
    });
});