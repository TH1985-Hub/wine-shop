// const garanDmak = 'https://d2dyoi7emzmazg.cloudfront.net/garanDmak.jpg';
// const redDry = 'https://d2dyoi7emzmazg.cloudfront.net/redDry.jpg';
// const reserveDry = 'https://d2dyoi7emzmazg.cloudfront.net/reserveDry.jpg';
// const roseDry = 'https://d2dyoi7emzmazg.cloudfront.net/roseDry.jpg';
// const tigraniSpecial = 'https://d2dyoi7emzmazg.cloudfront.net/tigraniSpecial.jpg';
// const whiteDry = 'https://d2dyoi7emzmazg.cloudfront.net/whiteDry.jpg';
import garanDmakWhite from "./images/Jraghatspanyan/Garan-Dmak-white.png";
import redDry from './images/Jraghatspanyan/red-dry.png';
import bambakRoseDry from './images/Bambak/Bambak.rose.dry.png';
import bambakRedDry from './images/Bambak/red.dry.png';
import roseDry from "./images/Jraghatspanyan/rose.dry.png";

// const bambak2 = 'https://d2dyoi7emzmazg.cloudfront.net/bambak2.jpg'
// const bambak3 = 'https://d2dyoi7emzmazg.cloudfront.net/bambak3.jpg'
// const bambak4 = 'https://d2dyoi7emzmazg.cloudfront.net/bambak4.jpg'

