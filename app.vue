<template>
  <div class="container fade-in">
    <a href="mailto:hello@neo.kids">
      <img src="/neo-kids-logo-h-white-001.png" alt="neo.kids" />
    </a>
  </div>

  <div class="stars-container">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
  </div>

  <div class="fade-overlay"></div>
</template>

<style>
.fade-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 3000;
  animation: fadeOut 2s ease-out forwards;
}

.fade-in {
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-timing-function: ease-out;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    visibility: visible;
  }
  100% {
    opacity: 1;
  }
}

img {
  width: 100%;
  max-width: 400px;
  padding: 0 40px;
  box-sizing: border-box;
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 2000;
}

html {
  height: 100%;
  background: radial-gradient(ellipse at center, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
}

.stars-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  transform: scale(1.3);
}

#stars {
  opacity: 0.3;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 1414px 1061px #fff, 1849px 397px #fff, 1185px 1883px #fff,
    1236px 1009px #fff, 1372px 1160px #fff, 1487px 1179px #fff,
    1431px 1288px #fff, 745px 901px #fff, 1769px 731px #fff, 393px 948px #fff,
    251px 1348px #fff, 401px 1421px #fff, 1086px 746px #fff, 1679px 1285px #fff,
    1605px 1695px #fff, 246px 846px #fff, 1068px 1284px #fff, 1594px 849px #fff,
    1946px 1757px #fff, 388px 1327px #fff, 1960px 1267px #fff, 971px 1969px #fff,
    1532px 441px #fff, 724px 1650px #fff, 311px 20px #fff, 587px 1819px #fff,
    952px 1062px #fff, 1992px 1032px #fff, 665px 1533px #fff, 1629px 1364px #fff,
    975px 1874px #fff, 1861px 434px #fff, 1877px 1138px #fff, 1695px 467px #fff,
    1523px 825px #fff, 487px 1073px #fff, 946px 285px #fff, 1438px 714px #fff,
    238px 1814px #fff, 1855px 758px #fff, 1884px 1954px #fff, 1px 1015px #fff,
    896px 1728px #fff, 1525px 1593px #fff, 8px 1497px #fff, 548px 1847px #fff,
    496px 138px #fff, 793px 1414px #fff, 1705px 329px #fff, 399px 334px #fff,
    1704px 1732px #fff, 458px 777px #fff, 1361px 740px #fff, 1225px 1528px #fff,
    1298px 267px #fff, 1782px 811px #fff, 1779px 396px #fff, 1953px 1993px #fff,
    1982px 394px #fff, 1505px 1279px #fff, 224px 369px #fff, 1618px 1327px #fff,
    1280px 664px #fff, 1591px 747px #fff, 679px 1720px #fff, 1068px 1551px #fff,
    582px 1370px #fff, 1027px 608px #fff, 1125px 1950px #fff, 589px 756px #fff,
    1172px 46px #fff, 805px 1165px #fff, 156px 969px #fff, 1946px 97px #fff,
    1778px 847px #fff, 1015px 734px #fff, 1249px 1246px #fff, 846px 1738px #fff,
    98px 784px #fff, 1406px 328px #fff, 420px 961px #fff, 1364px 1215px #fff,
    567px 888px #fff, 1482px 1521px #fff, 1650px 652px #fff, 306px 1291px #fff,
    380px 44px #fff, 348px 144px #fff, 1897px 873px #fff, 1930px 1606px #fff,
    1609px 1720px #fff, 1517px 109px #fff, 1813px 1993px #fff, 344px 223px #fff,
    1099px 1398px #fff, 828px 1298px #fff, 1658px 227px #fff, 21px 264px #fff,
    824px 837px #fff, 222px 803px #fff, 105px 1513px #fff, 646px 1457px #fff,
    200px 462px #fff, 682px 616px #fff, 196px 1737px #fff, 518px 735px #fff,
    590px 77px #fff, 1180px 3px #fff, 110px 182px #fff, 284px 747px #fff,
    1030px 447px #fff, 803px 1048px #fff, 1520px 642px #fff, 1909px 8px #fff,
    728px 1958px #fff, 143px 1686px #fff, 741px 952px #fff, 82px 728px #fff,
    1938px 1px #fff, 111px 880px #fff, 1934px 954px #fff, 1919px 1414px #fff,
    1956px 210px #fff, 1028px 1196px #fff, 1366px 1658px #fff, 117px 1255px #fff,
    177px 955px #fff, 1371px 1788px #fff, 958px 1914px #fff, 1652px 1661px #fff,
    1590px 614px #fff, 881px 1398px #fff, 368px 794px #fff, 1799px 870px #fff,
    1345px 1044px #fff, 231px 1512px #fff, 1107px 585px #fff, 1835px 1619px #fff,
    773px 1479px #fff, 1188px 1821px #fff, 1669px 1689px #fff, 745px 1143px #fff,
    1171px 449px #fff, 1011px 1040px #fff, 1212px 182px #fff, 1378px 586px #fff,
    142px 1559px #fff, 1495px 213px #fff, 139px 374px #fff, 1479px 546px #fff,
    1240px 1450px #fff, 257px 401px #fff, 1844px 1329px #fff, 1695px 221px #fff,
    178px 1363px #fff, 1660px 56px #fff, 717px 108px #fff, 674px 1672px #fff,
    160px 1962px #fff, 1115px 578px #fff, 481px 991px #fff, 1668px 1819px #fff,
    1903px 33px #fff, 1417px 1575px #fff, 1881px 1818px #fff, 595px 108px #fff,
    125px 616px #fff, 731px 1955px #fff, 209px 1225px #fff, 1613px 594px #fff,
    662px 458px #fff, 1107px 1432px #fff, 91px 1616px #fff, 1726px 1239px #fff,
    1055px 782px #fff, 5px 423px #fff, 1337px 344px #fff, 1826px 771px #fff,
    480px 156px #fff, 1116px 334px #fff, 1351px 1390px #fff, 1548px 481px #fff,
    1190px 956px #fff, 1035px 803px #fff, 708px 1760px #fff, 1094px 312px #fff,
    722px 1865px #fff, 1494px 1316px #fff, 1775px 1964px #fff,
    1030px 1729px #fff, 420px 1440px #fff, 768px 208px #fff, 1201px 1713px #fff,
    333px 552px #fff, 1977px 547px #fff, 1906px 1426px #fff, 1180px 1201px #fff,
    805px 102px #fff, 556px 1732px #fff, 606px 1461px #fff, 577px 1750px #fff,
    1506px 1190px #fff, 1997px 1081px #fff, 1118px 564px #fff,
    1841px 1944px #fff, 622px 346px #fff, 1987px 1562px #fff, 1096px 1085px #fff,
    1541px 1754px #fff, 1430px 1111px #fff, 307px 452px #fff, 1823px 1395px #fff,
    1457px 194px #fff, 379px 1658px #fff, 1820px 861px #fff, 1337px 781px #fff,
    1237px 1249px #fff, 846px 199px #fff, 1918px 1951px #fff, 439px 654px #fff,
    1551px 2px #fff, 998px 1576px #fff, 862px 1626px #fff, 203px 1107px #fff,
    1836px 1705px #fff, 973px 1205px #fff, 624px 1815px #fff, 848px 492px #fff,
    665px 1140px #fff, 1207px 1828px #fff, 1096px 800px #fff, 260px 1389px #fff,
    183px 164px #fff, 321px 1946px #fff, 1965px 1549px #fff, 1397px 240px #fff,
    687px 1478px #fff, 451px 1980px #fff, 419px 468px #fff, 545px 425px #fff,
    1378px 1970px #fff, 1259px 818px #fff, 1590px 488px #fff, 953px 734px #fff,
    621px 834px #fff, 119px 1331px #fff, 1606px 1356px #fff, 713px 1365px #fff,
    1292px 995px #fff, 583px 842px #fff, 343px 1248px #fff, 426px 1272px #fff,
    1129px 927px #fff, 54px 1911px #fff, 1542px 1823px #fff, 1502px 780px #fff,
    1725px 1212px #fff, 307px 1470px #fff, 585px 510px #fff, 1613px 1881px #fff,
    1624px 903px #fff, 1959px 987px #fff, 227px 1141px #fff, 542px 476px #fff,
    610px 2000px #fff, 1539px 145px #fff, 22px 1722px #fff, 1800px 1218px #fff,
    557px 650px #fff, 844px 277px #fff, 151px 1759px #fff, 1535px 887px #fff,
    1710px 1096px #fff, 469px 534px #fff, 354px 1900px #fff, 1359px 1126px #fff,
    1924px 1310px #fff, 985px 389px #fff, 412px 1737px #fff, 1738px 1097px #fff,
    1186px 1535px #fff, 141px 1649px #fff, 538px 83px #fff, 579px 1161px #fff,
    965px 464px #fff, 549px 1069px #fff, 1575px 1626px #fff, 1532px 1582px #fff,
    1631px 1684px #fff, 317px 1986px #fff, 255px 1499px #fff, 448px 543px #fff,
    1390px 12px #fff, 1586px 859px #fff, 1136px 1318px #fff, 12px 1132px #fff,
    944px 461px #fff, 985px 1428px #fff, 1811px 738px #fff, 1429px 1484px #fff,
    1953px 1174px #fff, 1613px 1033px #fff, 1184px 1925px #fff, 1624px 9px #fff,
    1798px 1822px #fff, 1156px 663px #fff, 110px 921px #fff, 938px 44px #fff,
    1404px 967px #fff, 1660px 1712px #fff, 159px 533px #fff, 1976px 1804px #fff,
    1612px 1552px #fff, 1638px 656px #fff, 1986px 1593px #fff, 961px 516px #fff,
    1986px 1489px #fff, 1095px 1457px #fff, 1112px 635px #fff, 154px 156px #fff,
    1156px 1600px #fff, 188px 570px #fff, 1016px 795px #fff, 1855px 1174px #fff,
    1019px 958px #fff, 426px 1728px #fff, 1540px 305px #fff, 51px 556px #fff,
    1236px 1351px #fff, 244px 380px #fff, 85px 1832px #fff, 1229px 1068px #fff,
    1852px 1354px #fff, 521px 359px #fff, 968px 335px #fff, 1454px 675px #fff,
    1831px 1572px #fff, 1104px 492px #fff, 790px 1114px #fff, 276px 1556px #fff,
    1369px 1316px #fff, 517px 888px #fff, 1547px 1477px #fff, 1170px 1541px #fff,
    1545px 845px #fff, 1300px 543px #fff, 1354px 353px #fff, 1351px 810px #fff,
    646px 519px #fff, 1079px 1293px #fff, 1294px 1911px #fff, 1641px 1719px #fff,
    1475px 260px #fff, 633px 753px #fff, 1787px 1220px #fff, 1286px 985px #fff,
    174px 490px #fff, 1442px 906px #fff, 789px 118px #fff, 1894px 1838px #fff,
    430px 736px #fff, 612px 372px #fff, 12px 1395px #fff, 1656px 1300px #fff,
    74px 1929px #fff, 658px 70px #fff, 527px 1490px #fff, 1956px 1701px #fff,
    816px 899px #fff, 1325px 716px #fff, 317px 793px #fff, 412px 142px #fff,
    884px 565px #fff, 1065px 1662px #fff, 254px 580px #fff, 544px 958px #fff,
    1219px 322px #fff, 242px 282px #fff, 1489px 1418px #fff, 1407px 521px #fff,
    1751px 764px #fff, 1680px 212px #fff, 922px 1801px #fff, 826px 1899px #fff,
    27px 806px #fff, 1238px 815px #fff, 1272px 1147px #fff, 39px 294px #fff,
    187px 1554px #fff, 1109px 1163px #fff, 955px 1063px #fff, 820px 598px #fff,
    1409px 117px #fff, 447px 484px #fff, 1750px 1363px #fff, 824px 1453px #fff,
    914px 1258px #fff, 157px 1413px #fff, 129px 423px #fff, 608px 115px #fff,
    1384px 1031px #fff, 1337px 1684px #fff, 638px 1230px #fff, 510px 258px #fff,
    883px 1076px #fff, 419px 1060px #fff, 1354px 1411px #fff, 1740px 1318px #fff,
    890px 380px #fff, 190px 31px #fff, 980px 136px #fff, 452px 1545px #fff,
    400px 1982px #fff, 1886px 504px #fff, 1797px 1259px #fff, 879px 184px #fff,
    626px 1960px #fff, 497px 117px #fff, 48px 1568px #fff, 1669px 911px #fff,
    211px 988px #fff, 848px 1471px #fff, 284px 407px #fff, 1886px 646px #fff,
    990px 901px #fff, 1875px 696px #fff, 1076px 974px #fff, 419px 672px #fff,
    1431px 1789px #fff, 1792px 1004px #fff, 964px 1012px #fff,
    1645px 1386px #fff, 1501px 1292px #fff, 445px 1076px #fff, 804px 1622px #fff,
    285px 333px #fff, 1127px 975px #fff, 934px 24px #fff, 399px 1120px #fff,
    293px 1918px #fff, 1405px 723px #fff, 1288px 1471px #fff, 1657px 1154px #fff,
    1034px 648px #fff, 811px 495px #fff, 912px 414px #fff, 1652px 251px #fff,
    357px 1967px #fff, 1495px 1360px #fff, 581px 328px #fff, 928px 1500px #fff,
    1881px 1167px #fff, 1356px 1932px #fff, 321px 807px #fff, 85px 186px #fff,
    1042px 1508px #fff, 440px 1640px #fff, 1938px 823px #fff, 1711px 785px #fff,
    206px 1058px #fff, 1836px 434px #fff, 1049px 1663px #fff, 712px 159px #fff,
    686px 1213px #fff, 963px 1202px #fff, 632px 438px #fff, 278px 1712px #fff,
    1735px 43px #fff, 212px 1512px #fff, 394px 1426px #fff, 1691px 1713px #fff,
    1131px 1232px #fff, 562px 1975px #fff, 352px 1686px #fff, 422px 177px #fff,
    567px 619px #fff, 1024px 1005px #fff, 1026px 1826px #fff, 480px 688px #fff,
    1298px 197px #fff, 675px 1003px #fff, 1165px 1898px #fff, 833px 658px #fff,
    1961px 431px #fff, 1764px 885px #fff, 2000px 1196px #fff, 1973px 667px #fff,
    490px 1486px #fff, 129px 1288px #fff, 1937px 1304px #fff, 472px 1518px #fff,
    1830px 1427px #fff, 739px 661px #fff, 964px 512px #fff, 1560px 755px #fff,
    1518px 708px #fff, 1903px 1140px #fff, 875px 1105px #fff, 1192px 1983px #fff,
    265px 1903px #fff, 328px 1852px #fff, 736px 1513px #fff, 1796px 1961px #fff,
    1385px 1353px #fff, 50px 1380px #fff, 1444px 1236px #fff, 606px 1148px #fff,
    1954px 686px #fff, 164px 230px #fff, 1927px 358px #fff, 526px 1374px #fff,
    580px 1349px #fff, 407px 712px #fff, 1208px 607px #fff, 2px 498px #fff,
    461px 1910px #fff, 320px 1554px #fff, 1361px 1221px #fff, 357px 1786px #fff,
    1607px 287px #fff, 665px 1260px #fff, 816px 1383px #fff, 421px 617px #fff,
    316px 1258px #fff, 1775px 587px #fff, 544px 864px #fff, 900px 1489px #fff,
    229px 164px #fff, 1053px 22px #fff, 1750px 1180px #fff, 287px 1995px #fff,
    1750px 1258px #fff, 1254px 1375px #fff, 778px 1102px #fff, 1267px 61px #fff,
    955px 397px #fff, 292px 960px #fff, 378px 157px #fff, 1786px 1006px #fff,
    459px 969px #fff, 1399px 1052px #fff, 1469px 201px #fff, 654px 127px #fff,
    528px 256px #fff, 1543px 1437px #fff, 920px 806px #fff, 11px 844px #fff,
    298px 1764px #fff, 815px 1874px #fff, 181px 1752px #fff, 443px 873px #fff,
    470px 78px #fff, 1168px 6px #fff, 1259px 1483px #fff, 594px 457px #fff,
    1763px 1123px #fff, 118px 1621px #fff, 619px 1423px #fff, 1140px 1213px #fff,
    1621px 1268px #fff, 1524px 963px #fff, 1036px 360px #fff, 1251px 554px #fff,
    1778px 1331px #fff, 1874px 787px #fff, 1967px 198px #fff, 94px 182px #fff,
    484px 502px #fff, 85px 571px #fff, 865px 961px #fff, 1981px 1197px #fff,
    530px 1322px #fff, 783px 1508px #fff, 727px 1599px #fff, 1655px 602px #fff,
    355px 1837px #fff, 1097px 1216px #fff, 631px 1051px #fff, 1454px 1089px #fff,
    1589px 676px #fff, 555px 220px #fff, 942px 1005px #fff, 822px 616px #fff,
    898px 1182px #fff, 1209px 313px #fff, 1116px 815px #fff, 1478px 1490px #fff,
    1959px 21px #fff, 310px 18px #fff, 702px 571px #fff, 1871px 370px #fff,
    1566px 1772px #fff, 714px 1971px #fff, 1195px 709px #fff, 1051px 1005px #fff,
    1476px 1133px #fff, 1129px 1092px #fff, 1319px 865px #fff, 473px 1771px #fff,
    1459px 1622px #fff, 130px 1575px #fff, 113px 1748px #fff, 451px 1868px #fff,
    1688px 1367px #fff, 1516px 952px #fff, 1891px 994px #fff, 31px 329px #fff,
    583px 454px #fff, 1721px 723px #fff, 1788px 493px #fff, 1136px 678px #fff,
    1210px 921px #fff, 931px 1503px #fff, 515px 1530px #fff, 507px 936px #fff,
    112px 120px #fff, 459px 1925px #fff, 801px 235px #fff, 873px 1135px #fff,
    904px 523px #fff, 1919px 1123px #fff, 1415px 115px #fff, 1610px 1004px #fff,
    1864px 165px #fff, 325px 925px #fff, 1127px 1451px #fff, 1077px 1483px #fff,
    1672px 1266px #fff, 1934px 286px #fff, 1862px 1948px #fff, 550px 1765px #fff,
    1224px 169px #fff, 412px 386px #fff, 279px 819px #fff, 1735px 1819px #fff,
    216px 987px #fff, 491px 600px #fff, 1456px 1102px #fff, 160px 239px #fff,
    430px 887px #fff, 743px 212px #fff, 1050px 183px #fff, 1255px 705px #fff,
    967px 714px #fff, 1102px 621px #fff, 1066px 1945px #fff, 1926px 144px #fff,
    72px 568px #fff, 1446px 55px #fff, 1145px 989px #fff, 602px 256px #fff,
    866px 1371px #fff, 1808px 157px #fff, 650px 549px #fff, 1556px 885px #fff,
    340px 1276px #fff, 1586px 314px #fff, 930px 1147px #fff, 988px 313px #fff,
    1832px 874px #fff, 125px 1971px #fff, 361px 535px #fff, 1854px 1531px #fff,
    303px 1264px #fff, 1784px 845px #fff, 1388px 1928px #fff, 1812px 1563px #fff,
    1634px 426px #fff, 1347px 157px #fff, 312px 1794px #fff, 888px 276px #fff,
    1575px 182px #fff, 1691px 697px #fff, 1481px 1995px #fff, 716px 663px #fff,
    1974px 73px #fff, 1743px 1429px #fff, 1816px 1724px #fff, 384px 63px #fff,
    1650px 727px #fff, 1581px 529px #fff, 1557px 1990px #fff, 299px 875px #fff,
    1089px 466px #fff, 1308px 1396px #fff, 501px 520px #fff, 1791px 1771px #fff,
    1616px 868px #fff, 974px 293px #fff, 1657px 401px #fff, 476px 668px #fff,
    471px 700px #fff, 1311px 114px #fff, 856px 168px #fff, 1624px 1502px #fff,
    1731px 402px #fff, 385px 1847px #fff, 1405px 1034px #fff, 1719px 683px #fff,
    1952px 1931px #fff;
  animation: animStar 100s linear infinite;
}
#stars:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 1414px 1061px #fff, 1849px 397px #fff, 1185px 1883px #fff,
    1236px 1009px #fff, 1372px 1160px #fff, 1487px 1179px #fff,
    1431px 1288px #fff, 745px 901px #fff, 1769px 731px #fff, 393px 948px #fff,
    251px 1348px #fff, 401px 1421px #fff, 1086px 746px #fff, 1679px 1285px #fff,
    1605px 1695px #fff, 246px 846px #fff, 1068px 1284px #fff, 1594px 849px #fff,
    1946px 1757px #fff, 388px 1327px #fff, 1960px 1267px #fff, 971px 1969px #fff,
    1532px 441px #fff, 724px 1650px #fff, 311px 20px #fff, 587px 1819px #fff,
    952px 1062px #fff, 1992px 1032px #fff, 665px 1533px #fff, 1629px 1364px #fff,
    975px 1874px #fff, 1861px 434px #fff, 1877px 1138px #fff, 1695px 467px #fff,
    1523px 825px #fff, 487px 1073px #fff, 946px 285px #fff, 1438px 714px #fff,
    238px 1814px #fff, 1855px 758px #fff, 1884px 1954px #fff, 1px 1015px #fff,
    896px 1728px #fff, 1525px 1593px #fff, 8px 1497px #fff, 548px 1847px #fff,
    496px 138px #fff, 793px 1414px #fff, 1705px 329px #fff, 399px 334px #fff,
    1704px 1732px #fff, 458px 777px #fff, 1361px 740px #fff, 1225px 1528px #fff,
    1298px 267px #fff, 1782px 811px #fff, 1779px 396px #fff, 1953px 1993px #fff,
    1982px 394px #fff, 1505px 1279px #fff, 224px 369px #fff, 1618px 1327px #fff,
    1280px 664px #fff, 1591px 747px #fff, 679px 1720px #fff, 1068px 1551px #fff,
    582px 1370px #fff, 1027px 608px #fff, 1125px 1950px #fff, 589px 756px #fff,
    1172px 46px #fff, 805px 1165px #fff, 156px 969px #fff, 1946px 97px #fff,
    1778px 847px #fff, 1015px 734px #fff, 1249px 1246px #fff, 846px 1738px #fff,
    98px 784px #fff, 1406px 328px #fff, 420px 961px #fff, 1364px 1215px #fff,
    567px 888px #fff, 1482px 1521px #fff, 1650px 652px #fff, 306px 1291px #fff,
    380px 44px #fff, 348px 144px #fff, 1897px 873px #fff, 1930px 1606px #fff,
    1609px 1720px #fff, 1517px 109px #fff, 1813px 1993px #fff, 344px 223px #fff,
    1099px 1398px #fff, 828px 1298px #fff, 1658px 227px #fff, 21px 264px #fff,
    824px 837px #fff, 222px 803px #fff, 105px 1513px #fff, 646px 1457px #fff,
    200px 462px #fff, 682px 616px #fff, 196px 1737px #fff, 518px 735px #fff,
    590px 77px #fff, 1180px 3px #fff, 110px 182px #fff, 284px 747px #fff,
    1030px 447px #fff, 803px 1048px #fff, 1520px 642px #fff, 1909px 8px #fff,
    728px 1958px #fff, 143px 1686px #fff, 741px 952px #fff, 82px 728px #fff,
    1938px 1px #fff, 111px 880px #fff, 1934px 954px #fff, 1919px 1414px #fff,
    1956px 210px #fff, 1028px 1196px #fff, 1366px 1658px #fff, 117px 1255px #fff,
    177px 955px #fff, 1371px 1788px #fff, 958px 1914px #fff, 1652px 1661px #fff,
    1590px 614px #fff, 881px 1398px #fff, 368px 794px #fff, 1799px 870px #fff,
    1345px 1044px #fff, 231px 1512px #fff, 1107px 585px #fff, 1835px 1619px #fff,
    773px 1479px #fff, 1188px 1821px #fff, 1669px 1689px #fff, 745px 1143px #fff,
    1171px 449px #fff, 1011px 1040px #fff, 1212px 182px #fff, 1378px 586px #fff,
    142px 1559px #fff, 1495px 213px #fff, 139px 374px #fff, 1479px 546px #fff,
    1240px 1450px #fff, 257px 401px #fff, 1844px 1329px #fff, 1695px 221px #fff,
    178px 1363px #fff, 1660px 56px #fff, 717px 108px #fff, 674px 1672px #fff,
    160px 1962px #fff, 1115px 578px #fff, 481px 991px #fff, 1668px 1819px #fff,
    1903px 33px #fff, 1417px 1575px #fff, 1881px 1818px #fff, 595px 108px #fff,
    125px 616px #fff, 731px 1955px #fff, 209px 1225px #fff, 1613px 594px #fff,
    662px 458px #fff, 1107px 1432px #fff, 91px 1616px #fff, 1726px 1239px #fff,
    1055px 782px #fff, 5px 423px #fff, 1337px 344px #fff, 1826px 771px #fff,
    480px 156px #fff, 1116px 334px #fff, 1351px 1390px #fff, 1548px 481px #fff,
    1190px 956px #fff, 1035px 803px #fff, 708px 1760px #fff, 1094px 312px #fff,
    722px 1865px #fff, 1494px 1316px #fff, 1775px 1964px #fff,
    1030px 1729px #fff, 420px 1440px #fff, 768px 208px #fff, 1201px 1713px #fff,
    333px 552px #fff, 1977px 547px #fff, 1906px 1426px #fff, 1180px 1201px #fff,
    805px 102px #fff, 556px 1732px #fff, 606px 1461px #fff, 577px 1750px #fff,
    1506px 1190px #fff, 1997px 1081px #fff, 1118px 564px #fff,
    1841px 1944px #fff, 622px 346px #fff, 1987px 1562px #fff, 1096px 1085px #fff,
    1541px 1754px #fff, 1430px 1111px #fff, 307px 452px #fff, 1823px 1395px #fff,
    1457px 194px #fff, 379px 1658px #fff, 1820px 861px #fff, 1337px 781px #fff,
    1237px 1249px #fff, 846px 199px #fff, 1918px 1951px #fff, 439px 654px #fff,
    1551px 2px #fff, 998px 1576px #fff, 862px 1626px #fff, 203px 1107px #fff,
    1836px 1705px #fff, 973px 1205px #fff, 624px 1815px #fff, 848px 492px #fff,
    665px 1140px #fff, 1207px 1828px #fff, 1096px 800px #fff, 260px 1389px #fff,
    183px 164px #fff, 321px 1946px #fff, 1965px 1549px #fff, 1397px 240px #fff,
    687px 1478px #fff, 451px 1980px #fff, 419px 468px #fff, 545px 425px #fff,
    1378px 1970px #fff, 1259px 818px #fff, 1590px 488px #fff, 953px 734px #fff,
    621px 834px #fff, 119px 1331px #fff, 1606px 1356px #fff, 713px 1365px #fff,
    1292px 995px #fff, 583px 842px #fff, 343px 1248px #fff, 426px 1272px #fff,
    1129px 927px #fff, 54px 1911px #fff, 1542px 1823px #fff, 1502px 780px #fff,
    1725px 1212px #fff, 307px 1470px #fff, 585px 510px #fff, 1613px 1881px #fff,
    1624px 903px #fff, 1959px 987px #fff, 227px 1141px #fff, 542px 476px #fff,
    610px 2000px #fff, 1539px 145px #fff, 22px 1722px #fff, 1800px 1218px #fff,
    557px 650px #fff, 844px 277px #fff, 151px 1759px #fff, 1535px 887px #fff,
    1710px 1096px #fff, 469px 534px #fff, 354px 1900px #fff, 1359px 1126px #fff,
    1924px 1310px #fff, 985px 389px #fff, 412px 1737px #fff, 1738px 1097px #fff,
    1186px 1535px #fff, 141px 1649px #fff, 538px 83px #fff, 579px 1161px #fff,
    965px 464px #fff, 549px 1069px #fff, 1575px 1626px #fff, 1532px 1582px #fff,
    1631px 1684px #fff, 317px 1986px #fff, 255px 1499px #fff, 448px 543px #fff,
    1390px 12px #fff, 1586px 859px #fff, 1136px 1318px #fff, 12px 1132px #fff,
    944px 461px #fff, 985px 1428px #fff, 1811px 738px #fff, 1429px 1484px #fff,
    1953px 1174px #fff, 1613px 1033px #fff, 1184px 1925px #fff, 1624px 9px #fff,
    1798px 1822px #fff, 1156px 663px #fff, 110px 921px #fff, 938px 44px #fff,
    1404px 967px #fff, 1660px 1712px #fff, 159px 533px #fff, 1976px 1804px #fff,
    1612px 1552px #fff, 1638px 656px #fff, 1986px 1593px #fff, 961px 516px #fff,
    1986px 1489px #fff, 1095px 1457px #fff, 1112px 635px #fff, 154px 156px #fff,
    1156px 1600px #fff, 188px 570px #fff, 1016px 795px #fff, 1855px 1174px #fff,
    1019px 958px #fff, 426px 1728px #fff, 1540px 305px #fff, 51px 556px #fff,
    1236px 1351px #fff, 244px 380px #fff, 85px 1832px #fff, 1229px 1068px #fff,
    1852px 1354px #fff, 521px 359px #fff, 968px 335px #fff, 1454px 675px #fff,
    1831px 1572px #fff, 1104px 492px #fff, 790px 1114px #fff, 276px 1556px #fff,
    1369px 1316px #fff, 517px 888px #fff, 1547px 1477px #fff, 1170px 1541px #fff,
    1545px 845px #fff, 1300px 543px #fff, 1354px 353px #fff, 1351px 810px #fff,
    646px 519px #fff, 1079px 1293px #fff, 1294px 1911px #fff, 1641px 1719px #fff,
    1475px 260px #fff, 633px 753px #fff, 1787px 1220px #fff, 1286px 985px #fff,
    174px 490px #fff, 1442px 906px #fff, 789px 118px #fff, 1894px 1838px #fff,
    430px 736px #fff, 612px 372px #fff, 12px 1395px #fff, 1656px 1300px #fff,
    74px 1929px #fff, 658px 70px #fff, 527px 1490px #fff, 1956px 1701px #fff,
    816px 899px #fff, 1325px 716px #fff, 317px 793px #fff, 412px 142px #fff,
    884px 565px #fff, 1065px 1662px #fff, 254px 580px #fff, 544px 958px #fff,
    1219px 322px #fff, 242px 282px #fff, 1489px 1418px #fff, 1407px 521px #fff,
    1751px 764px #fff, 1680px 212px #fff, 922px 1801px #fff, 826px 1899px #fff,
    27px 806px #fff, 1238px 815px #fff, 1272px 1147px #fff, 39px 294px #fff,
    187px 1554px #fff, 1109px 1163px #fff, 955px 1063px #fff, 820px 598px #fff,
    1409px 117px #fff, 447px 484px #fff, 1750px 1363px #fff, 824px 1453px #fff,
    914px 1258px #fff, 157px 1413px #fff, 129px 423px #fff, 608px 115px #fff,
    1384px 1031px #fff, 1337px 1684px #fff, 638px 1230px #fff, 510px 258px #fff,
    883px 1076px #fff, 419px 1060px #fff, 1354px 1411px #fff, 1740px 1318px #fff,
    890px 380px #fff, 190px 31px #fff, 980px 136px #fff, 452px 1545px #fff,
    400px 1982px #fff, 1886px 504px #fff, 1797px 1259px #fff, 879px 184px #fff,
    626px 1960px #fff, 497px 117px #fff, 48px 1568px #fff, 1669px 911px #fff,
    211px 988px #fff, 848px 1471px #fff, 284px 407px #fff, 1886px 646px #fff,
    990px 901px #fff, 1875px 696px #fff, 1076px 974px #fff, 419px 672px #fff,
    1431px 1789px #fff, 1792px 1004px #fff, 964px 1012px #fff,
    1645px 1386px #fff, 1501px 1292px #fff, 445px 1076px #fff, 804px 1622px #fff,
    285px 333px #fff, 1127px 975px #fff, 934px 24px #fff, 399px 1120px #fff,
    293px 1918px #fff, 1405px 723px #fff, 1288px 1471px #fff, 1657px 1154px #fff,
    1034px 648px #fff, 811px 495px #fff, 912px 414px #fff, 1652px 251px #fff,
    357px 1967px #fff, 1495px 1360px #fff, 581px 328px #fff, 928px 1500px #fff,
    1881px 1167px #fff, 1356px 1932px #fff, 321px 807px #fff, 85px 186px #fff,
    1042px 1508px #fff, 440px 1640px #fff, 1938px 823px #fff, 1711px 785px #fff,
    206px 1058px #fff, 1836px 434px #fff, 1049px 1663px #fff, 712px 159px #fff,
    686px 1213px #fff, 963px 1202px #fff, 632px 438px #fff, 278px 1712px #fff,
    1735px 43px #fff, 212px 1512px #fff, 394px 1426px #fff, 1691px 1713px #fff,
    1131px 1232px #fff, 562px 1975px #fff, 352px 1686px #fff, 422px 177px #fff,
    567px 619px #fff, 1024px 1005px #fff, 1026px 1826px #fff, 480px 688px #fff,
    1298px 197px #fff, 675px 1003px #fff, 1165px 1898px #fff, 833px 658px #fff,
    1961px 431px #fff, 1764px 885px #fff, 2000px 1196px #fff, 1973px 667px #fff,
    490px 1486px #fff, 129px 1288px #fff, 1937px 1304px #fff, 472px 1518px #fff,
    1830px 1427px #fff, 739px 661px #fff, 964px 512px #fff, 1560px 755px #fff,
    1518px 708px #fff, 1903px 1140px #fff, 875px 1105px #fff, 1192px 1983px #fff,
    265px 1903px #fff, 328px 1852px #fff, 736px 1513px #fff, 1796px 1961px #fff,
    1385px 1353px #fff, 50px 1380px #fff, 1444px 1236px #fff, 606px 1148px #fff,
    1954px 686px #fff, 164px 230px #fff, 1927px 358px #fff, 526px 1374px #fff,
    580px 1349px #fff, 407px 712px #fff, 1208px 607px #fff, 2px 498px #fff,
    461px 1910px #fff, 320px 1554px #fff, 1361px 1221px #fff, 357px 1786px #fff,
    1607px 287px #fff, 665px 1260px #fff, 816px 1383px #fff, 421px 617px #fff,
    316px 1258px #fff, 1775px 587px #fff, 544px 864px #fff, 900px 1489px #fff,
    229px 164px #fff, 1053px 22px #fff, 1750px 1180px #fff, 287px 1995px #fff,
    1750px 1258px #fff, 1254px 1375px #fff, 778px 1102px #fff, 1267px 61px #fff,
    955px 397px #fff, 292px 960px #fff, 378px 157px #fff, 1786px 1006px #fff,
    459px 969px #fff, 1399px 1052px #fff, 1469px 201px #fff, 654px 127px #fff,
    528px 256px #fff, 1543px 1437px #fff, 920px 806px #fff, 11px 844px #fff,
    298px 1764px #fff, 815px 1874px #fff, 181px 1752px #fff, 443px 873px #fff,
    470px 78px #fff, 1168px 6px #fff, 1259px 1483px #fff, 594px 457px #fff,
    1763px 1123px #fff, 118px 1621px #fff, 619px 1423px #fff, 1140px 1213px #fff,
    1621px 1268px #fff, 1524px 963px #fff, 1036px 360px #fff, 1251px 554px #fff,
    1778px 1331px #fff, 1874px 787px #fff, 1967px 198px #fff, 94px 182px #fff,
    484px 502px #fff, 85px 571px #fff, 865px 961px #fff, 1981px 1197px #fff,
    530px 1322px #fff, 783px 1508px #fff, 727px 1599px #fff, 1655px 602px #fff,
    355px 1837px #fff, 1097px 1216px #fff, 631px 1051px #fff, 1454px 1089px #fff,
    1589px 676px #fff, 555px 220px #fff, 942px 1005px #fff, 822px 616px #fff,
    898px 1182px #fff, 1209px 313px #fff, 1116px 815px #fff, 1478px 1490px #fff,
    1959px 21px #fff, 310px 18px #fff, 702px 571px #fff, 1871px 370px #fff,
    1566px 1772px #fff, 714px 1971px #fff, 1195px 709px #fff, 1051px 1005px #fff,
    1476px 1133px #fff, 1129px 1092px #fff, 1319px 865px #fff, 473px 1771px #fff,
    1459px 1622px #fff, 130px 1575px #fff, 113px 1748px #fff, 451px 1868px #fff,
    1688px 1367px #fff, 1516px 952px #fff, 1891px 994px #fff, 31px 329px #fff,
    583px 454px #fff, 1721px 723px #fff, 1788px 493px #fff, 1136px 678px #fff,
    1210px 921px #fff, 931px 1503px #fff, 515px 1530px #fff, 507px 936px #fff,
    112px 120px #fff, 459px 1925px #fff, 801px 235px #fff, 873px 1135px #fff,
    904px 523px #fff, 1919px 1123px #fff, 1415px 115px #fff, 1610px 1004px #fff,
    1864px 165px #fff, 325px 925px #fff, 1127px 1451px #fff, 1077px 1483px #fff,
    1672px 1266px #fff, 1934px 286px #fff, 1862px 1948px #fff, 550px 1765px #fff,
    1224px 169px #fff, 412px 386px #fff, 279px 819px #fff, 1735px 1819px #fff,
    216px 987px #fff, 491px 600px #fff, 1456px 1102px #fff, 160px 239px #fff,
    430px 887px #fff, 743px 212px #fff, 1050px 183px #fff, 1255px 705px #fff,
    967px 714px #fff, 1102px 621px #fff, 1066px 1945px #fff, 1926px 144px #fff,
    72px 568px #fff, 1446px 55px #fff, 1145px 989px #fff, 602px 256px #fff,
    866px 1371px #fff, 1808px 157px #fff, 650px 549px #fff, 1556px 885px #fff,
    340px 1276px #fff, 1586px 314px #fff, 930px 1147px #fff, 988px 313px #fff,
    1832px 874px #fff, 125px 1971px #fff, 361px 535px #fff, 1854px 1531px #fff,
    303px 1264px #fff, 1784px 845px #fff, 1388px 1928px #fff, 1812px 1563px #fff,
    1634px 426px #fff, 1347px 157px #fff, 312px 1794px #fff, 888px 276px #fff,
    1575px 182px #fff, 1691px 697px #fff, 1481px 1995px #fff, 716px 663px #fff,
    1974px 73px #fff, 1743px 1429px #fff, 1816px 1724px #fff, 384px 63px #fff,
    1650px 727px #fff, 1581px 529px #fff, 1557px 1990px #fff, 299px 875px #fff,
    1089px 466px #fff, 1308px 1396px #fff, 501px 520px #fff, 1791px 1771px #fff,
    1616px 868px #fff, 974px 293px #fff, 1657px 401px #fff, 476px 668px #fff,
    471px 700px #fff, 1311px 114px #fff, 856px 168px #fff, 1624px 1502px #fff,
    1731px 402px #fff, 385px 1847px #fff, 1405px 1034px #fff, 1719px 683px #fff,
    1952px 1931px #fff;
}

