(function () {
    GM.$pages.eq(0).click(function () {
        DoPageChange(GM.pageIndex + 1)
    })
})()