export const wines =[  
{
  id: 1,
  img: garanDmakWhite,
  title: {
    "am": "Հատուկ Ընտրանի Գարան Դմակ Սպիտակ Չոր",
    "ru": "Специальная Сеlection Гаран Дмак Белое Сухое",
    "en": "Special Selection Garan Dmak White Dry"
  },
  text: {
    am: "Ծաղկային, մրգային նուրբ բույր տանձի, կանաչ խնձորի և նարնջի նոտաներով, հարմոնիկ, մրգային նուրբ համ հավասարակշռված թթվայնությամբ:",
    ru: "Цветочный, фруктовый нежный аромат с грушей, зеленым яблоком и апельсином, гармоничный, фруктовый нежный вкус со сбалансированной кислотностью.",
    en: "Floral, fruit delicate aroma with pear, green apple and orange, harmonious, fruit delicate taste with balanced acidity."
  },
  vol: '12.6',
  category: 'jraghatspanyan'
},
{
  id: 2,
  img: redDry
  title: {
    am: "Կարմիր Չոր",
    ru: "Красное Сухое",
    en: "Red Dry"
  },
  text: {
    am: "Հագեցված, հատապտուղների և ծաղկային տոներ՝ արտահայտված բույրերով սև հաղարջի, բալի, վարդերի և համեմունքների, հարստացված հագեցված, մրգային, հավասարակշռված և թավշյա տանինային համով: Նուրբ, երկար հետհամ:",
    ru: "Полнотелое, ягодные и цветочные тона с выраженными ароматами черной смородины, вишни, роз и специй, обогащенное полнотелым, фруктовым, сбалансированным и бархатным танинным вкусом. Нежное, долгое послевкусие.",
    en: "Full-bodied, berries and floral tones with pronounced aromas of black currant, cherry, roses and spices enriched with the full-bodied, fruity, balanced and velvet tannic taste. Delicate, long aftertaste."
  },
  vol: '13.4',
  category: 'jraghatspanyan'
},
{
  id: 3,
  title: {
    am: "Ռեզերվ Չոր",
    ru: "Резервное Сухое",
    en: "Reserve Dry"
  },
  text: {
    am: "Հագեցված, հատապտուղների և ծաղկային տոներ՝ արտահայտված բույրերով համեմունքների, բալի, նռանի և կաղնու, հարմոնիկ համ հատապտուղների, կաղնու և թավշյա տանիններով",
    ru: "Полнотелое, ягодные и цветочные тона с выраженными ароматами специй, вишни, граната и дуба, с гармоничным вкусом ягод, дуба и бархатных танинов",
    en: "Full-bodied, berries and floral tones with pronounced aromas of spices, cherry, pomegranate and oak, with the harmonious taste of berries, oak and velvet tannins"
  },
  vol: '13.1',
  category: 'jraghatspanyan'
},
{
  id: 4,
  img: roseDry,
  title: {
    am: "Վարդեգույն Չոր",
    ru: "Розовое Сухое",
    en: "Rose Dry"
  },
  text: {
    am: "Հագեցված, արևադարձային մրգերի, կծվածիկի և ելակի տոներով, հարմոնիկ համ գրեյպֆրուտի, կծվածիկի և ելակի նոտաներով: Երկար հետհամ քաղցր և հարմոնիկ նոտաներով",
    ru: "Полнотелое, с тонами тропических фруктов, барбариса и клубники, гармоничный вкус с тонами грейпфрута, барбариса и клубники. Долгое послевкусие со сладкими и гармоничными нотами",
    en: "Full-bodied, with tones of tropical fruits barberry and strawberries, harmonious taste with tones of grapefruit, barberry and strawberries. Long aftertaste with sweet and harmonious notes"
  },
  vol: '14.9',
  category: 'jraghatspanyan'
},
{
  id: 5,
  title: {
    am: "Հատուկ Ընտրանի Տիգրանի Կարմիր Չոր",
    ru: "Специальная Сеlection Тиграни Красное Сухое",
    en: "Special Selection Tigrani Red Dry"
  },
  text: {
    am: "Հագեցված, հատապտուղների տոներ՝ արտահայտված բույրերով մոշի, սև հաղարջի և կաղնու, հարմոնիկ համ հատապտուղների, կաղնու և թավշյա տանիններով",
    ru: "Полнотелое, ягодные тона с выраженными ароматами ежевики, черной смородины и дуба, с гармоничным вкусом ягод, дуба и бархатных танинов",
    en: "Full-bodied, berries tones with pronounced aromas of blackberry, black currant and oak, with the harmonious taste of berries, oak and velvet tannins"
  },
  vol: '14.5',
  category: 'jraghatspanyan'
},
{
  id: 6,
  title: {
    am: "Սպիտակ Չոր",
    ru: "Белое Сухое",
    en: "White Dry"
  },
  text: {
    am: "Ծաղկային, մրգային նուրբ բույր տանձի, կանաչ խնձորի և նարնջի նոտաներով, հարմոնիկ, մրգային նուրբ համ հավասարակշռված թթվայնությամբ:",
    ru: "Цветочный, фруктовый нежный аромат с грушей, зеленым яблоком и апельсином, гармоничный, фруктовый нежный вкус со сбалансированной кислотностью.",
    en: "Floral, fruit delicate aroma with pear, green apple and orange, harmonious, fruit delicate taste with balanced acidity."
  },
  vol: '14.0',
  category:'jraghatspanyan'
},
{
  id: 7,
  img: bambakRoseDry,
  title: {
    am: "Բամբակ Վարդեգույն Չոր",
    ru: "Бамбак Розовое Сухое",
    en: "Bambak Rose Dry"
  },
  text: {
    am: "Հագեցված, արևադարձային մրգերի, կծվածիկի և ելակի տոներով, հարմոնիկ համ գրեյպֆրուտի, կծվածիկի և ելակի նոտաներով: Երկար հետհամ քաղցր և հարմոնիկ նոտաներով:",
    ru: "Полнотелое, с тонами тропических фруктов, барбариса и клубники, гармоничный вкус с тонами грейпфрута, барбариса и клубники. Долгое послевкусие со сладкими и гармоничными нотами.",
    en: "Full-bodied, with tones of tropical fruits barberry and strawberries, harmonious taste with tones of grapefruit, barberry and strawberries. Long aftertaste with sweet and harmonious notes."
  },
  vol: '14.9',
  category: 'jraghatspanyan'
},
{
  id: 8,
  img: bambakRedDry,
  title: {
    am: "Բամբակ Կարմիր Չոր",
    ru: "Бамбак Красное Сухое",
    en: "Bambak Red Dry"
  },
  text: {
    am: "Հագեցված, հատապտուղների և ծաղկային տոներ՝ արտահայտված բույրերով սև հաղարջի, բալի, վարդերի և համեմունքների, հարստացված հագեցված, մրգային, հավասարակշռված և թավշյա տանինային համով: Նուրբ, երկար հետհամ:",
    ru: "Полнотелое, ягодные и цветочные тона с выраженными ароматами черной смородины, вишни, роз и специй, обогащенное полнотелым, фруктовым, сбалансированным и бархатным танинным вкусом. Нежное, долгое послевкусие.",
    en: "Full-bodied, berries and floral tones with pronounced aromas of black currant, cherry, roses and spices enriched with the full-bodied, fruity, balanced and velvet tannic taste. Delicate, long aftertaste."
  },
  vol: '13.4',
  category: 'bambak'
},
{
  id: 9,
  title: {
    am: "Բամբակ Սպիտակ Չոր",
    ru: "Бамбак Белое Сухое",
    en: "Bambak White Dry"
  },
  text: {
    am: "Ծաղկային, մրգային նուրբ բույր տանձի, կանաչ խնձորի և նարնջի նոտաներով, հարմոնիկ, մրգային նուրբ համ հավասարակշռված թթվայնությամբ:",
    ru: "Цветочный, фруктовый нежный аромат с грушей, зеленым яблоком и апельсином, гармоничный, фруктовый нежный вкус со сбалансированной кислотностью.",
    en: "Floral, fruit delicate aroma with pear, green apple and orange, harmonious, fruit delicate taste with balanced acidity."
  },
  vol: '14.2',
  category: 'bambak'
},
{
  id: 10,
  title: {
    am: "Բամբակ Նարնջագույն Չոր",
    ru: "Бамбак Оранжевое Сухое",
    en: "Bambak Orange Dry"
  },
  text: {
    am: "Ծաղկային, մրգային նուրբ բույր տանձի, կանաչ խնձորի և նարնջի նոտաներով, հարմոնիկ, մրգային նուրբ համ հավասարակշռված թթվայնությամբ:",
    ru: "Цветочный, фруктовый нежный аромат с грушей, зеленым яблоком и апельсином, гармоничный, фруктовый нежный вкус со сбалансированной кислотностью.",
    en: "Floral, fruit delicate aroma with pear, green apple and orange, harmonious, fruit delicate taste with balanced acidity."
  },
  vol: "14.0",
  category: 'bambak'
}
]

  //   {
  //   id: 1,
  //   img: garanDmakWhite,
  //   title: 'SPECIAL SELECTION GARAN DMAK WHITE DRY',
  //   text: 'Floral, fruit delicate aroma with pear, green apple and orange, harmonious, fruit delicate taste with balanced acidity.',
  //   vol: '12.6',
  // },
  // { 
  //   id: 7,
  //   img: bambakRoseDry,
  //   title: 'BAMBAK ROSE DRY',
  //   text: 'Full-bodied, with tones of tropical fruits barberry and strawberries, harmonious taste with tones of grapefruit, barberry and strawberries. Long aftertaste with sweet and harmonious notes.',
  //   vol: '14.9',
  // },


  //   {
  //   id: 2,
  //   img: redDry,
  //   title: 'RED DRY',
  //   text: 'Full-bodied, berries and floral tones with pronounced aromas of black currant, cherry, roses and spices enriched with the full-bodied, fruity, balanced and velvet tannic taste. Delicate, long aftertaste.',
  //   vol: '13.4',
  // },



  // 3: {
  //   img: reserveDry,
  //   title: 'RESERVE DRY',
  //   text: 'Full-bodied, berries and floral tones with pronounced aromas of spices, cherry, pomegranate and oak, with the harmonious taste of berries, oak and velvet tannins',
  //   vol: '13.1',
  // },
  // { 
  //   id: 3,
  //   img: roseDry,
  //   title: 'ROSE DRY',
  //   text: 'Full-bodied, with tones of tropical fruits barberry and strawberries, harmonious taste with tones of grapefruit, barberry and strawberries. Long aftertaste with sweet and harmonious notes ',
  //   vol: '14.9',
  // },
  // 5: {
  //   img: tigraniSpecial,
  //   title: 'SPECIAL SELECTION TIGRANI RED DRY',
  //   text: 'Full-bodied, berries tones with pronounced aromas of blackberry, black currant and oak, with the harmonious taste of berries, oak and velvet tannins',
  //   vol: '14.5',
  // },
  // 6: {
  //   img: whiteDry,
  //   title: 'WHITE DRY',
  //   text: 'Floral, fruit delicate aroma with pear, green apple and orange, harmonious, fruit delicate taste with balanced acidity.',
  //   vol: '14.0',
  // },
  //  { 
  //   id: 7,
  //   img: bambakRoseDry,
  //   title: 'BAMBAK ROSE DRY',
  //   text: 'Full-bodied, with tones of tropical fruits barberry and strawberries, harmonious taste with tones of grapefruit, barberry and strawberries. Long aftertaste with sweet and harmonious notes.',
  //   vol: '14.9',
  // },
  // 8: {
  //   img: bambak2,
  //   title: 'BAMBAK RED DRY',
  //   text: 'Full-bodied, berries and floral tones with pronounced aromas of black currant, cherry, roses and spices enriched with the full-bodied, fruity, balanced and velvet tannic taste. Delicate, long aftertaste.',
  //   vol: '13.4',
  // },
  // 9: {
  //   img: bambak3,
  //   title: 'BAMBAK WHITE DRY',
  //   text: 'Floral, fruit delicate aroma with pear, green apple and orange, harmonious, fruit delicate taste with balanced acidity.',
  //   vol: '14.2',
  // },
  // 10: {
  //   img: bambak4,
  //   title: 'BAMBAK Orange DRY',
  //   text: 'Floral, fruit delicate aroma with pear, green apple and orange, harmonious, fruit delicate taste with balanced acidity.',
  //   vol: '14.0',
  // },
]
