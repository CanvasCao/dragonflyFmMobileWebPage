(function () {
    GM.$pages.eq(1).click(function () {
        DoPageChange(GM.pageIndex + 1)
    })
})()