#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  opacity: 0.4;
  box-shadow: 1138px 280px #fff, 700px 1111px #fff, 1068px 581px #fff,
    1992px 1570px #fff, 587px 942px #fff, 254px 1413px #fff, 1590px 1419px #fff,
    69px 938px #fff, 378px 836px #fff, 649px 313px #fff, 835px 180px #fff,
    45px 792px #fff, 1731px 82px #fff, 691px 1167px #fff, 1169px 1054px #fff,
    485px 1367px #fff, 1190px 1003px #fff, 667px 1906px #fff, 1545px 178px #fff,
    1617px 1506px #fff, 1214px 517px #fff, 162px 1174px #fff, 1505px 597px #fff,
    1178px 381px #fff, 1734px 422px #fff, 974px 506px #fff, 383px 56px #fff,
    720px 815px #fff, 1236px 822px #fff, 1583px 937px #fff, 75px 794px #fff,
    1963px 1524px #fff, 1277px 396px #fff, 1123px 324px #fff, 1910px 546px #fff,
    962px 422px #fff, 1581px 958px #fff, 185px 35px #fff, 1566px 742px #fff,
    1470px 1007px #fff, 1630px 775px #fff, 843px 381px #fff, 753px 1656px #fff,
    980px 1992px #fff, 1937px 692px #fff, 1416px 654px #fff, 1622px 480px #fff,
    826px 275px #fff, 1430px 155px #fff, 1659px 820px #fff, 1431px 1820px #fff,
    389px 988px #fff, 1298px 1192px #fff, 1239px 1616px #fff, 219px 1672px #fff,
    152px 25px #fff, 485px 366px #fff, 222px 84px #fff, 492px 849px #fff,
    984px 588px #fff, 251px 1202px #fff, 1319px 179px #fff, 1592px 1990px #fff,
    1181px 1117px #fff, 804px 873px #fff, 1557px 1848px #fff, 1577px 577px #fff,
    711px 1666px #fff, 238px 886px #fff, 1807px 78px #fff, 1683px 1628px #fff,
    92px 259px #fff, 1595px 1700px #fff, 1004px 389px #fff, 1173px 782px #fff,
    1337px 1215px #fff, 962px 630px #fff, 1905px 65px #fff, 125px 1674px #fff,
    899px 861px #fff, 566px 1120px #fff, 3px 1257px #fff, 1908px 1407px #fff,
    1696px 1234px #fff, 807px 1368px #fff, 1137px 615px #fff, 16px 425px #fff,
    1963px 505px #fff, 473px 49px #fff, 1625px 8px #fff, 788px 1760px #fff,
    1451px 1747px #fff, 881px 228px #fff, 1331px 121px #fff, 1919px 253px #fff,
    122px 1420px #fff, 644px 711px #fff, 1069px 867px #fff, 1904px 372px #fff,
    1641px 201px #fff, 1759px 1111px #fff, 696px 1702px #fff, 1970px 1434px #fff,
    1389px 1115px #fff, 1652px 1125px #fff, 159px 218px #fff, 950px 1989px #fff,
    498px 1772px #fff, 427px 1691px #fff, 1466px 1191px #fff, 1303px 820px #fff,
    1177px 753px #fff, 1619px 513px #fff, 1311px 1572px #fff, 167px 232px #fff,
    992px 1277px #fff, 787px 454px #fff, 251px 1029px #fff, 1246px 180px #fff,
    911px 1945px #fff, 1659px 400px #fff, 1687px 1983px #fff, 1203px 1486px #fff,
    610px 1840px #fff, 1681px 1179px #fff, 1786px 951px #fff, 922px 926px #fff,
    748px 134px #fff, 475px 1722px #fff, 586px 1226px #fff, 1256px 42px #fff,
    1110px 262px #fff, 1568px 1202px #fff, 1px 1658px #fff, 13px 1881px #fff,
    1145px 1950px #fff, 201px 546px #fff, 1437px 1775px #fff, 1848px 1512px #fff,
    1448px 1610px #fff, 1863px 1529px #fff, 1018px 1555px #fff, 34px 178px #fff,
    550px 131px #fff, 742px 1726px #fff, 1603px 1520px #fff, 873px 429px #fff,
    1243px 380px #fff, 601px 1559px #fff, 1591px 1591px #fff, 1850px 578px #fff,
    739px 931px #fff, 121px 1583px #fff, 513px 1185px #fff, 1198px 966px #fff,
    1509px 1839px #fff, 489px 840px #fff, 594px 1666px #fff, 1350px 1550px #fff,
    1195px 1861px #fff, 1806px 182px #fff, 1722px 1497px #fff, 465px 27px #fff,
    1269px 822px #fff, 212px 1890px #fff, 654px 1299px #fff, 1921px 26px #fff,
    1330px 276px #fff, 1729px 1406px #fff, 1581px 1937px #fff, 232px 1221px #fff,
    1080px 929px #fff, 1866px 1667px #fff, 510px 699px #fff, 1762px 1812px #fff,
    1643px 445px #fff, 1911px 381px #fff, 305px 322px #fff, 484px 1054px #fff,
    368px 1189px #fff, 755px 1660px #fff, 1359px 647px #fff, 704px 309px #fff,
    890px 263px #fff, 1813px 261px #fff, 1223px 1796px #fff, 482px 1982px #fff,
    366px 1354px #fff, 692px 1649px #fff, 73px 927px #fff, 1360px 1409px #fff,
    185px 734px #fff, 383px 1823px #fff, 2000px 92px #fff, 485px 299px #fff,
    913px 25px #fff, 1836px 1682px #fff, 893px 767px #fff, 12px 1377px #fff,
    1651px 926px #fff;
  animation: animStar 150s linear infinite;
}
#stars2:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 1138px 280px #fff, 700px 1111px #fff, 1068px 581px #fff,
    1992px 1570px #fff, 587px 942px #fff, 254px 1413px #fff, 1590px 1419px #fff,
    69px 938px #fff, 378px 836px #fff, 649px 313px #fff, 835px 180px #fff,
    45px 792px #fff, 1731px 82px #fff, 691px 1167px #fff, 1169px 1054px #fff,
    485px 1367px #fff, 1190px 1003px #fff, 667px 1906px #fff, 1545px 178px #fff,
    1617px 1506px #fff, 1214px 517px #fff, 162px 1174px #fff, 1505px 597px #fff,
    1178px 381px #fff, 1734px 422px #fff, 974px 506px #fff, 383px 56px #fff,
    720px 815px #fff, 1236px 822px #fff, 1583px 937px #fff, 75px 794px #fff,
    1963px 1524px #fff, 1277px 396px #fff, 1123px 324px #fff, 1910px 546px #fff,
    962px 422px #fff, 1581px 958px #fff, 185px 35px #fff, 1566px 742px #fff,
    1470px 1007px #fff, 1630px 775px #fff, 843px 381px #fff, 753px 1656px #fff,
    980px 1992px #fff, 1937px 692px #fff, 1416px 654px #fff, 1622px 480px #fff,
    826px 275px #fff, 1430px 155px #fff, 1659px 820px #fff, 1431px 1820px #fff,
    389px 988px #fff, 1298px 1192px #fff, 1239px 1616px #fff, 219px 1672px #fff,
    152px 25px #fff, 485px 366px #fff, 222px 84px #fff, 492px 849px #fff,
    984px 588px #fff, 251px 1202px #fff, 1319px 179px #fff, 1592px 1990px #fff,
    1181px 1117px #fff, 804px 873px #fff, 1557px 1848px #fff, 1577px 577px #fff,
    711px 1666px #fff, 238px 886px #fff, 1807px 78px #fff, 1683px 1628px #fff,
    92px 259px #fff, 1595px 1700px #fff, 1004px 389px #fff, 1173px 782px #fff,
    1337px 1215px #fff, 962px 630px #fff, 1905px 65px #fff, 125px 1674px #fff,
    899px 861px #fff, 566px 1120px #fff, 3px 1257px #fff, 1908px 1407px #fff,
    1696px 1234px #fff, 807px 1368px #fff, 1137px 615px #fff, 16px 425px #fff,
    1963px 505px #fff, 473px 49px #fff, 1625px 8px #fff, 788px 1760px #fff,
    1451px 1747px #fff, 881px 228px #fff, 1331px 121px #fff, 1919px 253px #fff,
    122px 1420px #fff, 644px 711px #fff, 1069px 867px #fff, 1904px 372px #fff,
    1641px 201px #fff, 1759px 1111px #fff, 696px 1702px #fff, 1970px 1434px #fff,
    1389px 1115px #fff, 1652px 1125px #fff, 159px 218px #fff, 950px 1989px #fff,
    498px 1772px #fff, 427px 1691px #fff, 1466px 1191px #fff, 1303px 820px #fff,
    1177px 753px #fff, 1619px 513px #fff, 1311px 1572px #fff, 167px 232px #fff,
    992px 1277px #fff, 787px 454px #fff, 251px 1029px #fff, 1246px 180px #fff,
    911px 1945px #fff, 1659px 400px #fff, 1687px 1983px #fff, 1203px 1486px #fff,
    610px 1840px #fff, 1681px 1179px #fff, 1786px 951px #fff, 922px 926px #fff,
    748px 134px #fff, 475px 1722px #fff, 586px 1226px #fff, 1256px 42px #fff,
    1110px 262px #fff, 1568px 1202px #fff, 1px 1658px #fff, 13px 1881px #fff,
    1145px 1950px #fff, 201px 546px #fff, 1437px 1775px #fff, 1848px 1512px #fff,
    1448px 1610px #fff, 1863px 1529px #fff, 1018px 1555px #fff, 34px 178px #fff,
    550px 131px #fff, 742px 1726px #fff, 1603px 1520px #fff, 873px 429px #fff,
    1243px 380px #fff, 601px 1559px #fff, 1591px 1591px #fff, 1850px 578px #fff,
    739px 931px #fff, 121px 1583px #fff, 513px 1185px #fff, 1198px 966px #fff,
    1509px 1839px #fff, 489px 840px #fff, 594px 1666px #fff, 1350px 1550px #fff,
    1195px 1861px #fff, 1806px 182px #fff, 1722px 1497px #fff, 465px 27px #fff,
    1269px 822px #fff, 212px 1890px #fff, 654px 1299px #fff, 1921px 26px #fff,
    1330px 276px #fff, 1729px 1406px #fff, 1581px 1937px #fff, 232px 1221px #fff,
    1080px 929px #fff, 1866px 1667px #fff, 510px 699px #fff, 1762px 1812px #fff,
    1643px 445px #fff, 1911px 381px #fff, 305px 322px #fff, 484px 1054px #fff,
    368px 1189px #fff, 755px 1660px #fff, 1359px 647px #fff, 704px 309px #fff,
    890px 263px #fff, 1813px 261px #fff, 1223px 1796px #fff, 482px 1982px #fff,
    366px 1354px #fff, 692px 1649px #fff, 73px 927px #fff, 1360px 1409px #fff,
    185px 734px #fff, 383px 1823px #fff, 2000px 92px #fff, 485px 299px #fff,
    913px 25px #fff, 1836px 1682px #fff, 893px 767px #fff, 12px 1377px #fff,
    1651px 926px #fff;
}

