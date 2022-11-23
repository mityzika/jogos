images = ["https://th.bing.com/th/id/OIP.MSplzNKtGBi4oM0I87dd2QHaDt?pid=ImgDet&rs=1", "https://cultura.uol.com.br/upload/tvcultura/esporte/20210205170817_ff-edit.jpg", "https://image.winudf.com/v2/image1/Y29tLmR0cy5mcmVlZmlyZXRoX3NjcmVlbl9wdC1CUl8xMl8xNjAxMzYwNDUxXzAyNg/screen-12.jpg?fakeurl=1&type=.jpg", "https://image.winudf.com/v2/image1/Y29tLmR0cy5mcmVlZmlyZXRoX3NjcmVlbl9wdC1CUl8xMl8xNjAxMzYwNDUxXzAyNg/screen-12.jpg?fakeurl=1&type=.jpg"];
var i = 0;
function proximoslide() {
    if (i == 4) {
        i = 0;
    }
    document.getElementById("album").src = images[i];
    i++;
}

function changeImageOver() { document.getElementById("img_desenho").src = "https://th.bing.com/th/id/OIP.PV6mgFrCVEs_mMKqG31JMwHaEK?pid=ImgDet&rs=1"; }
function changeImageLeave() { document.getElementById("img_desenho").src = "https://th.bing.com/th/id/R.ba8faed07d637556bccaa49cf2ff5f40?rik=%2fukS7xQvENpOWQ&riu=http%3a%2f%2fwww.yearfill.com%2fwp-content%2fuploads%2f2020%2f11%2f52a03db4019d1fb82e52cbc46fe7d646.jpg&ehk=PCK9tQGcifsYzYGWdorfzFaIo9RYROZcyazo3ojViKo%3d&risl=&pid=ImgRaw&r=0"; }
function changeImageLeave() { document.getElementById("img_desenho").src = "https://th.bing.com/th/id/R.43fb54e60a0878d22188a7b6965a324d?rik=%2bnvZ8u4tBfy0tg&riu=http%3a%2f%2fgta5.com.br%2fwp-content%2fuploads%2f2013%2f09%2fScreenshot-GTA-V-3.jpg&ehk=L1dvECTwJ2IGhR%2bn6sV6JIII1U7GxscSk5hCgMr5s0g%3d&risl=&pid=ImgRaw&r=0","https://th.bing.com/th/id/R.e3051e9c00fdcef435e2e15a76b88346?rik=fWXMjC2f7%2bdeWA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-5DCKObWKOx8%2fVSXmHJYU3mI%2fAAAAAAAAAVY%2fNQ4pDJ91irQ%2fs1600%2fGTA-5-Free-Download-PC-Crack-Full-Version-Download-RELOADED-1024x640.jpg&ehk=ucsBgn%2bmbKg9SLtcZZTRpNSFNgYtHNZSDIbZtDpqKbY%3d&risl=&pid=ImgRaw&r=0"; }