function mini(x, y) {
  let begin = y;
  let total = y;
  let discount1 = "";

  let disc1 = 25 / 100;
  let disc2 = 50 / 100;

  let potongan = y;

  let maxDisc1 = potongan * disc1 >= 20000;
  let maxDisc2 = potongan * disc2 >= 45000;

  let minBuy1 = total >= 50000;
  let minBuy2 = total >= 70000;

  let check1 = x == "DumbMerchBerkah";
  let check2 = x == "DumbMerchMurahBanget";

  if (check2 && minBuy2 && maxDisc2) {
    total = total - 45000;
    discount1 = "50%";
    potongan = 45000;
  } else if (check2 && minBuy2) {
    discount1 = "50%";
    total = total - total * disc2;
    potongan = y * disc2;
  } else if (check1 && minBuy1 && maxDisc1) {
    discount1 = "25%";
    total = total - 20000;
    potongan = 20000;
  } else if (check1 && minBuy1) {
    discount1 = "25%";
    total = total - total * disc1;
    potongan = y * disc1;
  } else {
    discount1 = "0%";
    total = total;
    potongan = 0;
  }

  b = `- Total Belanja = ${begin}
        - Diskon = ${discount1}
        - Potongan = ${potongan}
        - Total Pembayaran = ${total}`;

  return b;
}

console.log(mini("DumbMerchMurahBanget", 69000));
