module.exports = function toReadable (number) {
    let array = number.toString().split('');
    let numbers010 = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten'
    };
    let numbers1120 = {
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty'
    };
    let numbers2090 = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }

    if (number == 0) {
       return 'zero';
    } else if (number >= 0 && number <= 10) { 
        return numbers010[number];
    } else if (number > 10 && number <= 20) {
        return numbers1120[number];
    } else if (number > 20 && number < 30 ||
                number > 30 && number < 40 ||
                number > 40 && number < 50 ||
                number > 50 && number < 60 ||
                number > 60 && number < 70 ||
                number > 70 && number < 80 ||
                number > 80 && number < 90 ||
                number > 90 && number < 100) {
                    return numbers2090[+array[0]] + ' ' + numbers010[+array[1]];
    } else if (number == 30 ||
                number == 40 ||
                number == 50 ||
                number == 60 ||
                number == 70 ||
                number == 80 ||
                number == 90){
                    return numbers2090[+array[0]];
    }  else if (number == 100 ||
                number == 200 ||
                number == 300 ||
                number == 400 ||
                number == 500 ||
                number == 600 ||
                number == 700 ||
                number == 800 ||
                number == 900) {
                    return numbers010[+array[0]] + ' hundred';
    } else if (number > 120 && number < 130 ||
                number > 130 && number < 140 ||
                number > 140 && number < 150 || 
                number > 150 && number < 160 || 
                number > 160 && number < 170 || 
                number > 170 && number < 180 || 
                number > 180 && number < 190 || 
                number > 190 && number < 200 ||
                number > 220 && number < 230 || 
                number > 230 && number < 240 ||
                number > 240 && number < 250 || 
                number > 250 && number < 260 || 
                number > 260 && number < 270 || 
                number > 270 && number < 280 || 
                number > 280 && number < 290 || 
                number > 290 && number < 300 ||
                number > 320 && number < 330 ||
                number > 330 && number < 340 || 
                number > 340 && number < 350 || 
                number > 350 && number < 360 || 
                number > 360 && number < 370 || 
                number > 370 && number < 380 || 
                number > 380 && number < 390 || 
                number > 390 && number < 400 ||
                number > 420 && number < 430 || 
                number > 430 && number < 440 || 
                number > 440 && number < 450 || 
                number > 450 && number < 460 || 
                number > 460 && number < 470 || 
                number > 470 && number < 480 || 
                number > 480 && number < 490 ||
                number > 490 && number < 500 ||
                number > 520 && number < 530 || 
                number > 530 && number < 540 || 
                number > 540 && number < 550 || 
                number > 550 && number < 560 || 
                number > 560 && number < 570 || 
                number > 570 && number < 580 || 
                number > 580 && number < 590 ||
                number > 590 && number < 600 ||
                number > 620 && number < 630 || 
                number > 630 && number < 640 || 
                number > 640 && number < 650 || 
                number > 650 && number < 660 || 
                number > 660 && number < 670 || 
                number > 670 && number < 680 || 
                number > 680 && number < 690 ||
                number > 690 && number < 700 ||
                number > 720 && number < 730 || 
                number > 730 && number < 740 || 
                number > 740 && number < 750 || 
                number > 750 && number < 760 || 
                number > 760 && number < 770 || 
                number > 770 && number < 780 || 
                number > 780 && number < 790 ||
                number > 790 && number < 800 ||
                number > 820 && number < 830 || 
                number > 830 && number < 840 || 
                number > 840 && number < 850 || 
                number > 850 && number < 860 || 
                number > 860 && number < 870 || 
                number > 870 && number < 880 || 
                number > 880 && number < 890 ||
                number > 890 && number < 900 ||
                number > 920 && number < 930 || 
                number > 930 && number < 940 || 
                number > 940 && number < 950 || 
                number > 950 && number < 960 || 
                number > 960 && number < 970 || 
                number > 970 && number < 980 || 
                number > 980 && number < 990 ||
                number > 990 && number < 1000) {
                    return numbers010[+array[0]] + ' hundred' + ' ' + numbers2090[+array[1]] + ' ' + numbers010[+array[2]];
    } else if (number > 110 && number < 120 ||
                number > 210 && number < 220 ||
                number > 310 && number < 320 ||
                number > 410 && number < 420 ||
                number > 510 && number < 520 ||
                number > 610 && number < 620 ||
                number > 710 && number < 720 ||
                number > 810 && number < 820 ||
                number > 910 && number < 920) {
                    let string = number.toString();
                    let substring = string.slice(1);
                    let index = +substring;
                    return numbers010[+array[0]] + ' hundred ' + numbers1120[index];
    } else if (number > 100 && number <= 110 ||
                number > 200 && number <= 210 ||
                number > 300 && number <= 310 ||
                number > 400 && number <= 410 ||
                number > 500 && number <= 510 ||
                number > 600 && number <= 610 ||
                number > 700 && number <= 710 ||
                number > 800 && number <= 810 ||
                number > 900 && number <= 910) {
                    let string = number.toString();
                    let substring = string.slice(1);
                    let index = +substring;
                    return numbers010[+array[0]] + ' hundred ' + numbers010[index];
    }  else {
            return numbers010[+array[0]] + ' hundred ' + numbers2090[+array[1]];
    }
}