#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  opacity: 0.5;
  box-shadow: 816px 128px #fff, 1093px 1146px #fff, 1460px 1445px #fff,
    1448px 1557px #fff, 1511px 57px #fff, 73px 415px #fff, 706px 1236px #fff,
    1704px 1759px #fff, 150px 1309px #fff, 98px 668px #fff, 1613px 1345px #fff,
    1865px 165px #fff, 83px 1505px #fff, 350px 1275px #fff, 91px 1098px #fff,
    1587px 1176px #fff, 1661px 1353px #fff, 1815px 188px #fff, 473px 1543px #fff,
    1841px 237px #fff, 1477px 746px #fff, 135px 297px #fff, 528px 1445px #fff,
    1494px 356px #fff, 700px 876px #fff, 1274px 1713px #fff, 214px 939px #fff,
    1134px 1844px #fff, 116px 509px #fff, 981px 1164px #fff, 589px 1089px #fff,
    1220px 1752px #fff, 397px 34px #fff, 1979px 556px #fff, 995px 1934px #fff,
    1357px 585px #fff, 64px 1782px #fff, 1981px 229px #fff, 1333px 1041px #fff,
    850px 151px #fff, 1979px 158px #fff, 1294px 377px #fff, 480px 1756px #fff,
    1898px 461px #fff, 710px 966px #fff, 1817px 1655px #fff, 1746px 1952px #fff,
    1694px 1060px #fff, 766px 1905px #fff, 470px 595px #fff, 1917px 523px #fff,
    1603px 1386px #fff, 1409px 1781px #fff, 184px 899px #fff, 1488px 1593px #fff,
    341px 1073px #fff, 1090px 713px #fff, 1375px 1930px #fff, 1326px 602px #fff,
    1898px 408px #fff, 1684px 1975px #fff, 446px 1885px #fff, 1345px 1825px #fff,
    1844px 803px #fff, 637px 1530px #fff, 1651px 1630px #fff, 860px 1814px #fff,
    1904px 1823px #fff, 1748px 529px #fff, 282px 1482px #fff, 844px 1580px #fff,
    1279px 1776px #fff, 977px 278px #fff, 1653px 1238px #fff, 1646px 1362px #fff,
    1762px 519px #fff, 116px 295px #fff, 251px 48px #fff, 241px 591px #fff,
    1129px 1320px #fff, 461px 376px #fff, 83px 282px #fff, 1889px 463px #fff,
    713px 767px #fff, 923px 1721px #fff, 1049px 742px #fff, 655px 746px #fff,
    1907px 19px #fff, 962px 1868px #fff, 730px 546px #fff, 1469px 117px #fff,
    502px 1728px #fff, 566px 1060px #fff, 899px 1080px #fff, 1566px 358px #fff,
    980px 1513px #fff, 427px 827px #fff, 169px 1355px #fff, 905px 1620px #fff,
    992px 6px #fff;
  animation: animStar 200s linear infinite;
}
#stars3:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 816px 128px #fff, 1093px 1146px #fff, 1460px 1445px #fff,
    1448px 1557px #fff, 1511px 57px #fff, 73px 415px #fff, 706px 1236px #fff,
    1704px 1759px #fff, 150px 1309px #fff, 98px 668px #fff, 1613px 1345px #fff,
    1865px 165px #fff, 83px 1505px #fff, 350px 1275px #fff, 91px 1098px #fff,
    1587px 1176px #fff, 1661px 1353px #fff, 1815px 188px #fff, 473px 1543px #fff,
    1841px 237px #fff, 1477px 746px #fff, 135px 297px #fff, 528px 1445px #fff,
    1494px 356px #fff, 700px 876px #fff, 1274px 1713px #fff, 214px 939px #fff,
    1134px 1844px #fff, 116px 509px #fff, 981px 1164px #fff, 589px 1089px #fff,
    1220px 1752px #fff, 397px 34px #fff, 1979px 556px #fff, 995px 1934px #fff,
    1357px 585px #fff, 64px 1782px #fff, 1981px 229px #fff, 1333px 1041px #fff,
    850px 151px #fff, 1979px 158px #fff, 1294px 377px #fff, 480px 1756px #fff,
    1898px 461px #fff, 710px 966px #fff, 1817px 1655px #fff, 1746px 1952px #fff,
    1694px 1060px #fff, 766px 1905px #fff, 470px 595px #fff, 1917px 523px #fff,
    1603px 1386px #fff, 1409px 1781px #fff, 184px 899px #fff, 1488px 1593px #fff,
    341px 1073px #fff, 1090px 713px #fff, 1375px 1930px #fff, 1326px 602px #fff,
    1898px 408px #fff, 1684px 1975px #fff, 446px 1885px #fff, 1345px 1825px #fff,
    1844px 803px #fff, 637px 1530px #fff, 1651px 1630px #fff, 860px 1814px #fff,
    1904px 1823px #fff, 1748px 529px #fff, 282px 1482px #fff, 844px 1580px #fff,
    1279px 1776px #fff, 977px 278px #fff, 1653px 1238px #fff, 1646px 1362px #fff,
    1762px 519px #fff, 116px 295px #fff, 251px 48px #fff, 241px 591px #fff,
    1129px 1320px #fff, 461px 376px #fff, 83px 282px #fff, 1889px 463px #fff,
    713px 767px #fff, 923px 1721px #fff, 1049px 742px #fff, 655px 746px #fff,
    1907px 19px #fff, 962px 1868px #fff, 730px 546px #fff, 1469px 117px #fff,
    502px 1728px #fff, 566px 1060px #fff, 899px 1080px #fff, 1566px 358px #fff,
    980px 1513px #fff, 427px 827px #fff, 169px 1355px #fff, 905px 1620px #fff,
    992px 6px #fff;
}

@keyframes animStar {
  from {
    transform: translateY(0px) rotate(0);
  }
  to {
    transform: translateY(-2000px) rotate(50deg);
  }
}
</style>
