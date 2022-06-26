class ArtPiece {
    constructor(index, name, attributes, chosenAttributeIndex, piece, mapPath, arrivalInstructions, audio_explanation) {
      this.index = index;
      this.name = name;
      this.attributes = attributes;
      this.chosenAttributeIndex = chosenAttributeIndex;
      this.piece = piece;      
      this.mapPath = mapPath      
      this.arrivalInstructions = arrivalInstructions;
      this.audio_explanation = audio_explanation;
    }
  }
  

export let artPieces =
  [ new ArtPiece(1, "פרדריקה מריה בר מאת קילמט", ["יצירה מאירופה של ראשית המאה ה-20", "יצירה פוביסטית", "אמן הולנדי"],                   0,   require("../assets/images/pieces/1.png"),         require("../assets/images/maps/1.jpg"), "",	require('../assets/audio/pieces_explanations/1.ogg')),
    new ArtPiece(2, "נסיכת בבל מאת קייס ואן דונגן", ["ציור נוף", "צייר מאסכולת פריז", "אמנות קוביסטית"],                                 1,   require("../assets/images/pieces/2.png"),          require("../assets/images/maps/2.jpg"), "היצירה הבאה היא בשעה 7 שלכם. הסתובבו אחורה לכיוון דלת הכניסה ופנו ימינה", require('../assets/audio/pieces_explanations/2.ogg')),
    new ArtPiece(3, "סירה בנמל אנטוורפן מאת ז'ורז' בראק", ["ציור אקספרסיוניסטי", "ציור מופשט", "אמנות שנוצרה אחרי מלחמת העולם השניה"], 2,   require("../assets/images/pieces/3.png"),          require("../assets/images/maps/3.jpg"), "היצירה היא בשעה 1 שלכם. פנו ימינה המשיכו ישר ופנו שוב ימינה", require('../assets/audio/pieces_explanations/3.ogg')),
    new ArtPiece(4, "תולעי אדמה מאת ג'קסון פולוק", ["אמן שוויצרי", "אמן רב תחומי", "אמן שפעל בפריז"],                                     0,  require("../assets/images/pieces/4.png"),           require("../assets/images/maps/4.jpg"), "היצירה היא בשעה 6 שלכם. לכו כל הדרך לאולם הרחוק ביותר מכם.", require('../assets/audio/pieces_explanations/4.ogg')),
    new ArtPiece(5, "אישה ונציאנית IX מאת אלברטו גי'אקומטי", ["ציור המתייחס לאמנות הפיסול", "אמנות סוריאליסטית", "אמן יווני"],          0,  require("../assets/images/pieces/5.png"),           require("../assets/images/maps/5.jpg"), "היצירה הבאה היא ממש מאחוריכם בשעה 6. הסתובבו אחורה. ", require('../assets/audio/pieces_explanations/5.ogg')),
    new ArtPiece(6, "סוסים עתיקים מאת ג'ורגו'ו דה קיריקו", ["אמנות מזרם הדאדא", "אמן ישראלי", "אמנות מוגדרת"],                           0,  require("../assets/images/pieces/6.png"),           require("../assets/images/maps/6.jpg"), "היצירה הבאה היא בשעה 1 שלכם. פנו ימינה והיא באולם ליד.", require('../assets/audio/pieces_explanations/6.ogg')),
    new ArtPiece(7, "נשף בציריך מאת מרסל ינקו", ["דיוקן אינטימי", "אמן ספרדי", "יצירה עם צבעוניות חזקה"],                                 0,  require("../assets/images/pieces/7.png"),          require("../assets/images/maps/7.jpg"), "היצירה הבאה היא בשעה 6 שלכם. לכו אחורה לאולם ליד (האמצעי בתערוכה).", require('../assets/audio/pieces_explanations/7.ogg')),
    new ArtPiece(8, "דיוקן אישה מאת פבלו פיקסו", ["אמן שוויצרי", "אמן רב תחומי", "אמן שפעל בפריז"],                                        0,   require("../assets/images/pieces/8.png"),         require("../assets/images/maps/8.jpg"), "היצירה הבאה היא בשעה 1 שלכם בחדר ליד.", require('../assets/audio/pieces_explanations/8.ogg'))
  ]

export default ArtPiece