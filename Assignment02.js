var TienVay = document.getElementById('tienvay')
var ThoiGianVay = document.getElementById('thoigianvay')
var LaiSuat = document.getElementById('laixuat')
var result = document.getElementById('result')



result.addEventListener('click', ()=> {
    var thoiGianVay = ThoiGianVay.value
    var laiSuat = (LaiSuat.value / 100) / ThoiGianVay.value
    var goc = TienVay.value
    var TienGoc = TienVay.value
    var Total = TienVay.value*ThoiGianVay.value
    var Lai =  ((TienVay.value * (LaiSuat.value / 100) / ThoiGianVay.value).toFixed(2))*ThoiGianVay.value
    var TongSoLai = Total + Lai

    for(var i = 0; i <= thoiGianVay; i++) {
        var gocHangThang = goc / thoiGianVay
        var laiPhaiTra = TienGoc * laiSuat
        var tienPhaiTraHangThang = laiPhaiTra + gocHangThang
        var GocConLai = gocHangThang/ `${i}`
        if (i === 0) {
            console.log(
                `Kỳ hạn nợ: ${i}
                Số gốc còn lại: ${goc}
                `
            )
        }else(
        console.log(

        `
         Kỉ nợ : ${i}
         Tiền gốc: ${TienGoc}
         Gốc còn lại: ${GocConLai}
         Lai: ${laiPhaiTra} 
         Gốc + Lãi: ${tienPhaiTraHangThang}`
        )
        )
        
    }

    console.log(
        `
        Tổng
        Gốc: ${Total}
        Lãi:  ${Lai}
        Tổng gốc lãi: ${TongSoLai}
        `
    )
})