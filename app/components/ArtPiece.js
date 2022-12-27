class ArtPiece {
    constructor(index, examineeNum, attributes, chosenAttributeIndex, piece, mapPath, arrivalInstructions, audio_explanation, englishAttributes) {
      this.index = index;
      this.examineeNum = examineeNum;
      this.attributes = attributes;
      this.chosenAttributeIndex = chosenAttributeIndex;
      this.piece = piece;      
      this.mapPath = mapPath      
      this.arrivalInstructions = arrivalInstructions;
      this.audio_explanation = audio_explanation;
      this.englishAttributes = englishAttributes;
    }
  }
  

export let artPieces =
  [ new ArtPiece(1, "פרדריקה מריה בר מאת קלימט", ["יצירה מאירופה של ראשית המאה ה-20", "יצירה פוביסטית", "אמן הולנדי"],                  0,   require("../assets/images/pieces/1.png"),         require("../assets/images/maps/1.jpg"), "",	require('../assets/audio/pieces_explanations/1.wav'),                                                                             ["Art piece from beggining of 20th century",       "phobistic art piece",      "dutch artist"]),
    new ArtPiece(2, "נסיכת בבל מאת קייס ואן דונגן", ["ציור נוף", "צייר מאסכולת פריז", "אמנות קוביסטית"],                                 1,   require("../assets/images/pieces/2.png"),          require("../assets/images/maps/2.jpg"), "היצירה הבאה היא בשעה 7 שלכם. הסתובבו אחורה לכיוון דלת הכניסה ופנו ימינה", require('../assets/audio/pieces_explanations/2.wav'), ["view paint",                                     "Of an artist from paris",  "Cubist art"]),
    new ArtPiece(3, "הוויאדוקט בלאסטק מאת ז'ורז' בראק", ["ציור אקספרסיוניסטי", "ציור מופשט", "אמנות שנוצרה אחרי מלחמת העולם השניה"], 2,   require("../assets/images/pieces/3.png"),          require("../assets/images/maps/3.jpg"), "היצירה היא בשעה 1 שלכם. פנו ימינה המשיכו ישר ופנו שוב ימינה", require('../assets/audio/pieces_explanations/3.wav'),              ["Expressionist painting",                         "Abstract painting",        "Art created in 2nd world war"]),             
    new ArtPiece(4, "תולעי אדמה מאת ג'קסון פולוק", ["אמן שוויצרי", "אמן רב תחומי", "אמן שפעל בפריז"],                                     1,  require("../assets/images/pieces/4.png"),           require("../assets/images/maps/4.jpg"), "היצירה היא בשעה 6 שלכם. לכו כל הדרך לאולם הרחוק ביותר מכם.", require('../assets/audio/pieces_explanations/4.wav'),               ["Of a swiss artist",                              "Multidisciplinary artist", "Of an artist from paris"]),
    new ArtPiece(5, "אישה ונציאנית IX מאת אלברטו גי'אקומטי", ["ציור המתייחס לאמנות הפיסול", "אמנות סוריאליסטית", "אמן יווני"],          1,  require("../assets/images/pieces/5.png"),           require("../assets/images/maps/5.jpg"), "היצירה הבאה היא ממש מאחוריכם בשעה 6. הסתובבו אחורה. ", require('../assets/audio/pieces_explanations/5.wav'),                     ["A painting that refers to the art of sculpture", "Surreal art",              "Of a greek artist"]),
    new ArtPiece(6, "סוסים עתיקים מאת ג'ורגו'ו דה קיריקו", ["אמנות מזרם הדאדא", "אמן ישראלי", "אמנות מוגדרת"],                           2,  require("../assets/images/pieces/6.png"),           require("../assets/images/maps/6.jpg"), "היצירה הבאה היא בשעה 1 שלכם. פנו ימינה והיא באולם ליד.", require('../assets/audio/pieces_explanations/6.wav'),                   ["Dada art",                                       "Of an Israeli artist",     "Defined art"]),
    new ArtPiece(7, "נשף בציריך מאת מרסל ינקו", ["דיוקן אינטימי", "אמן ספרדי", "יצירה עם צבעוניות חזקה"],                                 0,  require("../assets/images/pieces/7.png"),          require("../assets/images/maps/7.jpg"), "היצירה הבאה היא בשעה 6 שלכם. לכו אחורה לאולם ליד (האמצעי בתערוכה).", require('../assets/audio/pieces_explanations/7.wav'),       ["Intimate portrait",                              "Of a spanish artist",      "Colorful & strong art piece"]  ),
    new ArtPiece(8, "דיוקן אישה מאת פבלו פיקסו", ["אמן שוויצרי", "אמן רב תחומי", "אמן שפעל בפריז"],                                        1,   require("../assets/images/pieces/8.png"),         require("../assets/images/maps/8.jpg"), "היצירה הבאה היא בשעה 1 שלכם בחדר ליד.", require('../assets/audio/pieces_explanations/8.wav'),                                     ["Of a swiss artist",                              "Multidisciplinary artist", "Of an artist from paris"])
  ]           
export default ArtPiece