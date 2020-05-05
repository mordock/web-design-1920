//table
let header = findElement('header');
let Centrale1 = findElement('C1');
    Centrale2 = findElement('C2');
    Centrale3 = findElement('C3');
    Centrale4 = findElement('C4');
    Centrale5 = findElement('C5');
    Centrale6 = findElement('C6');
    Centrale7 = findElement('C7');
    Centrale8 = findElement('C8');
    Centrale9 = findElement('C9');
    Centrale10 = findElement('C10');
let sub1 = findElement('sub1');
    sub2 = findElement('sub2');
    sub3 = findElement('sub3');

    header.children[0].addEventListener('focusin', () => {speak('Kop, Oude kolencentrales');});
    header.children[1].addEventListener('focusin', () => {speak('Kop, Bouwjaar');});
    header.children[2].addEventListener('focusin', () => {speak('Kop, Vermogen');});
    header.children[3].addEventListener('focusin', () => {speak('Kop, rendement');});
    header.children[4].addEventListener('focusin', () => {speak('Kop, C o 2 uitstoot');});
    
    Centrale1.children[0].addEventListener('focusin', () => {speak('Kolencentrale Delta in Borsele');});
    Centrale1.children[1].addEventListener('focusin', () => {speak('Bouwjaar 1988');});
    Centrale1.children[2].addEventListener('focusin', () => {speak('Vermogen 406 Mega Watt');});
    Centrale1.children[3].addEventListener('focusin', () => {speak('Rendement 38% voor alle oude centrales');});
    Centrale1.children[4].addEventListener('focusin', () => {speak('2.1 Megaton uitstoot per jaar');});
    
    Centrale2.children[0].addEventListener('focusin', () => {speak('Kolencentrale Essent');});
    Centrale2.children[1].addEventListener('focusin', () => {speak('Bouwjaar 1981');});
    Centrale2.children[2].addEventListener('focusin', () => {speak('Vermogen 645 Mega Watt');});
    Centrale2.children[3].addEventListener('focusin', () => {speak('2.1 Megaton uitstoot per jaar');});
    
    Centrale3.children[0].addEventListener('focusin', () => {speak('Kolencentrale Engie in Gelderland');});
    Centrale3.children[1].addEventListener('focusin', () => {speak('Bouwjaar 1985');});
    Centrale3.children[2].addEventListener('focusin', () => {speak('Vermogen 570 Mega Watt');});
    Centrale3.children[3].addEventListener('focusin', () => {speak('2.8 Megaton uitstoot per jaar');});
    
    Centrale4.children[0].addEventListener('focusin', () => {speak('Kolencentrale Uniper in Maasvlakte');});
    Centrale4.children[1].addEventListener('focusin', () => {speak('Bouwjaar 1988');});
    Centrale4.children[2].addEventListener('focusin', () => {speak('Vermogen 500 Mega Watt');});
    Centrale4.children[3].addEventListener('focusin', () => {speak('3.0 Megaton uitstoot per jaar');});
    
    Centrale5.children[0].addEventListener('focusin', () => {speak('Kolencentrale Uniper in Maasvlakte');});
    Centrale5.children[1].addEventListener('focusin', () => {speak('Bouwjaar 1989');});
    Centrale5.children[2].addEventListener('focusin', () => {speak('Vermogen 500 Mega Watt');});
    Centrale5.children[3].addEventListener('focusin', () => {speak('3.0 Megaton uitstoot per jaar');});
    
    sub1.children[0].addEventListener('focusin', () => {speak('Kop, Totaal oude kolencentrales');});
    sub1.children[1].addEventListener('focusin', () => {speak('Kop, leeg');});
    sub1.children[2].addEventListener('focusin', () => {speak('Kop, Totaal vermogen is 2621 mega watt voor oude centrales');});
    sub1.children[3].addEventListener('focusin', () => {speak('Kop, Leeg');});
    sub1.children[4].addEventListener('focusin', () => {speak('Kop, Totale uitstoot 13.0 voor oude centrales');});
    
    Centrale6.children[0].addEventListener('focusin', () => {speak('Kolencentrale NUON');});
    Centrale6.children[1].addEventListener('focusin', () => {speak('Bouwjaar 1995');});
    Centrale6.children[2].addEventListener('focusin', () => {speak('Vermogen 630 Mega Watt');});
    Centrale6.children[3].addEventListener('focusin', () => {speak('Rendement 42% voor alle centralen in de jaren 90');});
    Centrale6.children[4].addEventListener('focusin', () => {speak('4.0 Megaton uitstoot per jaar');});
    
    Centrale7.children[0].addEventListener('focusin', () => {speak('Kolencentrale Essent');});
    Centrale7.children[1].addEventListener('focusin', () => {speak('Bouwjaar 1994');});
    Centrale7.children[2].addEventListener('focusin', () => {speak('Vermogen 600 Mega Watt');});
    Centrale7.children[3].addEventListener('focusin', () => {speak('3.6 Megaton uitstoot per jaar');});
    
    sub2.children[0].addEventListener('focusin', () => {speak('Kop, Totaal centrales jaren 90');});
    sub2.children[1].addEventListener('focusin', () => {speak('Kop, leeg');});
    sub2.children[2].addEventListener('focusin', () => {speak('Kop, Totaal vermogen is 1230 mega watt');});
    sub2.children[3].addEventListener('focusin', () => {speak('Kop, Leeg');});
    sub2.children[4].addEventListener('focusin', () => {speak('Kop, Totale uitstoot 7.6 ton per jaar');});
    
    Centrale8.children[0].addEventListener('focusin', () => {speak('Kolencentrale Engie in Maasvlakte');});
    Centrale8.children[1].addEventListener('focusin', () => {speak('Bouwjaar 2015');});
    Centrale8.children[2].addEventListener('focusin', () => {speak('Vermogen 800 Mega Watt');});
    Centrale8.children[3].addEventListener('focusin', () => {speak('Rendement 46% voor alle oude centrales');});
    Centrale8.children[4].addEventListener('focusin', () => {speak('3.2 Megaton uitstoot per jaar');});
    
    Centrale9.children[0].addEventListener('focusin', () => {speak('Kolencentrale Uniper in Maasvlakte');});
    Centrale9.children[1].addEventListener('focusin', () => {speak('Bouwjaar 2016');});
    Centrale9.children[2].addEventListener('focusin', () => {speak('Vermogen 1070 Mega Watt');});
    Centrale9.children[3].addEventListener('focusin', () => {speak('4.7 Megaton uitstoot per jaar');});
    
    Centrale10.children[0].addEventListener('focusin', () => {speak('Kolencentrale Essent in Eemshaven');});
    Centrale10.children[1].addEventListener('focusin', () => {speak('Bouwjaar 2015');});
    Centrale10.children[2].addEventListener('focusin', () => {speak('Vermogen 1560 Mega Watt');});
    Centrale10.children[3].addEventListener('focusin', () => {speak('8.3 Megaton uitstoot per jaar');});
    
    sub3.children[0].addEventListener('focusin', () => {speak('Kop, Totaal nieuwe centrales');});
    sub3.children[1].addEventListener('focusin', () => {speak('Kop, leeg');});
    sub3.children[2].addEventListener('focusin', () => {speak('Kop, Totaal vermogen is 3430');});
    sub3.children[3].addEventListener('focusin', () => {speak('Kop, Leeg');});
    sub3.children[4].addEventListener('focusin', () => {speak('Kop, Totale uitstoot 16.2 ton per jaar');});